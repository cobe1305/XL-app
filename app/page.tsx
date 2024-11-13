import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, BookText, Search, LineChart } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    title: 'Time-Blocked Schedule',
    description: 'Plan your day with precision using our intuitive scheduling system',
    icon: Calendar,
    href: '/schedule',
  },
  {
    title: 'Skill Journal',
    description: 'Document your learning journey and track your progress over time',
    icon: BookText,
    href: '/journal',
  },
  {
    title: 'Resource Search',
    description: 'Find the best learning resources powered by AI recommendations',
    icon: Search,
    href: '/resources',
  },
  {
    title: 'Progress Tracking',
    description: 'Visualize your growth with detailed progress analytics',
    icon: LineChart,
    href: '/progress',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Master Your Time
        </h1>
        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
          Excel at your skills with our comprehensive time management and skill
          development platform.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/schedule">Get Started</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/resources">Explore Resources</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card key={feature.title} className="group hover:shadow-lg transition-all">
              <Link href={feature.href}>
                <CardHeader>
                  <Icon className="h-6 w-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
}