import { z } from "zod";

// 🛡️ Form entry validation matching your appointments SQL constraint configurations
export const appointmentSchema = z.object({
  patient_id: z
    .number()
    .positive({ message: "Invalid patient identifier reference key" }), // Ensures valid positive bigint sequence matching

  doctor_id: z
    .number()
    .positive({ message: "Invalid doctor identifier reference key" }), // Ensures valid positive bigint sequence matching

  appointment_date: z
    .string()
    .min(1, { message: "Please choose an appointment date from the calendar calendar" }), // Validates SQL date not null

  appointment_time: z
    .string()
    .min(1, { message: "Please select a clinic operating time slot hour" }), // Validates SQL time not null

  symptoms: z
    .string()
    .max(1000, { message: "Symptom description details must not exceed 1000 characters" })
    .optional()
    .nullable() // Matches your database 'symptoms text' nullable properties block layout
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;
