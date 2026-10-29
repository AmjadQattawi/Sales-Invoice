import { useState } from "react";
import SharedTable from "./SharedTable";
import { Wrench } from "lucide-react";
import {
  blankServiceMaterialLine,
  type ServiceMaterialLine,
} from "../../../utils/salesInvoiceRows";
import { serviceMaterialsColumns } from "./TableColums";

export default function ServicesMaterialsTable() {
  const [isOpen, setIsOpen] = useState(true);

  function onToggle() {
    setIsOpen(!isOpen);
  }

  const [rows] = useState<ServiceMaterialLine[]>(() => [
    blankServiceMaterialLine(),
    blankServiceMaterialLine(),
  ]);

  return (
    <SharedTable
      header={{
        title: "مواد الخدمات",
        icon: <Wrench className="size-7" />,
        total: 100,
        isOpen,
        onToggle,
        rowCount: rows.length,
      }}
      rows={rows}
      columns={serviceMaterialsColumns}
      tableMinWidth="min-w-[800px]"
      summaries={[
        { key: "quantity", label: "العدد", value: 3 },
        { key: "total", label: "الإجمالي", value: "100.00" },
      ]}
    />
  );
}
