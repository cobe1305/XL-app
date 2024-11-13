import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ResourceType } from '@/lib/types';
import { Book, Video, GraduationCap, Link as LinkIcon } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  type: ResourceType;
  url: string;
  imageUrl: string;
}

const typeIcons = {
  article: Book,
  video: Video,
  course: GraduationCap,
};

export function ResourceCard({
  title,
  description,
  type,
  url,
  imageUrl,
}: ResourceCardProps) {
  const Icon = typeIcons[type];

  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-[240px,1fr] h-full">
        <div className="relative h-48 md:h-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 240px"
          />
        </div>
        <div>
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="w-fit">
                <Icon className="mr-1 h-3 w-3" />
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Badge>
              <LinkIcon className="h-4 w-4 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{description}</p>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}