// src/types/doctor.types.ts

export interface Doctor {
  id: number; 
  full_name: string; 
  specialization_name: string; 
  email: string; 
  phone?: string | null; 
  consultation_fee: number; 
  consultation_duration: number; 
  experience_years: number; 
  active: boolean; 
  created_at: string; 
}

//Matches what your 'get_doctors()' database routine returns
export interface DoctorListItem {
  doctor_id: number;
  doctor_name: string;
  specialization_name: string;
}
