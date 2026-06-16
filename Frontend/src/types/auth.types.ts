// System access roles aligned with your backend users row strings
export type UserRole = "patient" | "doctor" | "admin staff";

// Logged-in session contract matching the exact return columns of verify_user_login()
export interface AuthUser {
  user_id: number;
  user_role: UserRole;
  is_active: boolean;
}

// Input parameters captured by your visual login form component
export interface LoginPayload {
  email: string;
  password: string;
}

// Input parameters required for your registration onboarding pipeline
export interface RegisterPayload {
  full_name: string;
  email: string;
  password: string;
  role: UserRole;
}
