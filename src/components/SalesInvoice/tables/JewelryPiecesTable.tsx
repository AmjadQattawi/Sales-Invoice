import { useState } from "react";
import SharedTable from "./SharedTable";
import { Gem } from "lucide-react";
import {
  blankJewelryPieceLine,
  type JewelryPieceLine,
} from "../../../utils/salesInvoiceRows";
import { jewelryPiecesColumns } from "./TableColums";

export default function JewelryPiecesTable() {
  const [isOpen, setIsOpen] = useState(true);

  function onToggle() {
    setIsOpen(!isOpen);
  }

  const [rows] = useState<JewelryPieceLine[]>(() => [
    blankJewelryPieceLine(),
    blankJewelryPieceLine(),
  ]);
  return (
    <SharedTable
      header={{
        title: "قطع المجوهرات",
        icon: <Gem className="size-7" />,
        total: 1499,
        isOpen,
        onToggle,
        rowCount: rows.length,
      }}
      columns={jewelryPiecesColumns}
      rows={rows}
      tableMinWidth="min-w-[3000px]"
      summaries={[
        { key: "goldWeight", label: "وزن الذهب", value: "13.9500" },
        { key: "grossWeight", label: "الوزن القائم", value: "14.2000" },
        { key: "saleAlloy", label: "الحلة / بيع", value: "0.7900" },
        { key: "salePrice", label: "سعر البيع", value: "1440.00" },
        { key: "alloy", label: "الحلة", value: "0.7900" },
        { key: "wages", label: "الأجور", value: "60.00" },
        { key: "diamondWeight", label: "وزن الماس", value: "0.2500" },
        { key: "coloredWeight", label: "وزن ملون", value: "0.1000" },
        { key: "diamondCount", label: "عدد الماس", value: 4 },
        { key: "coloredCount", label: "عدد ملون", value: 2 },
      ]}
    />
  );
}
