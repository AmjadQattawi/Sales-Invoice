import { FileText, UserRound } from "lucide-react";

const today = new Date();
const localDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

const labelStyle = "text-sm font-semibold text-[#355675] pr-4";

const inputStyle =
  "w-full border border-slate-200 rounded-md px-3 py-1 text-[#173B60] font-semibold outline-none focus:border-slate-800";

export default function SalesInvoiceInfo() {
  return (
    <section
      
      className="bg-white rounded-md p-2 grid grid-cols-2 sm:grid-cols-7 gap-3 border border-slate-100 shrink-0 "
    >
      <div className="flex flex-col gap-1">
        <label className={labelStyle}>تاريخ السند</label>
        <input type="date" className={inputStyle} defaultValue={localDate} />
      </div>

      <div className="flex flex-col gap-1">
        <label className={labelStyle}>رقم السند</label>
        <div className="relative">
          <input
            type="number"
            className={`${inputStyle} pr-10`}
            defaultValue="000.000"
          />
          {/* icon */}
          <FileText className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#355675] pointer-events-none" />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className={labelStyle}>الرقم الالي</label>
        <input
          type="number"
          className={inputStyle}
          readOnly
          defaultValue="000.000"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className={labelStyle}>الحساب</label>
        <div className="relative">
          <select className={`${inputStyle} pr-10`}>
            <option>الحساب 1</option>
            <option>الحساب 2</option>
            <option>الحساب 3</option>
          </select>
          <UserRound className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#355675] pointer-events-none" />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className={labelStyle}>الموظف</label>
        <div className="relative">
          <select className={`${inputStyle} pr-10`}>
            <option>موظف 1</option>
            <option>موظف 2</option>
            <option>موظف 3</option>
          </select>
          <UserRound className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#355675] pointer-events-none" />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className={labelStyle}>سرية السند</label>
        <select className={inputStyle}>
          <option>منخفض السرية</option>
          <option>متوسط السرية</option>
          <option>عالي السرية</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className={labelStyle}>سعر الذهب</label>
        <input
          type="number"
          className={inputStyle}
          readOnly
          defaultValue="000.000"
        />
      </div>
    </section>
  );
}
