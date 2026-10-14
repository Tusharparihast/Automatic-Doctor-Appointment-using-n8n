import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CarePoint | Medical Appointments Made Easier",
  description: "Find care, explore available doctors, and plan your next medical appointment with CarePoint.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
