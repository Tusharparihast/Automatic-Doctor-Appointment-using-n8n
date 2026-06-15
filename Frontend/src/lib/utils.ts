type ClassValue = string | number | boolean | null | undefined;

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

export function capitalize(value: string): string {
  if (!value) return "";
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

export function toTitleCase(value: string): string {
  if (!value) return "";
  return value
    .split(" ")
    .filter(Boolean)
    .map((word) => capitalize(word))
    .join(" ");
}

export function getInitials(name: string): string {
  if (!name) return "";
  const parts = name.trim().split(/\s+/).filter(Boolean);

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export function safeParseJSON<T>(value: string | null, fallback: T): T {
  if (!value) return fallback;

  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export function formatDate(
  value: string | Date,
  locale = "en-US",
  options?: Intl.DateTimeFormatOptions
): string {
  if (!value) return "-";

  const date =
    value instanceof Date
      ? value
      : /^\d{4}-\d{2}-\d{2}$/.test(value)
      ? new Date(`${value}T00:00:00`)
      : new Date(value);

  if (Number.isNaN(date.getTime())) return "-";

  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
    ...options,
  }).format(date);
}

export function formatTime(value: string): string {
  if (!value) return "-";

  const [hoursRaw, minutesRaw = "00"] = value.split(":");
  const hours = Number(hoursRaw);
  const minutes = minutesRaw.padStart(2, "0");

  if (Number.isNaN(hours)) return "-";

  const period = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 === 0 ? 12 : hours % 12;

  return `${displayHours}:${minutes} ${period}`;
}

export function formatDateTime(
  dateValue: string | Date,
  timeValue: string,
  locale = "en-US"
): string {
  const dateString = formatDate(dateValue, locale);
  const timeString = formatTime(timeValue);

  if (dateString === "-" || timeString === "-") return "-";
  return `${dateString}, ${timeString}`;
}

export function debounce<T extends (...args: never[]) => void>(
  fn: T,
  delay = 300
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}