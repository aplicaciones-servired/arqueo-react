// En exportarExcel.js

import * as XLSX from "xlsx";

export const exportarAExcel = (registros) => {
    console.log('object :>> ', registros);
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(registros);
  XLSX.utils.book_append_sheet(wb, ws, "Registros");
  XLSX.writeFile(wb, "registros.xlsx");
};
