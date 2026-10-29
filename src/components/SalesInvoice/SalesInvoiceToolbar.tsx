import {
  Save,
  PlusCircle,
  Send,
  CircleX,
  Search,
  Printer,
  Archive,
  LogOut,
} from "lucide-react";

const buttonStyle =
  "flex items-center justify-center gap-2 bg-white rounded-md text-[#1D4D7B] text-sm font-semibold shadow-sm w-25 h-10 hover:bg-slate-100 transition-colors";

export default function SalesInvoiceToolbar() {
  return (
    <section className="fixed bottom-0 inset-x-6 bg-slate-50 p-1 flex justify-between">
      {/* div 1 right */}
      <div className="flex flex-row gap-2 items-center">
        <button className="flex items-center justify-center gap-2 bg-[#1D4D7B] rounded-md text-white text-sm font-semibold shadow-sm w-30 h-10 hover:bg-[#315475] transition-colors">
          <Save className="size-4" />
          حفظ
        </button>

        <button className={buttonStyle}>
          <PlusCircle className="size-4" />
          جديد
        </button>

        <button className={buttonStyle}>
          <Send className="size-4" />
          ترحيل
        </button>

        <button className={buttonStyle + " text-red-600"}>
          <CircleX className="size-4" />
          حذف
        </button>

        <button className={buttonStyle}>
          <Search className="size-4" />
          بحث
        </button>

        <button className={buttonStyle}>
          <Printer className="size-4" />
          طباعة
        </button>
      </div>

      {/* div 1 left */}
      <div className="flex flex-row gap-2 items-center">
        <button className={buttonStyle}>
          <Archive className="size-4" />
          أرشفة
        </button>

        <button className={buttonStyle}>
          <LogOut className="size-4" />
          خروج
        </button>
      </div>
    </section>
  );
}