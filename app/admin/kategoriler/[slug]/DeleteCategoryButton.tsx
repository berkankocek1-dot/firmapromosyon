"use client";

type Props = {
  slug: string;
  deleteAction: (formData: FormData) => void | Promise<void>;
};

export default function DeleteCategoryButton({
  slug,
  deleteAction,
}: Props) {
  return (
    <form
      action={deleteAction}
      onSubmit={(event) => {
        const confirmed = window.confirm(
          "Bu kategoriyi kalıcı olarak silmek istediğinize emin misiniz? Bu işlem geri alınamaz."
        );

        if (!confirmed) {
          event.preventDefault();
        }
      }}
    >
      <input
        type="hidden"
        name="delete_slug"
        value={slug}
      />

      <button
        type="submit"
        className="w-full rounded-xl border border-red-300 bg-red-50 px-5 py-3 font-bold text-red-700 transition hover:bg-red-100"
      >
        Kategoriyi Kalıcı Olarak Sil
      </button>
    </form>
  );
}
