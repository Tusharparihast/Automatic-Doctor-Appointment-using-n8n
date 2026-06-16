import {api} from "../lib/axios";

// Strict local interface shape for managing patient profile views
export interface PatientProfile {
  id: number;
  full_name: string;
  email: string;
  phone?: string | null;
  date_of_birth: string;
  gender: string;
  medical_history?: string | null;
  created_at: string;
}

export const PatientServices = {
  /**
   * Fetches a single patient's detailed demographic and medical summary data card
   */
  async getPatientProfile(patientId: number): Promise<PatientProfile | null> {
    const useMockData = true;

    if (useMockData) {
      console.log(`Mock Mode: Fetching detailed medical profile chart for patient ID: ${patientId}`);
      return {
        id: patientId,
        full_name: "Ram Bahadur",
        email: "ram.bahadur@example.com",
        phone: "+977-9841234567",
        date_of_birth: "1994-05-12",
        gender: "Male",
        medical_history: "Chronic hypertension diagnosed in 2024. No known drug allergies.",
        created_at: "2026-01-10T08:30:00Z"
      };
    }

    try {
      const response = await api.get(`/patients/${patientId}`);
      if (response.data && response.data.success) {
        return response.data.data as PatientProfile;
      }
      return null;
    } catch (error) {
      console.error("Transmission breakdown inside PatientServices.getPatientProfile:", error);
      return null;
    }
  },

  /**
   * Updates an existing patient's health profile records or background notes
   */
  async updatePatientHistory(patientId: number, medicalHistory: string): Promise<boolean> {
    const useMockData = true;

    if (useMockData) {
      console.log(`Mock Mode: Successfully appended new medical notes for patient ID: ${patientId}`);
      return true;
    }

    try {
      const response = await api.put(`/patients/${patientId}/history`, { medical_history: medicalHistory });
      return !!(response.data && response.data.success);
    } catch (error) {
      console.error("Transmission breakdown inside PatientServices.updatePatientHistory:", error);
      return false;
    }
  }
};
