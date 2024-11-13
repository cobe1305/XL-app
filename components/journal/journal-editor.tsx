'use client';

import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Save } from 'lucide-react';

interface JournalEditorProps {
  entryId: string | null;
}

export function JournalEditor({ entryId }: JournalEditorProps) {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="What skill are you working on?"
              className="text-lg font-medium"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Journal Entry</Label>
            <Textarea
              id="content"
              placeholder="Write about your progress, challenges, and insights..."
              className="min-h-[200px]"
            />
          </div>
        </div>

        <div className="space-y-4">
          <Label>Action Plan</Label>
          <ScrollArea className="h-[200px] rounded-md border p-4">
            <div className="space-y-4">
              {['Learn fundamentals', 'Practice daily', 'Review progress'].map(
                (item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox id={`task-${index}`} />
                    <Label htmlFor={`task-${index}`}>{item}</Label>
                  </div>
                )
              )}
            </div>
          </ScrollArea>
        </div>

        <div className="flex justify-end">
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save Entry
          </Button>
        </div>
      </div>
    </Card>
  );
}