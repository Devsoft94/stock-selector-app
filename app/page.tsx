'use client';

import { useEffect, useRef } from 'react';
import { useSignals } from '@preact/signals-react/runtime';
import OITable from '@/components/OITable';
import { CustomFileInput } from '@/components/custom_file_inpt';
import EmptyState from '@/components/empty-state';
import ErrorState from '@/components/error-state';
import PreDataTable from '@/components/preDataTable';
import TgnlDataTable from '@/components/tgnlDataTable';
import { Branding } from '@/components/top-navbar/branding';
import { TopNavbar } from '@/components/top-navbar/top-navbar';
import { fileDataType } from '@/store/fileStore';

export default function Home() {
  useSignals();

  const emptySectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (fileDataType.value !== 'na' && emptySectionRef.current) {
      // Run scroll after DOM paint to ensure layout is ready
      requestAnimationFrame(() => {
        const rect = emptySectionRef.current!.getBoundingClientRect();
        const scrollY = window.scrollY + rect.bottom - 64; // 64px navbar height
        window.scrollTo({ top: scrollY, behavior: 'smooth' });
      });
    }
  }, [fileDataType.value]);

  return (
    <>
      {/* Top Navbar */}
      <TopNavbar branding={<Branding />} importantSection={<CustomFileInput />} />
      {/* EmptyState section with ref */}
      <div
        ref={emptySectionRef}
        className="bg-muted mx-auto flex justify-between px-4 py-6">
        <EmptyState />
      </div>

      {/* Main container */}
      <div className="container mx-auto flex h-screen justify-center p-4">
        <div className="p-6">
          {fileDataType.value === 'na' && (
            <div className="flex flex-col items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="currentColor"
                className="text-muted-foreground/55"
                viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.517 14.841a1.13 1.13 0 0 0 .401.823q.195.162.478.252.284.091.665.091.507 0 .859-.158.354-.158.539-.44.187-.284.187-.656 0-.336-.134-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.566-.21l-.621-.144a1 1 0 0 1-.404-.176.37.37 0 0 1-.144-.299q0-.234.185-.384.188-.152.512-.152.214 0 .37.068a.6.6 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.2-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.439 0-.776.15-.337.149-.527.421-.19.273-.19.639 0 .302.122.524.124.223.352.367.228.143.539.213l.618.144q.31.073.463.193a.39.39 0 0 1 .152.326.5.5 0 0 1-.085.29.56.56 0 0 1-.255.193q-.167.07-.413.07-.175 0-.32-.04a.8.8 0 0 1-.248-.115.58.58 0 0 1-.255-.384zM.806 13.693q0-.373.102-.633a.87.87 0 0 1 .302-.399.8.8 0 0 1 .475-.137q.225 0 .398.097a.7.7 0 0 1 .272.26.85.85 0 0 1 .12.381h.765v-.072a1.33 1.33 0 0 0-.466-.964 1.4 1.4 0 0 0-.489-.272 1.8 1.8 0 0 0-.606-.097q-.534 0-.911.223-.375.222-.572.632-.195.41-.196.979v.498q0 .568.193.976.197.407.572.626.375.217.914.217.439 0 .785-.164t.55-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.764a.8.8 0 0 1-.118.363.7.7 0 0 1-.272.25.9.9 0 0 1-.401.087.85.85 0 0 1-.478-.132.83.83 0 0 1-.299-.392 1.7 1.7 0 0 1-.102-.627zm8.239 2.238h-.953l-1.338-3.999h.917l.896 3.138h.038l.888-3.138h.879z"
                />
              </svg>
              <p className="text-muted-foreground mt-4">
                Upload CSV File to View Stocks
              </p>
            </div>
          )}
          {fileDataType.value === undefined && <ErrorState />}
          {fileDataType.value === 'oi' && <OITable />}
          {fileDataType.value === 'pre' && <PreDataTable />}
          {fileDataType.value === 'tgnl' && <TgnlDataTable />}
        </div>
      </div>
    </>
  );
}
