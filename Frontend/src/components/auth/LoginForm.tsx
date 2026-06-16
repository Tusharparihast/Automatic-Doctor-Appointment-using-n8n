"use client";

import * as React from "react";
import { useState } from "react";
import { loginSchema } from "../../validators/login.schema";
import { AuthServices } from "../../services/auth.services";
import { useAuthStore } from "../../stores/authStore";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export function LoginForm() {
  // Local component state hooks tracking inputs and validation errors
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [formError, setFormError] = useState<string | null>(null);

  // Pull global state manipulation actions directly from your Zustand store
  const { isLoading, setLoadingState, setLoginSuccess } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setFormError(null);

    // 🛡️ Run the input data directly through your real-time Zod validator schema
    const validation = loginSchema.safeParse({ email, password });

    if (!validation.success) {
      const fieldErrors: { email?: string; password?: string } = {};
      validation.error.issues.forEach((err) => { 
        if (err.path[0]) {
          fieldErrors[err.path[0] as "email" | "password"] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    try {
      setLoadingState(true);
      
      // Pass sanitized data fields to your simulated backend communication engine
      const userProfile = await AuthServices.login(validation.data);

      if (userProfile) {
        setLoginSuccess(userProfile);
        console.log("Login Verification Successful! Session Cache Active for:", userProfile);
        alert(`Logged in successfully as: ${userProfile.user_role}`);
        // (Next navigation route pushes will be handled by your pages wrapper layer later)
      } else {
        setFormError("Authentication failed. Please verify your email or password entries.");
      }
    } catch (err) {
      setFormError("A network error occurred. Please try again later.");
    } finally {
      setLoadingState(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-xl border border-slate-200 bg-white p-8 shadow-sm text-center">
      <div className="space-y-2 mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Welcome Back</h1>
        <p className="text-sm text-slate-500">Log in to manage your medical appointments</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Displays global network error alert boxes if database lookups fail */}
        {formError && (
          <div className="rounded-md bg-red-50 p-3 text-sm font-medium text-red-600 text-left border border-red-200">
            {formError}
          </div>
        )}

        <Input
          label="Email Address"
          type="email"
          placeholder="doctor@clinic.org or patient@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          disabled={isLoading}
        />

        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          disabled={isLoading}
        />

        <Button type="submit" isLoading={isLoading} className="mt-2">
          Sign In
        </Button>
      </form>
    </div>
  );
}
