import Link from 'next/link';

const links = [
  {
    text: 'Get pre-open market data file',
    href: 'https://www.nseindia.com/market-data/pre-open-market-cm-and-emerge-market',
  },
  {
    text: 'Get top20 gainer & Looser data file',
    href: 'https://www.nseindia.com/market-data/top-gainers-losers',
  },
  {
    text: 'Get change in OI data file',
    href: 'https://www.nseindia.com/market-data/oi-spurts',
  },
  {
    text: 'Visit sectorial performance heatmap',
    href: 'https://www.nseindia.com/market-data/live-market-indices/heatmap',
  },
];

const EmptyState = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
      <div className="rounded-md bg-white px-6 py-4 text-center shadow-sm transition-colors">
        <Link href="/guide" className="text-primary font-medium hover:underline">
          <div className="flex h-full w-full items-center justify-center gap-2 lg:text-xs">
            {/* <Link2Icon /> */}
            Tutorial & guide
          </div>
        </Link>
      </div>
      {links.map((link, idx) => (
        <div
          key={idx}
          className={`rounded-md bg-white px-6 py-4 text-center shadow-sm transition-colors ${idx === links.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
          <Link
            href={link.href}
            target="_blank"
            className="text-primary font-medium hover:underline">
            <div className="flex h-full w-full items-center justify-center gap-2 lg:text-xs">
              {/* <Link2Icon /> */}
              {link.text}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default EmptyState;
