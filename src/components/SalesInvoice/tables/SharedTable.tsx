import { ChevronUp, Trash2 } from "lucide-react";
import type { ReactNode } from "react";
import type { TableColumn } from "./TableColums";

export type TableSummary = {
  key: string;
  label: string;
  value: string | number;
};

export default function SharedTable<Row>({
  header,
  columns,
  rows,
  tableMinWidth,
  summaries,
  containerHeight = "",
}: {
  header?: {
    title: string;
    icon?: ReactNode;
    isOpen: boolean;
    total: number;
    onToggle: () => void;
    rowCount: number;
  };
  columns: TableColumn<Row>[];
  rows: Row[];
  tableMinWidth: string;
  summaries?: TableSummary[];
  containerHeight?: string;
}) {
  return (
    <section className="flex flex-col w-full bg-white rounded-md shrink-0">
      {/* الشريط الأزرق فوق الجدول */}
      {header && (
        <header className="bg-[#265985] rounded-md flex flex-row items-center px-3 justify-between">
          <div className="flex items-center gap-11">
            <button
              type="button"
              className="text-red-600 h-7 px-3 font-bold flex items-center justify-center gap-2 bg-white rounded-md"
            >
              <Trash2 className="size-4" />
              حذف المحدد
            </button>

            <span className="text-md text-slate-200 leading-relaxed">
              إجمالي {header.title}
            </span>

            <span className="text-xl font-semibold text-white">
              {header.total.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <h2 className="text-white text-xl leading-relaxed font-bold flex items-center gap-2">
              {header.title} {header.icon}
            </h2>

            <span className="flex size-6.5 items-center justify-center rounded-md border border-orange-400 bg-white text-sm font-bold text-orange-700">
              {header.rowCount}
            </span>

            <button
              type="button"
              onClick={header.onToggle}
              className="size-6 text-white"
            >
              <ChevronUp
                className={`size-5 ${header.isOpen ? "" : "rotate-180"}`}
              />
            </button>
          </div>
        </header>
      )}

      {/* الجدول */}
      <div
        className={`overflow-auto mx-1 ${containerHeight}`}
        hidden={header ? !header.isOpen : false}
      >
        <table
          className={`w-full ${tableMinWidth} border-collapse border-slate-200 text-right text-xs text-[#265985] `}
        >
          <thead className="bg-slate-100 ">
            <tr>
              <th className="w-10 p-1 text-center border border-slate-200">
                <input type="checkbox" aria-label="تحديد الكل" />
              </th>
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  className="border border-slate-200 text-center"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-slate-200">
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="w-10  py-1 text-center border border-slate-200">
                  <input
                    type="checkbox"
                    aria-label={`تحديد السطر ${rowIndex + 1}`}
                  />
                </td>

                {columns.map((col) => (
                  <td
                    key={String(col.key)}
                    className="border border-slate-200 text-center"
                  >
                    {col.type === "select" ? (
                      <select
                        defaultValue={String(row[col.key] ?? "")}
                        className="w-full text-center outline-none"
                      >
                        <option value="">اختر...</option>

                        {col.options?.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={col.type}
                        defaultValue={String(row[col.key] ?? "")}
                        className="w-full text-center outline-none"
                      />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     {summaries && summaries.length > 0 && (
  <div
    hidden={header ? !header.isOpen : false}
    className="bg-[#F0F5FA] rounded-md p-2 m-1"
  >
    <div className="flex flex-1 flex-wrap gap-2">
      {summaries.map((summary) => (
        <label
          key={summary.key}
          className="flex flex-1 flex-col gap-1 text-center"
        >
          <span className="text-xs font-semibold text-[#265985]">
            {summary.label}
          </span>

          <input
            type="text"
            value={summary.value}
            readOnly
            className="w-full rounded-sm bg-white px-2 py-1 text-center text-xs font-semibold text-[#173B60] outline-none"
          />
        </label>
      ))}
    </div>
  </div>
)}

    </section>
  );
}
