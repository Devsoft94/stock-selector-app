'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number; // default is 5
}

export function CustomPagination({
  page,
  totalPages,
  onPageChange,
  maxVisiblePages = 5,
}: PaginationProps) {
  const goToPage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const generatePages = () => {
    const pages: (number | 'ellipsis')[] = [];

    if (totalPages <= maxVisiblePages) {
      // Show all if pages are less than or equal to maxVisible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (page <= 3) {
        // Near the beginning
        pages.push(1, 2, 3, 'ellipsis', totalPages);
      } else if (page >= totalPages - 2) {
        // Near the end
        pages.push(1, 'ellipsis', totalPages - 2, totalPages - 1, totalPages);
      } else {
        // In the middle
        pages.push(1, 'ellipsis', page, 'ellipsis', totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        className="h-6 w-6"
        onClick={() => goToPage(page - 1)}
        disabled={page === 1}>
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {generatePages().map((pg, index) =>
        pg === 'ellipsis' ? (
          <span key={`ellipsis-${index}`} className="text-muted-foreground px-1">
            ...
          </span>
        ) : (
          <Button
            key={pg}
            className={`h-6 w-6 px-2 ${
              pg === page
                ? 'text-primary bg-secondary hover:bg-secondary'
                : 'text-muted-foreground'
            }`}
            variant={pg === page ? 'secondary' : 'ghost'}
            onClick={() => goToPage(pg)}>
            {pg}
          </Button>
        )
      )}

      <Button
        variant="ghost"
        className="h-6 w-6"
        onClick={() => goToPage(page + 1)}
        disabled={page === totalPages}>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
