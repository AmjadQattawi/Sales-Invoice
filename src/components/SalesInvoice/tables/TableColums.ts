// Column definitions for rendering each sales invoice table.

import type {
  GemstoneCollectionLine,
  GoldBoxLine,
  InvoicePaymentLine,
  JewelryPieceLine,
  ServiceMaterialLine,
} from "../../../utils/salesInvoiceRows";

export type TableColumn<Row> = {
  label: string;
  key: Exclude<keyof Row, "id">;
  type: "text" | "number" | "select" | "date";
  options?: {
    value: string;
    label: string;
  }[];
};

// jewelryPiecesColumns -------------
export const jewelryPiecesColumns: TableColumn<JewelryPieceLine>[] = [
  // { label: "#", key: "lineNo", type: "text" },
  { label: "رقم المادة", key: "itemNumber", type: "select" },
  {
    label: "الأجور قبل الخصم",
    key: "wagesBeforeDiscount",
    type: "number",
  },
  { label: "قيمة الخصم", key: "discount", type: "number" },
  { label: "أجور / بيع", key: "saleWages", type: "number" },
  { label: "عيار / بيع", key: "saleKarat", type: "number" },
  { label: "حلة / بيع", key: "saleAlloy", type: "number" },
  { label: "أقل سعر بيع", key: "minimumSalePrice", type: "number" },
  { label: "الوزن القائم", key: "grossWeight", type: "number" },
  { label: "وزن الذهب", key: "goldWeight", type: "number" },
  { label: "العيار", key: "karat", type: "number" },
  { label: "حلة", key: "alloy", type: "number" },
  { label: "إجمالي الأجور", key: "totalWages", type: "number" },
  { label: "وصف القطعة", key: "description", type: "text" },
  { label: "وزن الماس", key: "diamondWeight", type: "number" },
  { label: "عدد الماس", key: "diamondCount", type: "number" },
  { label: "وزن ملون", key: "coloredWeight", type: "number" },
  { label: "عدد ملون", key: "coloredCount", type: "number" },
  { label: "المستودع", key: "warehouse", type: "text" },
  { label: "سعر الحلة", key: "alloyPrice", type: "number" },
];

// goldBoxesColumns ------------------
export const goldBoxesColumns: TableColumn<GoldBoxLine>[] = [
  { label: "رقم الصندوق", key: "boxNumber", type: "select" },
  { label: "وصف المادة", key: "description", type: "text" },
  { label: "الوزن القائم", key: "grossWeight", type: "number" },
  { label: "العدد", key: "quantity", type: "number" },
  { label: "العيار", key: "karat", type: "number" },
  { label: "حلة", key: "alloy", type: "number" },
  { label: "سعر الحلة", key: "alloyPrice", type: "number" },
  { label: "أجور الوحدة", key: "unitWages", type: "number" },
  {
    label: "الأجور قبل الخصم",
    key: "wagesBeforeDiscount",
    type: "number",
  },
  { label: "قيمة الخصم", key: "discount", type: "number" },
  { label: "إجمالي الأجور", key: "totalWages", type: "number" },
  { label: "الإجمالي", key: "total", type: "number" },
  { label: "المستودع", key: "warehouse", type: "text" },
  { label: "ملاحظات المادة", key: "notes", type: "text" },
];

// serviceMaterialsColumns ---------------------
export const serviceMaterialsColumns: TableColumn<ServiceMaterialLine>[] = [
  { label: "رقم الصندوق", key: "boxNumber", type: "select" },
  { label: "وصف المادة", key: "description", type: "text" },
  { label: "العدد", key: "quantity", type: "number" },
  { label: "سعر الوحدة", key: "unitPrice", type: "number" },
  { label: "قيمة الخصم", key: "discount", type: "number" },
  { label: "الإجمالي", key: "total", type: "number" },
  { label: "الصافي", key: "net", type: "number" },
];

// gemstoneCollectionsColumns ----------------
export const gemstoneCollectionsColumns: TableColumn<GemstoneCollectionLine>[] =
  [
    { label: "رقم الصندوق", key: "boxNumber", type: "select" },
    { label: "وصف المادة", key: "description", type: "text" },
    { label: "الوزن القائم", key: "grossWeight", type: "number" },
    { label: "العدد", key: "quantity", type: "number" },
    { label: "أجور الوحدة", key: "unitWages", type: "number" },
    {
      label: "الأجور قبل الخصم",
      key: "wagesBeforeDiscount",
      type: "number",
    },
    { label: "قيمة الخصم", key: "discount", type: "number" },
    { label: "إجمالي الأجور", key: "totalWages", type: "number" },
    { label: "المستودع", key: "warehouse", type: "text" },
  ];

  
// invoicePaymentColumns -------------------------------
export const invoicePaymentColumns: TableColumn<InvoicePaymentLine>[] = [
  {
    key: "debit",
    label: "المدين",
    type: "number",
  },
  {
    key: "credit",
    label: "الدائن",
    type: "number",
  },
  {
    key: "account",
    label: "الحساب",
    type: "select",
    options: [
      { value: "cash", label: "الصندوق النقدي" },
      { value: "bank", label: "البنك" },
    ],
  },
  {
    key: "currency",
    label: "العملة",
    type: "select",
    options: [
      { value: "JOD", label: "JOD" },
      { value: "USD", label: "USD" },
    ],
  },
  {
    key: "rate",
    label: "الصرف",
    type: "number",
  },
  {
    key: "dueDate",
    label: "تاريخ الحق",
    type: "date",
  },
  {
    key: "description",
    label: "البيان",
    type: "text",
  },
];
