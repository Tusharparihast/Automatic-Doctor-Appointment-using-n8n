// Finite states of an appointment lifespan matching your exact database constraints
export type AppointmentStatus = 
  | "scheduled" 
  | "confirmed" 
  | "in_progress" 
  | "completed" 
  | "cancelled"
  | "rescheduled" 
  | "no_show";

// Main appointment schema tracking raw database row associations
export interface Appointment {
  id: number;
  patient_id: number;
  doctor_id: number;
  appointment_date: string;
  appointment_time: string;
  symptoms?: string | null;
  status: AppointmentStatus;
  created_at: string;
}

// Relational details template optimized for tracking list view interfaces
export interface AppointmentDetails {
  appointment_id: number;
  patient_name: string;
  doctor_name: string;
  appointment_date: string;
  appointment_time: string;
  status: AppointmentStatus;
}

// Form input data bundle sent to backend to initiate a schedule slot
export interface BookAppointmentPayload {
  patient_id: number;
  doctor_id: number;
  appointment_date: string;
  symptoms?: string;
}

// System feedback envelope returned after a booking transaction finishes
export interface BookAppointmentResponse {
  appointment_id: number | null;
  booked_time: string | null;
  booking_status: string;
}
