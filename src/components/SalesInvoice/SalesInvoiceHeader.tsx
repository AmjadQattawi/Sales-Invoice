import { ChevronLeft, ChevronRight, Gem } from "lucide-react";
import { useState } from "react";

export default function SalesInvoiceHeader() {
  const [posted] = useState(false);

  return (
    <section className="flex items-center justify-between gap-4">
      <h1 className="flex items-center gap-2 text-2xl font-extrabold text-[#153b5d]">
        <Gem className="size-7" />
        فاتورة مبيعات
      </h1>

      <div className="flex items-center gap-4">
        <span
          className={`flex items-center gap-2 rounded-md border px-3 py-1 text-sm font-semibold ${
            posted
              ? "border-emerald-200 bg-emerald-50 text-emerald-600"
              : "border-red-200 bg-red-50 text-red-600"
          }`}
        >
          <span
            className={`size-2 rounded-full ${
              posted ? "bg-emerald-500" : "bg-red-500"
            }`}
          />
          {posted ? "مرحل" : "غير مرحل"}
        </span>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="السند السابق"
            className="flex size-8 items-center justify-center rounded-md border border-slate-200 bg-white text-[#265985] hover:bg-slate-100"
          >
            <ChevronRight className="size-4" />
          </button>

          <span className="text-sm font-semibold text-[#355675]">
            1 من 7
          </span>

          <button
            type="button"
            aria-label="السند التالي"
            className="flex size-8 items-center justify-center rounded-md border border-slate-200 bg-white text-[#265985] hover:bg-slate-100"
          >
            <ChevronLeft className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}