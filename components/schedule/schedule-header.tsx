'use client';

import { format } from 'date-fns';
import { ViewType } from '../../lib/types';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScheduleHeaderProps {
  view: ViewType;
  date: Date;
  onViewChange: (view: ViewType) => void;
  onDateChange: (date: Date) => void;
}

export function ScheduleHeader({
  view,
  date,
  onViewChange,
  onDateChange,
}: ScheduleHeaderProps) {
  const navigateDate = (direction: 'forward' | 'backward') => {
    const newDate = new Date(date);
    const amount = direction === 'forward' ? 1 : -1;

    switch (view) {
      case 'day':
        newDate.setDate(date.getDate() + amount);
        break;
      case 'week':
        newDate.setDate(date.getDate() + amount * 7);
        break;
      case 'month':
        newDate.setMonth(date.getMonth() + amount);
        break;
    }

    onDateChange(newDate);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => navigateDate('backward')}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => navigateDate('forward')}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        <h2 className="text-2xl font-bold">{format(date, 'MMMM d, yyyy')}</h2>
      </div>
      <Select value={view} onValueChange={(v) => onViewChange(v as ViewType)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select view" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="day">Day View</SelectItem>
          <SelectItem value="week">Week View</SelectItem>
          <SelectItem value="month">Month View</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}