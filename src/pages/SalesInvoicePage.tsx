import SalesInvoiceAside from "../components/SalesInvoice/aside/SalesInvoiceAside";
import SalesInvoiceHeader from "../components/SalesInvoice/SalesInvoiceHeader";
import SalesInvoiceInfo from "../components/SalesInvoice/SalesInvoiceInfo";
import SalesInvoiceToolbar from "../components/SalesInvoice/SalesInvoiceToolbar";
import AllTables from "../components/SalesInvoice/tables/AllTables";
 

export default function SalesInvoicePage() {
  return (
    <div
      dir="rtl"
      className="bg-[#F0F5FA] h-screen p-6 pb-16 flex flex-col gap-2 overflow-hidden"
    >

      <SalesInvoiceHeader />

      <SalesInvoiceInfo />

      <div className="grid grid-cols-12 gap-3   flex-1 min-h-0">
        <AllTables />
        <SalesInvoiceAside />
      </div>

      <SalesInvoiceToolbar />
    </div>
  );
}