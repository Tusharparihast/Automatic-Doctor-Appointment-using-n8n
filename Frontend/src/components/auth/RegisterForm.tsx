"use client";

import * as React from "react";
import { useState } from "react";
import { registerSchema } from "../../validators/register.schema";
import { AuthServices } from "../../services/auth.services";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export function RegisterForm() {
  // Local component state hooks tracking register input entries
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<"patient" | "doctor" | "admin staff">("patient");
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formSuccess, setFormSuccess] = useState<boolean>(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setFormError(null);
    setFormSuccess(false);

    // Run the input data block directly through your real-time Zod validator schema
    const validation = registerSchema.safeParse({
      full_name: fullName,
      email,
      password,
      confirmPassword,
      role
    });

    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((err) => {
        if (err.path && err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    try {
      setIsSubmitting(true);
      
      // Pass sanitized onboarding payload down to your simulated registration network worker
      const success = await AuthServices.register(validation.data);

      if (success) {
        setFormSuccess(true);
        // Clear out input states on successful profile creation
        setFullName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        setFormError("Account creation failed. This email may already be registered.");
      }
    } catch (err) {
      setFormError("A network transmission failure occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-xl border border-slate-200 bg-white p-8 shadow-sm text-left">
      <div className="space-y-2 mb-6 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Create An Account</h1>
        <p className="text-sm text-slate-500">Sign up to access the medical appointment portal</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {formError && (
          <div className="rounded-md bg-red-50 p-3 text-sm font-medium text-red-600 border border-red-200">
            {formError}
          </div>
        )}

        {formSuccess && (
          <div className="rounded-md bg-green-50 p-3 text-sm font-medium text-green-600 border border-green-200">
            Registration successful! You can now log into your profile dashboard.
          </div>
        )}

        <Input
          label="Full Name"
          placeholder="Tushar Sharma"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          error={errors.full_name}
          disabled={isSubmitting}
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="user@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          disabled={isSubmitting}
        />

        {/* Explicit Role Classification Selector Block */}
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-slate-700 tracking-wide">Account Role Type</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as any)}
            disabled={isSubmitting}
            className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 transition-all"
          >
            <option value="patient">Patient Portal Account</option>
            <option value="doctor">Medical Practitioner / Doctor</option>
            <option value="admin staff">Clinic Administrative Staff</option>
          </select>
          {errors.role && <p className="text-xs font-semibold text-red-500">{errors.role}</p>}
        </div>

        <Input
          label="Password"
          type="password"
          placeholder="•••••••• (Min 8 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          disabled={isSubmitting}
        />

        <Input
          label="Confirm Password"
          type="password"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={errors.confirmPassword}
          disabled={isSubmitting}
        />

        <Button type="submit" isLoading={isSubmitting} className="mt-2">
          Register Account
        </Button>
      </form>
    </div>
  );
}
