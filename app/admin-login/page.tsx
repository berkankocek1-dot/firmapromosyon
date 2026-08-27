import { redirect } from "next/navigation";
import {
  createAdminSession,
  isAdminAuthenticated,
  verifyAdminPassword,
} from "@/lib/admin-auth";

export const metadata = {
  title: "Yönetim Paneli Girişi | FirmaPromosyon",
  robots: {
    index: false,
    follow: false,
  },
};

async function login(formData: FormData) {
  "use server";

  const password = String(formData.get("password") ?? "");

  if (!password) {
    redirect("/admin-login?error=empty");
  }

  if (!verifyAdminPassword(password)) {
    redirect("/admin-login?error=invalid");
  }

  await createAdminSession();

  redirect("/admin");
}

type PageProps = {
  searchParams: Promise<{
    error?: string;
  }>;
};

export default async function AdminLoginPage({
  searchParams,
}: PageProps) {
  if (await isAdminAuthenticated()) {
    redirect("/admin");
  }

  const { error } = await searchParams;

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
        <div className="text-center">
          <div className="text-2xl font-black">
            FirmaPromosyon
          </div>

          <div className="mt-2 text-sm font-semibold text-gray-500">
            Yönetim Paneli
          </div>
        </div>

        <h1 className="mt-8 text-center text-2xl font-black">
          Admin Girişi
        </h1>

        <p className="mt-2 text-center text-sm text-gray-500">
          Yönetim paneline erişmek için şifrenizi girin.
        </p>

        {error && (
          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
            {error === "empty"
              ? "Lütfen şifrenizi girin."
              : "Şifre hatalı. Tekrar deneyin."}
          </div>
        )}

        <form action={login} className="mt-6">
          <label className="block">
            <div className="mb-2 text-sm font-bold">
              Yönetici Şifresi
            </div>

            <input
              type="password"
              name="password"
              autoComplete="current-password"
              required
              autoFocus
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
              placeholder="••••••••••••"
            />
          </label>

          <button
            type="submit"
            className="mt-5 w-full rounded-xl bg-black px-5 py-3 font-bold text-white transition hover:opacity-90"
          >
            Giriş Yap
          </button>
        </form>

        <a
          href="/"
          className="mt-5 block text-center text-sm font-semibold text-gray-500 hover:text-black"
        >
          ← Siteye dön
        </a>
      </div>
    </main>
  );
}
