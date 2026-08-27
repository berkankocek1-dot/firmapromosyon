import crypto from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "fp_admin_session";
const SESSION_DURATION = 60 * 60 * 12; // 12 saat

function getSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET tanımlı değil.");
  }

  return secret;
}

function sign(value: string) {
  return crypto
    .createHmac("sha256", getSecret())
    .update(value)
    .digest("hex");
}

function safeEqual(a: string, b: string) {
  const aBuffer = Buffer.from(a);
  const bBuffer = Buffer.from(b);

  if (aBuffer.length !== bBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(aBuffer, bBuffer);
}

export function verifyAdminPassword(password: string) {
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    throw new Error("ADMIN_PASSWORD tanımlı değil.");
  }

  const inputHash = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  const passwordHash = crypto
    .createHash("sha256")
    .update(adminPassword)
    .digest("hex");

  return safeEqual(inputHash, passwordHash);
}

export async function createAdminSession() {
  const cookieStore = await cookies();

  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_DURATION;
  const payload = `admin:${expiresAt}`;
  const signature = sign(payload);

  cookieStore.set(
    COOKIE_NAME,
    `${payload}.${signature}`,
    {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: SESSION_DURATION,
    }
  );
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const session = cookieStore.get(COOKIE_NAME)?.value;

  if (!session) {
    return false;
  }

  const parts = session.split(".");

  if (parts.length !== 2) {
    return false;
  }

  const [payload, signature] = parts;
  const expectedSignature = sign(payload);

  if (!safeEqual(signature, expectedSignature)) {
    return false;
  }

  const [role, expiresRaw] = payload.split(":");

  if (role !== "admin") {
    return false;
  }

  const expiresAt = Number(expiresRaw);

  if (!Number.isFinite(expiresAt)) {
    return false;
  }

  if (Math.floor(Date.now() / 1000) > expiresAt) {
    return false;
  }

  return true;
}

export async function destroyAdminSession() {
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });
}
