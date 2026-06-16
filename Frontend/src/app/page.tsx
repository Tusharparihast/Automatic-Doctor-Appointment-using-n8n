"use client";

import * as React from "react";
import { useState } from "react";
import { LoginForm } from "../components/auth/LoginForm";
import { RegisterForm } from "../components/auth/RegisterForm";

export default function Home() {
  // Local screen routing state to toggle between form panels dynamically
  const [isLoginView, setIsLoginView] = useState<boolean>(true);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-6 md:p-24">
      <div className="w-full max-w-md space-y-6">
        {/* Portal Gateway Container Card */}
        {isLoginView ? <LoginForm /> : <RegisterForm />}

        {/* Dynamic Navigation Interface Toggle Control Link */}
        <div className="text-center text-sm">
          {isLoginView ? (
            <p className="text-slate-600">
              New to the clinic platform?{" "}
              <button
                type="button"
                onClick={() => setIsLoginView(false)}
                className="font-semibold text-slate-900 underline hover:text-slate-800"
              >
                Create an account here
              </button>
            </p>
          ) : (
            <p className="text-slate-600">
              Already have a clinic profile?{" "}
              <button
                type="button"
                onClick={() => setIsLoginView(true)}
                className="font-semibold text-slate-900 underline hover:text-slate-800"
              >
                Sign into your dashboard
              </button>
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
