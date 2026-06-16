import {z} from 'zod';

// Client-side form entry validation matching your 'verify_user_login' parameters
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email address is required" })
    .max(150, { message: "Email must not exceed 150 characters" })
    .email({ message: "Please provide a valid email format (e.g., user@example.com)" })
    .transform((val) => val.toLowerCase().trim()),
    
  password: z
    .string()
    .min(1, { message: "Password field cannot be blank" })
});

// TypeScript compile-time type inferred directly from the runtime schema definitions
export type LoginFormData = z.infer<typeof loginSchema>;