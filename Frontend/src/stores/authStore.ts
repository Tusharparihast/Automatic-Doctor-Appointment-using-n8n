import { create } from "zustand";
import { AuthUser } from "../types/auth.types";

interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  // Action triggers to manipulate authentication state transitions globally
  setLoginSuccess: (userProfile: AuthUser) => void;
  setLogout: () => void;
  setLoadingState: (loading: boolean) => void;
}

// Global client-side session state store memory track
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  setLoginSuccess: (userProfile) =>
    set({
      user: userProfile,
      isAuthenticated: true,
      isLoading: false,
    }),

  setLogout: () =>
    set({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    }),

  setLoadingState: (loading) => 
    set({ 
      isLoading: loading 
    }),
}));
