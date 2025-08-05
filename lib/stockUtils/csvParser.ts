interface ParseCsvOptions {
  hasHeaders?: boolean;
}

interface ParsedCsvResult {
  header: string[] | null;
  data: string[][];
}

export function parseCsv(
  csv: string,
  options: ParseCsvOptions = { hasHeaders: true }
): ParsedCsvResult {
  let header: string[] | null = null;
  let dataIndex: number;
  let data: Array<string[]>;

  const fileData = csv.trim();

  // Clean quoted strings for header processing (optional)
  const cleanedFileData = fileData.replace(/"([^"]*?)"/g, (_, quoted) => {
    const normalized = quoted
      .replace(/[\r\n]+/g, '') // Remove line-breaks inside quotes
      .trim()
      .toLowerCase();
    return `"${normalized}"`;
  });

  const dataArray: string[] = cleanedFileData.split(/\r?\n/);
  dataIndex = options.hasHeaders ? 1 : 0;

  // Extract and normalize header
  if (options.hasHeaders) {
    const rawHeader = dataArray[0];
    const strHeader = rawHeader
      .replace(/\s*\([^)]*\)\s*/g, '') // remove text in parentheses
      .replace(/\s+/g, ' ') // normalize extra spaces
      .replace(/ /g, '_') // replace spaces with underscores
      .replace(/%/g, 'p_') // replace % with p_
      .replace(/\./g, '') // remove dots
      .trim();

    header = strHeader.replace(/"/g, '').split(',');
  }

  const strData = dataArray.slice(dataIndex);

  // Parse and clean each row
  const tempData = strData.map(row => {
    // Match values with or without quotes
    const values = row.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || [];

    return values.map(value => {
      const unquoted = value.replace(/^"|"$/g, ''); // remove outer quotes
      return unquoted.replace(/(?<=\d),(?=\d)/g, ''); // remove commas inside numbers
    });
  });

  data = tempData;

  return {
    header,
    data,
  };
}

export async function parseCsvFromFile(
  file: File,
  options: ParseCsvOptions = { hasHeaders: true }
): Promise<ParsedCsvResult> {
  const text = await file.text();
  return parseCsv(text, options);
}
