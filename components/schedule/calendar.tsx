'use client';

import { Calendar as CalendarComponent } from '@/components/ui/calendar';

interface CalendarProps {
  value: Date;
  onChange: (date: Date) => void;
}

export function Calendar({ value, onChange }: CalendarProps) {
  return (
    <div className="border rounded-lg p-4 bg-card">
      <CalendarComponent
        mode="single"
        selected={value}
        onSelect={(date) => date && onChange(date)}
        className="w-full"
      />
    </div>
  );
}