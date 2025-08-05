import { TableType } from '@/types';

export function getFileType(parsedData: {
  header: string[] | null;
  data: string[][];
}): TableType {
  if (parsedData?.header?.includes('open_interest')) {
    return 'oi';
  } else if (parsedData?.header?.includes('open')) {
    return 'tgnl';
  } else if (parsedData?.header?.includes('prev_close')) {
    return 'pre';
  }
  return;
}
