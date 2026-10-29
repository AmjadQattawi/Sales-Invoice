// Row types and initial empty rows for sales invoice tables.


// JewelryPieceLine -----------------------
export type JewelryPieceLine = {
  id: string;
  itemNumber: string;
  wagesBeforeDiscount: string;
  discount: string;
  saleWages: string;
  saleKarat: string;
  saleAlloy: string;
  minimumSalePrice: string;
  grossWeight: string;
  goldWeight: string;
  karat: string;
  alloy: string;
  totalWages: string;
  description: string;
  diamondWeight: string;
  diamondCount: string;
  coloredWeight: string;
  coloredCount: string;
  warehouse: string;
  alloyPrice: string;
};

export function blankJewelryPieceLine(): JewelryPieceLine {
  return {
    id: crypto.randomUUID(),
    itemNumber: "",
    wagesBeforeDiscount: "0.0000",
    discount: "0.0000",
    saleWages: "0.0000",
    saleKarat: "0.0000",
    saleAlloy: "0.0000",
    minimumSalePrice: "0.0000",
    grossWeight: "0.0000",
    goldWeight: "0.0000",
    karat: "0.0000",
    alloy: "0.0000",
    totalWages: "0.0000",
    description: "",
    diamondWeight: "0.0000",
    diamondCount: "0",
    coloredWeight: "0.0000",
    coloredCount: "0",
    warehouse: "",
    alloyPrice: "0.0000",
  };
}


// GoldBoxLine ----------------------------
export type GoldBoxLine = {
  id: string;
  boxNumber: string;
  description: string;
  grossWeight: string;
  quantity: string;
  karat: string;
  alloy: string;
  alloyPrice: string;
  unitWages: string;
  wagesBeforeDiscount: string;
  discount: string;
  totalWages: string;
  total: string;
  warehouse: string;
  notes: string;
};

export function blankGoldBoxLine(): GoldBoxLine {
  return {
    id: crypto.randomUUID(),
    boxNumber: "",
    description: "",
    grossWeight: "0.0000",
    quantity: "0",
    karat: "0.0000",
    alloy: "0.0000",
    alloyPrice: "0.0000",
    unitWages: "0.0000",
    wagesBeforeDiscount: "0.0000",
    discount: "0.0000",
    totalWages: "0.0000",
    total: "0.0000",
    warehouse: "",
    notes: "",
  };
}


// ServiceMaterialLine ----------------------------
export type ServiceMaterialLine = {
  id: string;
  boxNumber: string;
  description: string;
  quantity: string;
  unitPrice: string;
  discount: string;
  total: string;
  net: string;
};

export function blankServiceMaterialLine(): ServiceMaterialLine {
  return {
    id: crypto.randomUUID(),
    boxNumber: "",
    description: "",
    quantity: "0",
    unitPrice: "0.0000",
    discount: "0.0000",
    total: "0.0000",
    net: "0.0000",
  };
}


// GemstoneCollectionLine ------------------------
export type GemstoneCollectionLine = {
  id: string;
  boxNumber: string;
  description: string;
  grossWeight: string;
  quantity: string;
  unitWages: string;
  wagesBeforeDiscount: string;
  discount: string;
  totalWages: string;
  warehouse: string;
};

export function blankGemstoneCollectionLine(): GemstoneCollectionLine {
  return {
    id: crypto.randomUUID(),
    boxNumber: "",
    description: "",
    grossWeight: "0.0000",
    quantity: "0",
    unitWages: "0.0000",
    wagesBeforeDiscount: "0.0000",
    discount: "0.0000",
    totalWages: "0.0000",
    warehouse: "",
  };
}

// Payment row type and initial empty row -------------
export type InvoicePaymentLine = {
  id: string;
  debit: string;
  credit: string;
  account: string;
  currency: string;
  rate: string;
  dueDate: string;
  description: string;
};

export function blankInvoicePaymentLine(): InvoicePaymentLine {
  return {
    id: crypto.randomUUID(),
    debit: "0.0000",
    credit: "0.0000",
    account: "",
    currency: "JOD",
    rate: "1.0000",
    dueDate: "",
    description: "",
  };
}
