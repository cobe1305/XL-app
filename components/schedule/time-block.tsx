'use client';

import { format } from 'date-fns';
import { ViewType } from '../../lib/types';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface TimeBlockProps {
  hour: number;
  view: ViewType;
  date: Date;
}

export function TimeBlock({ hour, view, date }: TimeBlockProps) {
  const formattedHour = format(new Date().setHours(hour), 'ha').toLowerCase();

  return (
    <div className="group flex items-start gap-4 py-2 border-b last:border-b-0">
      <div className="w-16 text-sm text-muted-foreground">{formattedHour}</div>
      <div className="flex-1 min-h-[3rem] rounded-md group-hover:bg-accent/50 transition-colors">
        <Button
          variant="ghost"
          size="sm"
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Task
        </Button>
      </div>
    </div>
  );
}