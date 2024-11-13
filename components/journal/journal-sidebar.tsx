'use client';

import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

interface JournalSidebarProps {
  selectedEntry: string | null;
  onEntrySelect: (id: string) => void;
}

const SAMPLE_ENTRIES = [
  {
    id: '1',
    title: 'Web Development',
    date: new Date(2024, 2, 15),
    excerpt: 'Started learning React fundamentals...',
  },
  {
    id: '2',
    title: 'UI/UX Design',
    date: new Date(2024, 2, 14),
    excerpt: 'Exploring color theory and typography...',
  },
  {
    id: '3',
    title: 'Data Structures',
    date: new Date(2024, 2, 13),
    excerpt: 'Implemented binary search trees...',
  },
];

export function JournalSidebar({
  selectedEntry,
  onEntrySelect,
}: JournalSidebarProps) {
  return (
    <Card className="p-4">
      <ScrollArea className="h-[calc(100vh-16rem)]">
        <div className="space-y-4">
          {SAMPLE_ENTRIES.map((entry) => (
            <div
              key={entry.id}
              className={cn(
                'p-3 rounded-lg cursor-pointer transition-colors',
                selectedEntry === entry.id
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-accent'
              )}
              onClick={() => onEntrySelect(entry.id)}
            >
              <div className="space-y-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium leading-none">{entry.title}</h3>
                  <span className="text-xs">
                    {format(entry.date, 'MMM d, yyyy')}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {entry.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}