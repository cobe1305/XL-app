'use client';

import { useState } from 'react';
import { Calendar } from '@/components/schedule/calendar';
import { ScheduleHeader } from '@/components/schedule/schedule-header';
import { ScheduleGrid } from '@/components/schedule/schedule-grid';
import { ViewType } from '@/lib/types';

export default function SchedulePage() {
  const [view, setView] = useState<ViewType>('day');
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className="space-y-6">
      <ScheduleHeader
        view={view}
        date={date}
        onViewChange={setView}
        onDateChange={setDate}
      />
      <div className="grid lg:grid-cols-[280px,1fr] gap-6">
        <Calendar value={date} onChange={setDate} />
        <ScheduleGrid view={view} date={date} />
      </div>
    </div>
  );
}