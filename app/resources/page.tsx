'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ResourceCard } from '@/components/resources/resource-card';
import { ResourceFilter } from '@/components/resources/resource-filter';
import { ResourceType } from '@/lib/types';

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<ResourceType[]>([]);

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Resource Search</h1>
        <p className="text-muted-foreground">
          Find curated learning resources powered by AI recommendations
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button className="md:w-[140px]">Search</Button>
      </div>

      <div className="grid lg:grid-cols-[240px,1fr] gap-8">
        <ResourceFilter
          selectedTypes={selectedTypes}
          onTypeChange={setSelectedTypes}
        />
        <div className="space-y-4">
          <ResourceCard
            title="Advanced Time Management Techniques"
            description="Learn proven strategies for managing your time effectively and boosting productivity."
            type="article"
            url="#"
            imageUrl="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1024"
          />
          <ResourceCard
            title="The Science of Skill Acquisition"
            description="Understand the cognitive processes behind learning new skills and how to optimize your learning journey."
            type="video"
            url="#"
            imageUrl="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=1024"
          />
          <ResourceCard
            title="Mastering Deep Work"
            description="Discover how to achieve intense focus and produce high-quality work in less time."
            type="course"
            url="#"
            imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1024"
          />
        </div>
      </div>
    </div>
  );
}