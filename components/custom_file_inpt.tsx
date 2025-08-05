'use client';

import React, { ChangeEvent, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { getFileType } from '@/lib/file-data-type';
import { parseCsvFromFile } from '@/lib/stockUtils';
import {
  getOiTableData,
  getPreTableData,
  getTgnlTableData,
} from '@/lib/stockUtils/prepeare-table-data';
import { cn } from '@/lib/utils';
import {
  fileDataType,
  fileSignal,
  oiDataSignal,
  preDataSignal,
  tgnlDataSignal,
} from '@/store/fileStore';

// Helper function to truncate the filename with a middle ellipsis
const truncateFileName = (fileName: string, maxLength = 25): string => {
  if (fileName.length <= maxLength) {
    return fileName;
  }
  const startLength = Math.floor((maxLength - 3) / 2);
  const endLength = Math.ceil((maxLength - 3) / 2);
  const start = fileName.substring(0, startLength);
  const end = fileName.substring(fileName.length - endLength);
  return `${start}...${end}`;
};

interface CustomFileInputProps {
  label?: string;
  className?: string;
  acceptedFiles?: string;
}

export const CustomFileInput: React.FC<CustomFileInputProps> = ({
  label = 'Choose File',
  className,
  acceptedFiles = '.csv', // Keep Empty to accept all type
}) => {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    // Process File Here
    if (selectedFile) {
      const parsedData = await parseCsvFromFile(selectedFile);
      // console.log(parsedData.header);
      // console.log(parsedData.data);

      // Store fype of file uploaded
      const fileType = getFileType(parsedData);
      fileDataType.value = getFileType(parsedData);
      if (fileType == 'na') return;
      if (fileType == 'oi') {
        oiDataSignal.value = getOiTableData(parsedData);
      }
      if (fileType == 'pre') {
        preDataSignal.value = getPreTableData(parsedData);
      }
      if (fileType == 'tgnl') {
        tgnlDataSignal.value = getTgnlTableData(parsedData);
      }
    }
  };

  return (
    <div
      className={cn(
        // Base styles for the container
        'border-input bg-background flex w-full items-center justify-between rounded-md border p-0.5 pr-2 text-sm',
        // Focus and hover states for the border
        //'focus-within:border-primary focus-within:border',
        'hover:border-primary transition-all',
        'transition-colors',
        className
      )}>
      {/* The visible button to trigger the file input */}
      <Button
        type="button"
        onClick={handleFileButtonClick}
        className="text-primary hover:text-primary mr-2 bg-[#ccfbf1]/75 hover:bg-[#ccfbf1]/75">
        {label}
      </Button>

      {/* Display area for the filename */}
      <div
        className={`flex-grow text-sm ${file ? 'text-foreground' : 'text-muted-foreground/80'} truncate`}>
        {file ? truncateFileName(file.name) : 'No file choosen'}
      </div>

      {/* The hidden native file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="sr-only"
        accept={acceptedFiles}
      />
    </div>
  );
};
