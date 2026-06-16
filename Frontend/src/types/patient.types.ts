// src/types/patient.types.ts

export interface Patient {
  id: number;

  full_name: string;

  email: string;

  phone?: string | null;

  created_at: string;
}