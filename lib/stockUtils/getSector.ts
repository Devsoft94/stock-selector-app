/**
 * Represents the structure of a sector object in the NIFTY data.
 * Each sector has a name and an array of stock symbols.
 */
interface SectorData {
  sector: string;
  stocks: string[];
}

// The complete JSON data containing NIFTY sectors and their stock symbols.
const niftyData: SectorData[] = [
  {
    sector: 'Automobiles',
    stocks: [
      'EICHERMOT',
      'TVSMOTOR',
      'MARUTI',
      'BAJAJ-AUTO',
      'ASHOKLEY',
      'HEROMOTOCO',
      'M&M',
      'TATAMOTORS',
      'SONACOMS',
      'UNOMINDA',
      'BHARATFORG',
    ],
  },
  {
    sector: 'Financial Services',
    stocks: [
      'BAJFINANCE',
      'POONAWALLA',
      'RECLTD',
      'PAYTM',
      'IDFCFIRSTB',
      'KOTAKBANK',
      'FEDERALBNK',
      'ICICIPRULI',
      '360ONE',
      'CAMS',
      'AUBANK',
      'BANKINDIA',
      'CANBK',
      'IRFC',
      'KFINTECH',
      'LICI',
      'MUTHOOTFIN',
      'POLICYBZR',
      'UNIONBANK',
      'YESBANK',
      'LICHSGFIN',
      'SBILIFE',
      'BANDHANBNK',
      'BANKBARODA',
      'CDSL',
      'CHOLAFIN',
      'ABCAPITAL',
      'ANGELONE',
      'ICICIBANK',
      'PNB',
      'HDFCAMC',
      'SBIN',
      'SHRIRAMFIN',
      'BAJAJFINSV',
      'HDFCBANK',
      'JIOFIN',
      'MFSL',
      'NUVAMA',
      'AXISBANK',
      'PIDILITIND',
      'HDFCLIFE',
      'HUDCO',
      'SBICARD',
      'PFC',
      'RBLBANK',
      'ICICIGI',
      'IIFL',
      'PNBHOUSING',
      'LTF',
      'MANAPPURAM',
      'IREDA',
      'BSE',
    ],
  },
  {
    sector: 'FMCG',
    stocks: [
      'HINDUNILVR',
      'GODREJCP',
      'DABUR',
      'MARICO',
      'BRITANNIA',
      'COLPAL',
      'ITC',
      'NESTLEIND',
      'PATANJALI',
      'TATACONSUM',
      'UNITDSPR',
      'VBL',
      'JUBLFOOD',
    ],
  },
  {
    sector: 'Information Technology',
    stocks: [
      'TATATECH',
      'OFSS',
      'MPHASIS',
      'NAUKRI',
      'DIXON',
      'CYIENT',
      'KPITTECH',
      'TATAELXSI',
      'COFORGE',
      'HCLTECH',
      'TCS',
      'LTIM',
      'PERSISTENT',
      'TECHM',
      'WIPRO',
      'INFY',
    ],
  },
  {
    sector: 'Media',
    stocks: ['DELHIVERY'],
  },
  {
    sector: 'Metals & Mining',
    stocks: [
      'JSWSTEEL',
      'NMDC',
      'JINDALSTEL',
      'HINDZINC',
      'JSL',
      'TATASTEEL',
      'GRASIM',
      'HINDALCO',
      'NATIONALUM',
      'SAIL',
      'VEDL',
      'COALINDIA',
    ],
  },
  {
    sector: 'Pharmaceuticals & Healthcare',
    stocks: [
      'APOLLOHOSP',
      'PPLPHARMA',
      'FORTIS',
      'GRANULES',
      'AUROPHARMA',
      'LUPIN',
      'MANKIND',
      'BIOCON',
      'ZYDUSLIFE',
      'ALKEM',
      'GLENMARK',
      'LAURUSLABS',
      'TORNTPHARM',
      'SYNGENE',
      'DIVISLAB',
      'CIPLA',
      'DRREDDY',
      'SUNPHARMA',
      'MAXHEALTH',
      'ETERNAL',
    ],
  },
  {
    sector: 'Real Estate',
    stocks: ['LODHA', 'GODREJPROP', 'PRESTIGE', 'OBEROIRLTY', 'PHOENIXLTD', 'DLF'],
  },
  {
    sector: 'Consumer Durables',
    stocks: [
      'BLUESTARCO',
      'PGEL',
      'AMBER',
      'HAVELLS',
      'VOLTAS',
      'CROMPTON',
      'TITAN',
    ],
  },
  {
    sector: 'Oil & Gas',
    stocks: [
      'HINDPETRO',
      'BPCL',
      'IOC',
      'RELIANCE',
      'ONGC',
      'OIL',
      'GAIL',
      'PETRONET',
      'ATGL',
      'IGL',
    ],
  },
  {
    sector: 'Cement',
    stocks: ['SHREECEM', 'AMBUJACEM', 'DALBHARAT', 'ULTRACEMCO'],
  },
  {
    sector: 'Power',
    stocks: [
      'JSWENERGY',
      'SUZLON',
      'INOXWIND',
      'ADANIGREEN',
      'POWERGRID',
      'ADANIENSOL',
      'NHPC',
      'NTPC',
      'PFC',
      'SJVN',
      'TATAPOWER',
      'TORNTPOWER',
      'CESC',
    ],
  },
  {
    sector: 'Construction & Infrastructure',
    stocks: ['NCC', 'RVNL', 'IRB', 'LT', 'NBCC', 'CONCOR', 'HUDCO'],
  },
  {
    sector: 'Chemicals',
    stocks: ['PIIND', 'SRF', 'SOLARINDS', 'TATACHEM', 'PIDILITIND', 'ASIANPAINT'],
  },
  {
    sector: 'Telecommunications',
    stocks: ['BHARTIARTL', 'IDEA', 'INDUSTOWER', 'HFCL'],
  },
  {
    sector: 'Capital Goods & Electrical Equipment',
    stocks: [
      'SIEMENS',
      'ABB',
      'BHEL',
      'KEI',
      'CUMMINSIND',
      'CGPOWER',
      'TITAGARH',
      'BDL',
      'BEL',
      'BOSCHLTD',
      'TIINDIA',
    ],
  },
  {
    sector: 'Retail',
    stocks: ['NYKAA', 'TRENT', 'DMART'],
  },
  {
    sector: 'Logistics',
    stocks: ['DELHIVERY', 'ADANIPORTS', 'IRCTC'],
  },
  {
    sector: 'Aerospace & Defense',
    stocks: ['HAL', 'MAZDOCK'],
  },
  {
    sector: 'Building Materials',
    stocks: ['SUPREMEIND', 'ASTRAL'],
  },
  {
    sector: 'Agro Chemicals',
    stocks: ['UPL'],
  },
  {
    sector: 'Financial Market Infrastructure',
    stocks: ['MCX'],
  },
  {
    sector: 'Jewellery',
    stocks: ['KALYANKJIL'],
  },
  {
    sector: 'Diversified',
    stocks: ['ADANIENT'],
  },
  {
    sector: 'Steel Tubes & Pipes',
    stocks: ['APLAPOLLO'],
  },
];

/**
 * Searches for a stock symbol in the NIFTY data and returns its sector.
 * @param symbol The stock symbol to search for (e.g., "TCS"). Case-insensitive.
 * @returns The name of the sector if the symbol is found, otherwise null.
 */
export function getSector(symbol: string): string | null {
  const upperCaseSymbol = symbol.toUpperCase();
  for (const sectorData of niftyData) {
    if (sectorData.stocks.includes(upperCaseSymbol)) {
      return sectorData.sector;
    }
  }
  return null; // Return null if the symbol is not found
}
