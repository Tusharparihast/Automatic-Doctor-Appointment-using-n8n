import {api} from "../lib/axios";
import { Doctor, DoctorListItem } from "../types/doctor.types";

export const DoctorServices = {
  /**
   * Fetches a complete list of doctors to display in searchable directory listings
   */
  async get_doctors(): Promise<DoctorListItem[]> {
    const useMockData = true;

    if (useMockData) {
      console.log("Mock Mode: Fetching searchable medical practitioner list directory");
      return [
        {
          doctor_id: 101,
          doctor_name: "Dr. Tushar Sharma",
          specialization_name: "General Medicine",
        },
        {
          doctor_id: 102,
          doctor_name: "Dr. Anjali Verma",
          specialization_name: "Cardiology",
        },
        {
          doctor_id: 103,
          doctor_name: "Dr. Sandeep Thapa",
          specialization_name: "Pediatrics",
        }
      ];
    }

    try {
      const response = await api.get("/doctors");
      if (response.data && response.data.success) {
        return response.data.data as DoctorListItem[];
      }
      return [];
    } catch (error) {
      console.error("Network communication failure inside DoctorServices.get_doctors:", error);
      return [];
    }
  },

  /**
   * Fetches deep diagnostic metadata for a specific practitioner profile summary card
   */
  async getDoctorProfile(doctorId: number): Promise<Doctor | null> {
    const useMockData = true;

    if (useMockData) {
      console.log(`Mock Mode: Fetching complete profile specs for Doctor ID: ${doctorId}`);
      return {
        id: doctorId,
        full_name: doctorId === 101 ? "Dr. Tushar Sharma" : "Dr. Anjali Verma",
        email: "practitioner@clinic.org",
        phone: "+977-9801112233",
        specialization_name: doctorId === 101 ? "General Medicine" : "Cardiology",
        consultation_fee: 500.00,
        consultation_duration: 20,
        experience_years: 8,
        active: true,
        created_at: "2026-02-15T10:00:00Z"
      };
    }

    try {
      const response = await api.get(`/doctors/${doctorId}`);
      if (response.data && response.data.success) {
        return response.data.data as Doctor;
      }
      return null;
    } catch (error) {
      console.error("Network communication failure inside DoctorServices.getDoctorProfile:", error);
      return null;
    }
  }
};
