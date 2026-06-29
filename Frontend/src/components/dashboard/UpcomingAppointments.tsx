import React from "react";
import { Badge } from "../ui/Badge";

// Mock data reflecting upcoming schedule slots
const upcomingAppointments = [
  { id: 1, patient: "Alice Cooper", time: "09:30 AM", doctor: "Dr. Reynolds", status: "confirmed" as const },
  { id: 2, patient: "Bob Marley", time: "10:15 AM", doctor: "Dr. Reynolds", status: "pending" as const },
  { id: 3, patient: "Charlie Chaplin", time: "11:00 AM", doctor: "Dr. Patel", status: "confirmed" as const },
  { id: 4, patient: "Diana Prince", time: "01:30 PM", doctor: "Dr. Reynolds", status: "cancelled" as const },
];

export default function UpcomingAppointments() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800">
        <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Upcoming Appointments</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-slate-500">
          <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-400">
            <tr>
              <th className="px-6 py-3">Patient</th>
              <th className="px-6 py-3">Time</th>
              <th className="px-6 py-3">Doctor</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {upcomingAppointments.map((appt) => (
              <tr key={appt.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{appt.patient}</td>
                <td className="px-6 py-4">{appt.time}</td>
                <td className="px-6 py-4">{appt.doctor}</td>
                <td className="px-6 py-4">
                  <Badge variant={appt.status === "confirmed" ? "success" : appt.status === "pending" ? "warning" : "destructive"}>
                    {appt.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}