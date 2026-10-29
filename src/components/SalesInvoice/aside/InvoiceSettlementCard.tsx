import { Scale } from "lucide-react";

const labelStyle = "text-sm font-semibold text-[#265985]";

const inputStyle =
  "w-full min-w-0 rounded-md border border-slate-200 bg-white px-2 py-1 text-center text-sm font-semibold text-[#173B60] outline-none";

 
export default function InvoiceSettlementCard() {
  return (
    <section className="rounded-md bg-white p-3 space-y-3">
      <h2 className=" flex items-center gap-2 text-lg font-bold text-[#265985]">
        <Scale className="size-5" />
        تسوية الفاتورة
      </h2>

      <div className="grid grid-cols-3 gap-3">
        <label className="flex min-w-0 flex-col gap-1">
          <span className={labelStyle}>إجمالي الأجور</span>
          <input type="text" value="2,149.90" readOnly className={inputStyle} />
        </label>

        <label className="flex min-w-0 flex-col gap-1">
          <span className={labelStyle}>الخصم</span>
          <input type="number" defaultValue="0.00" className={inputStyle} />
        </label>

        <label className="flex min-w-0 flex-col gap-1">
          <span className={labelStyle}>صافي الفاتورة</span>
          <input type="text" value="2,149.90" readOnly className={inputStyle} />
        </label>

        <div className="grid grid-cols-2 gap-1">
          <label className="flex min-w-0 flex-col gap-1">
            <span className={labelStyle}>العملة</span>
            <select className={inputStyle} defaultValue="JOD">
              <option value="JOD">JOD</option>
            </select>
          </label>

          <label className="flex min-w-0 flex-col gap-1">
            <span className={labelStyle}>الصرف</span>
            <input type="number" defaultValue="1.0000" className={inputStyle} />
          </label>
        </div>

        <label className="flex min-w-0 flex-col gap-1">
          <span className={labelStyle}>الصافي بعد الضريبة</span>
          <input
            type="text"
            value="2,300.39"
            readOnly
            className={`${inputStyle} bg-emerald-50 text-emerald-700`}
          />
        </label>

        <label className="flex min-w-0 flex-col gap-1">
          <span className={labelStyle}>الضريبة</span>
          <input type="text" value="150.49" readOnly className={inputStyle} />
        </label>
      </div>
    </section>
  );
}
