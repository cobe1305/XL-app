'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

// Sample data - replace with real data from your backend
const skillProgressData = [
  { date: '2024-01', hours: 12, level: 1 },
  { date: '2024-02', hours: 25, level: 2 },
  { date: '2024-03', hours: 30, level: 3 },
  { date: '2024-04', hours: 45, level: 4 },
];

const skillBreakdown = [
  { skill: 'Programming', hours: 45 },
  { skill: 'Design', hours: 30 },
  { skill: 'Writing', hours: 25 },
  { skill: 'Marketing', hours: 15 },
];

export default function ProgressPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Progress Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {/* Skill Progress Over Time */}
        <Card>
          <CardHeader>
            <CardTitle>Skill Progress Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={skillProgressData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="level" 
                    stroke="#2563eb" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Hours Spent per Skill */}
        <Card>
          <CardHeader>
            <CardTitle>Hours per Skill</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={skillBreakdown}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="skill" />
                  <YAxis />
                  <Tooltip />
                  <Bar 
                    dataKey="hours" 
                    fill="#2563eb" 
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Summary Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Total Hours</p>
                <p className="text-2xl font-bold">115</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Skills Tracked</p>
                <p className="text-2xl font-bold">4</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Current Level</p>
                <p className="text-2xl font-bold">4</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Days Streak</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { date: 'Today', activity: 'Completed 2 hours of Programming' },
                { date: 'Yesterday', activity: 'Finished Design course milestone' },
                { date: '2 days ago', activity: 'Started Marketing basics' },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.activity}</p>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 