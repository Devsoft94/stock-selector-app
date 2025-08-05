import { OiTableData, ParsedFileData, preTableData, tgnlTableData } from '@/types';
import { getSector } from './getSector';
import { isFno } from './isFno';

export function getOiTableData(preData: ParsedFileData): OiTableData | null {
  const oiTableDatas: OiTableData = [];
  if (preData) {
    // 0 & 4 Index needed
    preData.data.forEach(row => {
      oiTableDatas.push({
        symbol: row[0],
        oiChange: parseFloat(row[4]),
        sector: getSector(row[0]),
        isFO: isFno(row[0]),
      });
    });
    return oiTableDatas;
  }
  return null;
}
export function getPreTableData(preData: ParsedFileData): preTableData | null {
  const preTableDatas: preTableData = [];
  if (preData) {
    // 0,4 & 5 Index needed
    preData.data.forEach(row => {
      preTableDatas.push({
        symbol: row[0],
        open: parseFloat(row[5]),
        change: parseFloat(row[4]),
        sector: getSector(row[0]),
        isFO: isFno(row[0]),
      });
    });
    return preTableDatas;
  }
  return null;
}
export function getTgnlTableData(preData: ParsedFileData): tgnlTableData | null {
  const tgnlTableDatas: tgnlTableData = [];
  if (preData) {
    // 0,5 & 6 Index needed
    preData.data.forEach(row => {
      tgnlTableDatas.push({
        symbol: row[0],
        ltp: parseFloat(row[5]),
        change: parseFloat(row[6]),
        sector: getSector(row[0]),
        isFO: isFno(row[0]),
      });
    });
    return tgnlTableDatas;
  }
  return null;
}
