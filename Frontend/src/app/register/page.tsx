import Link from "next/link";
import { RegisterForm } from "../../components/auth/RegisterForm";

export default function RegisterPage() {
  return <main className="flex min-h-screen flex-col items-center justify-center bg-[#f8faf9] px-5 py-12">
    <Link href="/" className="mb-8 flex items-center gap-3" aria-label="CarePoint home"><span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-700 text-xl text-white">✚</span><span className="text-xl font-bold tracking-tight text-slate-900">CarePoint</span></Link>
    <RegisterForm />
    <p className="mt-6 text-center text-sm text-slate-600">Already have an account? <Link href="/login" className="font-semibold text-teal-800 hover:text-teal-900">Sign in</Link></p>
    <Link href="/" className="mt-5 text-sm text-slate-500 transition hover:text-teal-800">← Back to home</Link>
  </main>;
}
