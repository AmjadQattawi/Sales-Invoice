import InvoicePaymentCard from "./InvoicePaymentCard";
import InvoiceSettlementCard from "./InvoiceSettlementCard";
import PriceAndNotes from "./PriceAndNotes";

export default function SalesInvoiceAside() {
  return (
    <aside className=" col-span-3 flex flex-col gap-2">
      {/* div 1  */}
      <PriceAndNotes />

      {/* div 2 */}
      <InvoicePaymentCard />

      {/* div 3 */}
      <InvoiceSettlementCard />

      



    </aside>
  );
}
