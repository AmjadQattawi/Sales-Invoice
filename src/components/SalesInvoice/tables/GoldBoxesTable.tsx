import { useState } from "react";
import SharedTable from "./SharedTable";
import { Box } from "lucide-react";
import { goldBoxesColumns } from "./TableColums";
import {
  blankGoldBoxLine,
  type GoldBoxLine,
} from "../../../utils/salesInvoiceRows";

export default function GoldBoxesTable() {
  const [isOpen, setIsOpen] = useState(true);

  function onToggle() {
    setIsOpen(!isOpen);
  }

  const [rows] = useState<GoldBoxLine[]>(() => [
    blankGoldBoxLine(),
    blankGoldBoxLine(),
  ]);

  return (
    <SharedTable
      header={{
        title: "صناديق الذهب",
        icon: <Box className="size-7" />,
        total: 900,
        isOpen,
        onToggle,
        rowCount: rows.length,
      }}
      columns={goldBoxesColumns}
      rows={rows}
      tableMinWidth="min-w-[2100px]"
      summaries={[
        { key: "grossWeight", label: "الوزن القائم", value: "45.0000" },
        { key: "alloy", label: "الحلة", value: "0.7900" },
        { key: "quantity", label: "العدد", value: 42 },
        { key: "wages", label: "الأجور", value: "50.00" },
        { key: "total", label: "الإجمالي", value: "900.00" },
        { key: "itemCount", label: "عدد المواد", value: 2 },
      ]}
    />
  );
}
