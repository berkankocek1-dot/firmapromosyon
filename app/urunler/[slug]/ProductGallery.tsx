"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Props = {
  title: string;
  mainImage: string;
  gallery: string[];
};

export default function ProductGallery({
  title,
  mainImage,
  gallery,
}: Props) {
  const images = useMemo(() => {
    return Array.from(
      new Set(
        [mainImage, ...gallery]
          .map((item) => item?.trim())
          .filter(Boolean)
      )
    );
  }, [mainImage, gallery]);

  const [selectedImage, setSelectedImage] = useState(mainImage);

  return (
    <div>
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl border bg-white">
        <Image
          src={selectedImage}
          alt={title}
          fill
          unoptimized
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain p-6"
        />
      </div>

      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {images.map((imageUrl, index) => {
            const active = selectedImage === imageUrl;

            return (
              <button
                key={`${imageUrl}-${index}`}
                type="button"
                onClick={() => setSelectedImage(imageUrl)}
                className={`relative aspect-square overflow-hidden rounded-xl border bg-white transition ${
                  active
                    ? "border-2 border-black"
                    : "border-gray-200 hover:border-gray-500"
                }`}
              >
                <Image
                  src={imageUrl}
                  alt={`${title} - Görsel ${index + 1}`}
                  fill
                  unoptimized
                  sizes="150px"
                  className="object-contain p-2"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
