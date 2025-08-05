'use client';

import * as React from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface MultiSelectProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
  className?: string;
}

export function MultiSelect({
  options,
  selected,
  onChange,
  placeholder = 'Select options...',
  className,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [tempSelected, setTempSelected] = React.useState<string[]>(selected);

  const popoverRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setTempSelected(selected);
  }, [selected, open]);

  const toggleOption = (value: string) => {
    setTempSelected(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  };

  const handleApply = () => {
    onChange(tempSelected);
    setOpen(false);
  };

  const handleClear = () => {
    setTempSelected([]);
  };

  // Keyboard shortcuts
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;

      if (e.key === 'Enter') {
        e.preventDefault();
        handleApply();
      }

      if ((e.altKey || e.metaKey) && e.key.toLowerCase() === 'x') {
        e.preventDefault();
        handleClear();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, tempSelected]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className={cn(
            'w-[250px] justify-between focus-within:!ring-0',
            className
          )}>
          {selected.length > 0 ? `${selected.length} selected` : placeholder}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0" ref={popoverRef}>
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList className="max-h-52">
            <ScrollArea className="h-[200px]">
              {options.map(option => (
                <CommandItem
                  key={option}
                  value={option}
                  onSelect={() => toggleOption(option)}
                  className="cursor-pointer">
                  <Checkbox
                    checked={tempSelected.includes(option)}
                    onCheckedChange={() => toggleOption(option)}
                    className="mr-2"
                  />
                  {option}
                  {tempSelected.includes(option) && (
                    <Check className="!text-primary ml-auto h-4 w-4 opacity-100" />
                  )}
                </CommandItem>
              ))}
            </ScrollArea>
          </CommandList>
        </Command>
        <Separator className="my-2" />
        <div className="flex justify-between px-2 py-2">
          <Button variant="ghost" size="sm" onClick={handleClear}>
            Clear
          </Button>
          <Button variant="default" size="sm" onClick={handleApply}>
            Apply
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
