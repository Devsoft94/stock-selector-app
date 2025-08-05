'use client';

import React, { useMemo, useState } from 'react';
import { useSignals } from '@preact/signals-react/runtime';
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react';
import { MultiSelect } from '@/components/multi-select';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { copyInnerText } from '@/lib/copy-inner-text';
import { sectoralIndices } from '@/lib/stockUtils/sectoral-indices';
import { tgnlDataSignal } from '@/store/fileStore';
import { CustomPagination } from './custom-pagination';
import { Switch } from './ui/switch';

const allSectors = sectoralIndices;

export default function TgnlDataTable() {
  useSignals();
  const rawData = tgnlDataSignal.value ?? [];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [foOnly, setFoOnly] = useState(true);
  const [sortAsc, setSortAsc] = useState<boolean | null>(null);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [minPrice, setMinPrice] = useState('250');
  const [maxPrice, setMaxPrice] = useState('5000');

  const filteredData = useMemo(() => {
    let data = [...rawData];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      data = data.filter(row => row.symbol.toLowerCase().includes(query));
    }

    if (foOnly) {
      data = data.filter(row => row.isFO);
    }

    if (selectedSectors.length > 0) {
      data = data.filter(row => selectedSectors.includes(row.sector!));
    }

    if (minPrice !== '') {
      data = data.filter(row => row.ltp >= parseFloat(minPrice));
    }

    if (maxPrice !== '') {
      data = data.filter(row => row.ltp <= parseFloat(maxPrice));
    }

    if (sortAsc !== null) {
      data.sort((a, b) => (sortAsc ? a.change - b.change : b.change - a.change));
    }

    return data;
  }, [rawData, searchQuery, foOnly, selectedSectors, sortAsc, minPrice, maxPrice]);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return filteredData.slice(start, start + rowsPerPage);
  }, [filteredData, page, rowsPerPage]);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-8">
        {/* Search + F&O + Price Range */}
        <div className="flex w-full flex-wrap items-center justify-between gap-4 md:w-auto md:flex-1 md:flex-nowrap">
          {/* Search Input */}
          <Input
            placeholder="Search by Symbol"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="focus-within:border-ring max-w-xs min-w-[180px] flex-1 focus-within:!ring-0"
          />

          {/* F&O Switch */}
          <div className="flex flex-nowrap items-center gap-2 whitespace-nowrap">
            <label
              htmlFor="fo-toggle"
              className="text-muted-foreground text-sm font-medium">
              F&O Stocks
            </label>
            <Switch id="fo-toggle" checked={foOnly} onCheckedChange={setFoOnly} />
          </div>

          {/* Price Range Inputs */}
          <div className="flex w-full grow-1 items-center gap-2">
            <Input
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={e => setMinPrice(e.target.value)}
              className="flex"
            />
            <span className="text-muted-foreground">to</span>
            <Input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={e => setMaxPrice(e.target.value)}
              className="flex"
            />
          </div>
        </div>

        {/* Sector Filter */}
        <MultiSelect
          options={allSectors}
          selected={selectedSectors}
          onChange={setSelectedSectors}
          placeholder="Filter by Sector"
          className="!text-muted-foreground w-full md:w-auto"
        />
      </div>

      {/* Table */}
      <div className="overflow-auto rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-primary/5">
              <TableHead>Symbol</TableHead>

              {/* ⬅️ Center-aligned Open Price Header */}
              <TableHead className="text-center">LTP</TableHead>

              {/* ⬅️ Center-aligned % Change Header */}
              <TableHead
                className="cursor-pointer text-center"
                onClick={() => setSortAsc(prev => (prev === null ? true : !prev))}>
                % Change
                {sortAsc === null && (
                  <ArrowUpDown className="text-muted-foreground ml-1 inline h-3 w-3" />
                )}
                {sortAsc === true && <ArrowUp className="ml-1 inline h-3 w-3" />}
                {sortAsc === false && <ArrowDown className="ml-1 inline h-3 w-3" />}
              </TableHead>

              <TableHead>Sector</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, idx) => (
                <TableRow key={idx} className="group">
                  <TableCell
                    className="group-hover:text-primary font-medium hover:cursor-pointer"
                    onClick={e => copyInnerText(e)}>
                    {row.symbol.toUpperCase()}
                  </TableCell>

                  {/* ⬅️ Center-aligned Open Price with 2 decimal places */}
                  <TableCell className="text-center">{row.ltp.toFixed(2)}</TableCell>

                  {/* ⬅️ Center-aligned % Change with conditional color */}
                  <TableCell
                    className={`text-center ${
                      row.change >= 0 ? 'text-emerald-600' : 'text-red-600'
                    }`}>
                    {row.change.toFixed(2)}
                  </TableCell>

                  <TableCell>{row.sector}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  No data found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col items-center justify-between gap-2 md:flex-row md:gap-8">
        <div className="order-12 flex w-full flex-wrap items-center justify-between gap-4 md:order-1 md:w-auto md:flex-1 md:flex-nowrap">
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            Showing {paginatedData.length} of {filteredData.length} entries
          </div>
          <div className="flex items-center gap-4">
            <Select
              value={rowsPerPage.toString()}
              onValueChange={val => {
                setRowsPerPage(Number(val));
                setPage(1);
              }}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Rows per page" />
              </SelectTrigger>
              <SelectContent>
                {[5, 10, 25, 50].map(num => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} / page
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="md:order-2">
          <CustomPagination
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </div>
    </div>
  );
}
