'use client';

import { useState } from 'react';
import { JournalEditor } from '@/components/journal/journal-editor';
import { JournalSidebar } from '@/components/journal/journal-sidebar';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function JournalPage() {
  const [selectedEntry, setSelectedEntry] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Skill Journal</h1>
          <p className="text-muted-foreground">
            Document your learning journey and track your progress
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Entry
        </Button>
      </div>

      <div className="grid lg:grid-cols-[240px,1fr] gap-8">
        <JournalSidebar
          selectedEntry={selectedEntry}
          onEntrySelect={setSelectedEntry}
        />
        <JournalEditor entryId={selectedEntry} />
      </div>
    </div>
  );
}