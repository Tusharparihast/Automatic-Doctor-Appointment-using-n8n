import {api} from "../lib/axios";
import { AuthUser, LoginPayload, RegisterPayload } from "../types/auth.types";

export const AuthServices = {
  /**
   * Handshakes with the backend network to verify user logins
   */
  async login(payload: LoginPayload): Promise<AuthUser | null> {
    // LOCAL DEVELOPMENT SWITCH: Set to 'true' to develop your frontend without a running backend server!
    const useMockData = true;

    if (useMockData) {
      console.log("Frontend running in Mock Mode. Simulating login profile check for:", payload.email);
      
      // Simulates different user routing states right on your browser screen!
      if (payload.email.includes("doctor")) {
        return { user_id: 101, email: payload.email, user_role: "doctor", full_name: "Dr. Tushar Sharma", is_active: true };
      } else if (payload.email.includes("admin")) {
        return { user_id: 202, email: payload.email, user_role: "admin staff", full_name: "Staff Admin Panel", is_active: true };
      } else {
        return { user_id: 303, email: payload.email, user_role: "patient", full_name: "John Doe (Patient)", is_active: true };
      }
    }

    // 📡 Live Production Route (This executes seamlessly once your backend/n8n services boot up later)
    try {
      const response = await api.post("/auth/login", payload);
      if (response.data && response.data.success) {
        return response.data.data as AuthUser;
      }
      return null;
    } catch (error) {
      console.error("Network communication failure inside AuthServices.login:", error);
      return null;
    }
  },

  /**
   * Registers a brand-new user profile onto the system platform
   */
  async register(payload: RegisterPayload): Promise<boolean> {
    const useMockData = true;

    if (useMockData) {
      console.log("Simulating successful account creation for:", payload.email);
      return true;
    }

    try {
      const response = await api.post("/auth/register", payload);
      return !!(response.data && response.data.success);
    } catch (error) {
      console.error("Network communication failure inside AuthServices.register:", error);
      return false;
    }
  }
};
