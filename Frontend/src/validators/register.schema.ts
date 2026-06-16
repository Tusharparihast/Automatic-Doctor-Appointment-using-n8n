import { z } from "zod";

// Client-side form entry validation matching your database user registration fields
export const registerSchema = z
  .object({
    full_name: z
      .string()
      .min(2, { message: "Full name must be at least 2 characters long" })
      .max(150, { message: "Full name must not exceed 150 characters" }),

    email: z
      .string()
      .min(1, { message: "Email address is required" })
      .max(150, { message: "Email must not exceed 150 characters" })
      .email({ message: "Please provide a valid email format" })
      .transform((val) => val.toLowerCase().trim()),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long for account security" })
      .max(100, { message: "Password is too long" }),

    confirmPassword: z
      .string()
      .min(1, { message: "Please confirm your password entry" }),

    role: z.enum(["patient", "doctor", "admin staff"] as const, {
      error: () => ({ message: "Please select a valid system role classification" }),
    }), // Matches your exact backend varchar user role constraints
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Form submission failed: Passwords do not match",
    path: ["confirmPassword"], // Highlights the confirm password text field in red if validation fails
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
