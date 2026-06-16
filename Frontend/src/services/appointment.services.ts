import {api} from "../lib/axios";
import { 
  AppointmentDetails, 
  BookAppointmentPayload, 
  BookAppointmentResponse 
} from "../types/appointment.types";

export const AppointmentServices = {
  /**
   *Fetches a structured tracking list of active appointments for dashboard layouts
   */
  async get_appointments(userId: number, role: "patient" | "doctor" | "admin staff"): Promise<AppointmentDetails[]> {
    const useMockData = true;

    if (useMockData) {
      console.log(`Mock Mode: Fetching appointment queues for user ${userId} with role ${role}`);
      
      // Returns a set of realistic clinic dashboard records instantly
      return [
        {
          appointment_id: 501,
          patient_name: "Ram Bahadur",
          doctor_name: "Dr. Tushar Sharma",
          appointment_date: "2026-06-20",
          appointment_time: "10:00 AM",
          status: "confirmed"
        },
        {
          appointment_id: 502,
          patient_name: "Sita Kumari",
          doctor_name: "Dr. Tushar Sharma",
          appointment_date: "2026-06-22",
          appointment_time: "02:00 PM",
          status: "scheduled"
        }
      ];
    }

    try {
      const response = await api.get(`/appointments?userId=${userId}&role=${role}`);
      if (response.data && response.data.success) {
        return response.data.data as AppointmentDetails[];
      }
      return [];
    } catch (error) {
      console.error("Transmission error in AppointmentServices.get_appointments:", error);
      return [];
    }
  },

  /**
   * Submits a new calendar booking entry payload down to the server gateway
   */
  async auto_book_appointment(payload: BookAppointmentPayload): Promise<BookAppointmentResponse> {
    const useMockData = true;

    if (useMockData) {
      console.log("Mock Mode: Processing client-side booking package for:", payload);
      return {
        appointment_id: 503,
        booked_time: "11:00 AM",
        booking_status: "success"
      };
    }

    try {
      const response = await api.post("/appointments/book", payload);
      if (response.data && response.data.success) {
        return response.data.data as BookAppointmentResponse;
      }
      return { appointment_id: null, booked_time: null, booking_status: "failed" };
    } catch (error) {
      console.error("Transmission error in AppointmentServices.auto_book_appointment:", error);
      return { appointment_id: null, booked_time: null, booking_status: "failed" };
    }
  }
};
