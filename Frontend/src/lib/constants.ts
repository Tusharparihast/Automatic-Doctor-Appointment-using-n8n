export const APP_NAME = "Doctor Appointment System";
export const APP_SHORT_NAME = "Doc Appointment";
export const APP_DESCRIPTION =
  "AI-powered doctor appointment booking and management system";

export const DEFAULT_TIMEZONE = "Asia/Kathmandu";
export const DEFAULT_DATE_LOCALE = "en-US";
export const DEFAULT_PAGE_SIZE = 10;
export const DEFAULT_SLOT_DURATION_MINUTES = 30;

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  DASHBOARD: "/dashboard",
  DOCTORS: "/doctors",
  APPOINTMENTS: "/appointments",
  BOOK_APPOINTMENT: "/appointments/book",
  PROFILE: "/profile",
  ADMIN: "/admin",
  DOCTOR: "/doctor",
} as const;

export const USER_ROLES = {
  PATIENT: "patient",
  DOCTOR: "doctor",
  ADMIN: "admin",
} as const;

export const APPOINTMENT_STATUS = {
  SCHEDULED: "scheduled",
  CONFIRMED: "confirmed",
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
  RESCHEDULED: "rescheduled",
  NO_SHOW: "no_show",
} as const;

export const URGENCY_LEVELS = {
  LOW: "low",
  NORMAL: "normal",
  HIGH: "high",
  EMERGENCY: "emergency",
} as const;

export const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

export const APPOINTMENT_STATUS_LABELS: Record<
  (typeof APPOINTMENT_STATUS)[keyof typeof APPOINTMENT_STATUS],
  string
> = {
  scheduled: "Scheduled",
  confirmed: "Confirmed",
  in_progress: "In Progress",
  completed: "Completed",
  cancelled: "Cancelled",
  rescheduled: "Rescheduled",
  no_show: "No Show",
};

export const URGENCY_LABELS: Record<
  (typeof URGENCY_LEVELS)[keyof typeof URGENCY_LEVELS],
  string
> = {
  low: "Low",
  normal: "Normal",
  high: "High",
  emergency: "Emergency",
};