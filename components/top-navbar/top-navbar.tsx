'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { Menu } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import {
//   Sheet,
//   SheetContent,
//   SheetTitle,
//   SheetTrigger,
// } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  href: string;
}

interface TopNavbarProps {
  branding?: React.ReactNode;
  navItems?: NavItem[];
  importantSection?: React.ReactNode;
  className?: string;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  branding = (
    <Link href="/" className="text-xl font-bold">
      Brand
    </Link>
  ),
  navItems,
  importantSection,
  className,
}) => {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  return (
    <header
      className={cn(
        'bg-background/70 sticky top-0 left-0 z-50 flex w-full items-center border-b backdrop-blur',
        className
      )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Branding */}
        <div className="mr-8 flex items-center md:mr-16">
          {<Link href="/">{branding}</Link>}
        </div>

        {/* Nav Links (desktop) */}
        {/* <nav className="hidden space-x-6 md:flex md:grow-1">
          {navItems?.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors',
                isActive(item.href)
                  ? 'text-primary rounded-sm px-3 py-1.5 font-semibold'
                  : 'hover:text-foreground text-muted-foreground'
              )}>
              {item.title}
            </Link>
          ))}
        </nav> */}

        {/* Important Section (desktop) */}
        <div className="flex grow-1 items-center justify-end gap-2 md:w-sm md:grow-0">
          {importantSection}
        </div>

        {/* Mobile Menu */}
        {/* <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetTitle></SheetTitle>
            <SheetContent side="left">
              <div className="mt-6 space-y-4">
                {navItems?.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'block text-base font-medium transition-colors',
                      isActive(item.href)
                        ? 'text-primary font-semibold'
                        : 'hover:text-primary text-muted-foreground'
                    )}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div> */}
      </div>
    </header>
  );
};
