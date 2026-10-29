import { Calculator, CircleDot, Boxes, Wrench, Gem } from "lucide-react";

const rowStyle =
  "flex items-center justify-between  rounded-md border border-slate-200 p-1";

const titleStyle = "flex flex-col gap- text-xs font-semibold text-[#265985]";

const countStyle = "text-xs font-normal text-slate-400";

const amountStyle = "flex items-center text-sm gap-3 font-bold text-[#265985]";

export default function InvoiceSummaryCard() {
  return (
    <div className="flex flex-col gap-1 rounded-md bg-white px-2 py-1">
      <h2 className="flex items-center gap-2 text-lg font-bold text-[#265985]">
        <Calculator className="size-5" />
        ملخص الفاتورة
      </h2>

      <div className={rowStyle}>
        <h3 className={titleStyle}>
          قطع المجوهرات
          <span className={countStyle}>3 أصناف</span>
        </h3>

        <div className={amountStyle}>
          <span dir="ltr">1,440.00</span>
          <CircleDot className="size-4 shrink-0 text-yellow-500" />
        </div>
      </div>

      <div className={rowStyle}>
        <h3 className={titleStyle}>
          صناديق الذهب
          <span className={countStyle}>2 صنف</span>
        </h3>

        <div className={amountStyle}>
          <span dir="ltr">900.00</span>
          <Boxes className="size-6 shrink-0 text-yellow-500" />
        </div>
      </div>

      <div className={rowStyle}>
        <h3 className={titleStyle}>
          مواد الخدمات
          <span className={countStyle}>2 صنف</span>
        </h3>

        <div className={amountStyle}>
          <span dir="ltr">100.00</span>
          <Wrench className="size-6 shrink-0 text-slate-700" />
        </div>
      </div>

      <div className={rowStyle}>
        <h3 className={titleStyle}>
          كاشينات الأحجار الثمينة
          <span className={countStyle}>2 صنف</span>
        </h3>

        <div className={amountStyle}>
          <span dir="ltr">260.00</span>
          <Gem className="size-6 shrink-0 text-[#265985]" />
        </div>
      </div>

      <div className="flex items-center justify-between  rounded-md bg-[#1D4D7B] py-1 px-7 text-white">
        <h3 className="text-sm font-bold">إجمالي الفاتورة</h3>
        <span className="text-2xl font-bold" dir="ltr">
          2,700.00
        </span>
      </div>
    </div>
  );
}
