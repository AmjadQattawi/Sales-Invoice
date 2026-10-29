import { useState } from "react";
import SharedTable from "./SharedTable";
import { Gem } from "lucide-react";
import {
  blankGemstoneCollectionLine,
  type GemstoneCollectionLine,
} from "../../../utils/salesInvoiceRows";
import { gemstoneCollectionsColumns } from "./TableColums";

export default function GemstoneCollectionTable() {
  const [isOpen, setIsOpen] = useState(true);

  function onToggle() {
    setIsOpen(!isOpen);
  }

  const [rows] = useState<GemstoneCollectionLine[]>(() => [
    blankGemstoneCollectionLine(),
    blankGemstoneCollectionLine(),
  ]);

  return (
    <SharedTable
      header={{
        title: "كاشينات الأحجار الثمينة",
        icon: <Gem className="size-7" />,
        total: 260,
        isOpen,
        onToggle,
        rowCount: rows.length,
      }}
      rows={rows}
      columns={gemstoneCollectionsColumns}
      tableMinWidth="min-w-[800px]"
      summaries={[
        { key: "grossWeight", label: "الوزن القائم", value: "8.0000" },
        { key: "wages", label: "الأجور", value: "20.00" },
        { key: "quantity", label: "العدد", value: 15 },
        { key: "total", label: "الإجمالي", value: "260.00" },
        { key: "itemCount", label: "عدد المواد", value: 2 },
      ]}
    />
  );
}
