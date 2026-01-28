export const processExcelData = (workbook) => {
  const result = {};
  workbook.SheetNames.forEach(sheetName => {
    const sheet = workbook.Sheets[sheetName];
    result[sheetName] = XLSX.utils.sheet_to_json(sheet);
  });
  return result;
};

export const getColumnsFromData = (data) => {
  if (!data || data.length === 0) return [];
  return Object.keys(data[0]);
};

export const sampleData = [
  { mes: 'Jan', vendas: 4000, custos: 2400 },
  { mes: 'Fev', vendas: 3000, custos: 1398 },
  { mes: 'Mar', vendas: 2000, custos: 9800 },
  { mes: 'Abr', vendas: 2780, custos: 3908 },
  { mes: 'Mai', vendas: 1890, custos: 4800 },
];
