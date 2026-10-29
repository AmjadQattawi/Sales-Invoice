import { NotebookPen } from "lucide-react";
 
export default function PriceAndNotes() {
  return (
    <section className="  rounded-md bg-white p-3">


      <label className="flex flex-col gap-1">
        <span className="flex items-center gap-2 text-sm font-semibold text-[#355675]">
          <NotebookPen className="size-4" />
          الملاحظات
        </span>

        <textarea
          rows={2}
          className="w-full resize-y rounded-md border border-slate-200 px-2 py-1 text-sm text-[#173B60] outline-none focus:border-[#265985]"
        />
      </label>
    </section>
  );
}
