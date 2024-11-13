'use client';

import { ViewType } from '@/lib/types';
import { TimeBlock } from '@/components/schedule/time-block';

interface ScheduleGridProps {
  view: ViewType;
  date: Date;
}

const HOURS = Array.from({ length: 24 }, (_, i) => i);

export function ScheduleGrid({ view, date }: ScheduleGridProps) {
  return (
    <div className="border rounded-lg p-4 bg-card overflow-auto">
      <div className="space-y-2">
        {HOURS.map((hour) => (
          <TimeBlock key={hour} hour={hour} view={view} date={date} />
        ))}
      </div>
    </div>
  );
}