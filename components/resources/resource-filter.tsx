import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ResourceType } from '@/lib/types';
import { Book, Video, GraduationCap } from 'lucide-react';

interface ResourceFilterProps {
  selectedTypes: ResourceType[];
  onTypeChange: (types: ResourceType[]) => void;
}

const resourceTypes: { type: ResourceType; icon: any; label: string }[] = [
  { type: 'article', icon: Book, label: 'Articles' },
  { type: 'video', icon: Video, label: 'Videos' },
  { type: 'course', icon: GraduationCap, label: 'Courses' },
];

export function ResourceFilter({
  selectedTypes,
  onTypeChange,
}: ResourceFilterProps) {
  const toggleType = (type: ResourceType) => {
    if (selectedTypes.includes(type)) {
      onTypeChange(selectedTypes.filter((t) => t !== type));
    } else {
      onTypeChange([...selectedTypes, type]);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Resource Type</h3>
        <ScrollArea className="h-[300px]">
          <div className="space-y-2">
            {resourceTypes.map(({ type, icon: Icon, label }) => (
              <Badge
                key={type}
                variant={selectedTypes.includes(type) ? 'default' : 'outline'}
                className="w-full justify-start cursor-pointer"
                onClick={() => toggleType(type)}
              >
                <Icon className="mr-2 h-4 w-4" />
                {label}
              </Badge>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}