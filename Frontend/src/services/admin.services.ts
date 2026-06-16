import {api} from "../lib/axios";

// Strict local data template for tracking administrator overview charts
export interface AdminDashboardStats {
  totalPatients: number;
  totalDoctors: number;
  totalAppointments: number;
  pendingVerifications: number;
}

export const AdminServices = {
  /**
   * Fetches centralized system-wide analytics for manager summary dashboards
   */
  async getSystemStatistics(): Promise<AdminDashboardStats | null> {
    const useMockData = true;

    if (useMockData) {
      console.log("Mock Mode: Fetching overview dashboard analytics for Admin Panel");
      return {
        totalPatients: 1240,
        totalDoctors: 48,
        totalAppointments: 3150,
        pendingVerifications: 5
      };
    }

    try {
      const response = await api.get("/admin/stats");
      if (response.data && response.data.success) {
        return response.data.data as AdminDashboardStats;
      }
      return null;
    } catch (error) {
      console.error("Transmission error inside AdminServices.getSystemStatistics:", error);
      return null;
    }
  },

  /**
   * Administrative toggle switch to flag user activity profiles globally
   */
  async toggleUserActivation(targetUserId: number, makeActive: boolean): Promise<boolean> {
    const useMockData = true;

    if (useMockData) {
      console.log(`Mock Mode: Successfully changed user account ${targetUserId} active flag status to: ${makeActive}`);
      return true;
    }

    try {
      const response = await api.patch(`/admin/users/${targetUserId}/status`, { active: makeActive });
      return !!(response.data && response.data.success);
    } catch (error) {
      console.error("Transmission error inside AdminServices.toggleUserActivation:", error);
      return false;
    }
  }
};
