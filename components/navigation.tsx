'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '../lib/utils';
import { Calendar, BookText, Search, LineChart, Settings } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';

const navigation = [
  { name: 'Schedule', href: '/schedule', icon: Calendar },
  { name: 'Journal', href: '/journal', icon: BookText },
  { name: 'Resources', href: '/resources', icon: Search },
  { name: 'Progress', href: '/progress', icon: LineChart },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Settings className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">XL</span>
            </Link>
            <div className="hidden md:ml-10 md:flex md:items-center md:space-x-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md transition-colors',
                      pathname === item.href
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}