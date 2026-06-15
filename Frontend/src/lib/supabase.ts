declare const require: any;

const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

if (!supabaseUrl) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL in environment variables.");
}

if (!supabaseAnonKey) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_ANON_KEY in environment variables.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});