import {
  Wallet,
  FilePenLine,
  Banknote,
  CreditCard,
  Trash2,
} from "lucide-react";
import SharedTable from "../tables/SharedTable";
import {
  blankInvoicePaymentLine,
  type InvoicePaymentLine,
} from "../../../utils/salesInvoiceRows";
import { useState } from "react";
import { invoicePaymentColumns } from "../tables/TableColums";

const buttonStyle =
  "flex flex-1 items-center justify-center gap-2 h-9 font-semibold rounded-md bg-[#3b8fde] text-white hover:bg-[#2b69a3] transition-colors";

export default function InvoicePaymentCard() {
  const [rows] = useState<InvoicePaymentLine[]>(() => [
    blankInvoicePaymentLine(),
  ]);

  return (
    <div className="flex flex-col gap-1 rounded-md bg-white px-2 py-3">
      <div className="flex flex-row justify-between">
        <h2 className="flex items-center gap-2 text-lg font-bold text-[#265985]">
          <Wallet className="size-5" />
          بيانات الدفع
        </h2>
        <button
          type="button"
          className="flex items-center justify-center gap-3 bg-white rounded-md text-red-600 text-sm font-semibold shadow-sm w-36 h-10 hover:bg-slate-100 transition-colors border border-red-500/40"
        >
          <Trash2 className="size-4" />
          حذف المحدد
        </button>
      </div>

      <div className="flex gap-2">
        <button type="button" className={buttonStyle}>
          <FilePenLine className="size-5 shrink-0" />
          Credit
        </button>

        <button type="button" className={buttonStyle}>
          <Banknote className="size-5 shrink-0" />
          Cash
        </button>

        <button type="button" className={buttonStyle}>
          <CreditCard className="size-5 shrink-0" />
          Cards
        </button>
      </div>


      {/* table -------------- */}
      <SharedTable
        columns={invoicePaymentColumns}
        rows={rows}
        tableMinWidth="min-w-[700px]"
        containerHeight="h-55"
      />
      {/* table -------------- */}
      

      <div className="flex items-end gap-2 rounded-md border border-slate-200 p-2">
        <label className="flex min-w-0 flex-1 flex-col gap-1 text-center">
          <span className="text-sm font-bold text-[#265985]">المدفوع</span>
          <input
            type="text"
            value="2,300.39"
            readOnly
            className="w-full rounded-sm border border-slate-200 bg-white py-1 text-center text-sm font-bold text-[#173B60] outline-none"
          />
        </label>

        <span className="pb-1 text-xl font-bold text-red-500">−</span>

        <label className="flex min-w-0 flex-1 flex-col gap-1 text-center">
          <span className="text-sm font-bold text-[#265985]">الإجمالي</span>
          <input
            type="text"
            value="2,300.39"
            readOnly
            className="w-full rounded-sm border border-slate-200 bg-white py-1 text-center text-sm font-bold text-[#173B60] outline-none"
          />
        </label>

        <span className="pb-1 text-xl font-bold text-emerald-500">=</span>

        <label className="flex min-w-0 flex-1 flex-col gap-1 text-center">
          <span className="text-sm font-bold text-[#265985]">الباقي</span>
          <input
            type="text"
            value="0.00"
            readOnly
            className="w-full rounded-sm border border-emerald-100 bg-emerald-50 py-1 text-center text-sm font-bold text-emerald-600 outline-none"
          />
        </label>
      </div>
    </div>
  );
}
