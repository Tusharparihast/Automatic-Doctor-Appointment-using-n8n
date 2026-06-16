import * as React from "react";
import { cn } from "../../lib/utils"; // Links straight to your managed class merger utility file

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, error, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5 text-left">
        {/* Dynamically renders the text label banner if provided */}
        {label && (
          <label className="block text-sm font-medium text-slate-700 tracking-wide">
            {label}
          </label>
        )}
        
        {/* Universal input box template with pre-built focus transitions and error borders */}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all",
            error && "border-red-500 focus-visible:ring-red-500",
            className
          )}
          ref={ref}
          {...props}
        />
        
        {/* Displays red validation error lines if data formatting fails */}
        {error && (
          <p className="text-xs font-semibold text-red-500 tracking-normal">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
