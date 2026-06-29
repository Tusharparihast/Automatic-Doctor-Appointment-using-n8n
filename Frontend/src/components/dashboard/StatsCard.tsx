import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
}

export default function StatsCard({ title, value, description }: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-slate-500">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-slate-900">{value}</div>
        {description && (
          <p className="text-xs text-teal-600 mt-1">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}