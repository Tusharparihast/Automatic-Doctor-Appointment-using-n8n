import React from "react";

// Mock data structure to mimic recent activity updates
const recentActivities = [
  { id: 1, text: "Dr. Reynolds updated record #4029", time: "10m ago" },
  { id: 2, text: "Lab results received for Patient Smith", time: "32m ago" },
  { id: 3, text: "New appointment booked by Sarah Connor", time: "1h ago" },
  { id: 4, text: "Consultation note finalized by Dr. Patel", time: "2h ago" },
];

export default function RecentAppointments() {
  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {recentActivities.map((activity, idx) => (
          <li key={activity.id}>
            <div className="relative pb-8">
              {idx !== recentActivities.length - 1 && (
                <div className="absolute left-4 top-0 w-0.5 h-full bg-slate-200 dark:bg-slate-600" />
              )}
              <div className="flex space-x-3">
                <div>
                  <span className="h-2 w-2 rounded-full bg-teal-500 flex items-center justify-center mt-1.5" />
                </div>
                <div className="flex-1 min-w-0 flex justify-between space-x-4">
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {activity.text}
                  </p>
                  <div className="text-right text-xs whitespace-nowrap text-slate-400">
                    <time>{activity.time}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}