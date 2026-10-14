import Link from "next/link";

const services = [
  { icon: "🩺", title: "Find the right doctor", description: "Explore care options and choose a practitioner that fits your needs." },
  { icon: "📅", title: "Book with confidence", description: "Choose an available date and time without the back-and-forth." },
  { icon: "✨", title: "Smarter care guidance", description: "Share your symptoms to help guide your next step toward suitable care." },
];
const steps = [
  { number: "01", title: "Tell us what you need", description: "Start with a few details about your visit or symptoms." },
  { number: "02", title: "Choose your doctor", description: "Review available doctors and appointment times." },
  { number: "03", title: "Confirm your visit", description: "Book your slot and keep your appointment details together." },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8faf9] text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-[#f8faf9]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="CarePoint home">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-700 text-xl text-white shadow-lg shadow-teal-900/15">✚</span>
            <span className="leading-tight"><span className="block text-lg font-bold tracking-tight">CarePoint</span><span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">Appointments, made easier</span></span>
          </Link>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#services" className="transition hover:text-teal-800">Services</a><a href="#how-it-works" className="transition hover:text-teal-800">How it works</a><a href="#about" className="transition hover:text-teal-800">About</a>
          </div>
          <div className="flex items-center gap-3"><Link href="/login" className="hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-white sm:inline-flex">Sign in</Link><Link href="/register" className="rounded-xl bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-teal-900/15 transition hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2">Get started <span aria-hidden="true">↗</span></Link></div>
        </nav>
      </header>

      <section className="relative">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-24 h-[28rem] w-[28rem] rounded-full bg-teal-100/70 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-44 top-72 h-80 w-80 rounded-full bg-emerald-100/60 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-28">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white/80 px-4 py-2 text-sm font-medium text-teal-800 shadow-sm"><span className="h-2 w-2 rounded-full bg-emerald-500" />Healthcare that works around you</div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-[-0.045em] sm:text-5xl lg:text-6xl">A healthier day starts with <span className="text-teal-700">the right care.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">Find a doctor, explore available appointment times, and take the next step in your care—all in one simple place.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/register" className="inline-flex items-center justify-center gap-3 rounded-2xl bg-teal-700 px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-teal-900/15 transition hover:-translate-y-0.5 hover:bg-teal-800">Book an appointment <span aria-hidden="true" className="text-lg">→</span></Link><Link href="/login" className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/80 px-6 py-4 text-sm font-semibold text-slate-700 transition hover:border-teal-200 hover:bg-white">Access your account</Link></div>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-slate-600"><span className="flex items-center gap-2"><span className="text-teal-700">✓</span> Simple online booking</span><span className="flex items-center gap-2"><span className="text-teal-700">✓</span> Clear appointment details</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div aria-hidden="true" className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-teal-100/80 via-white to-emerald-100/80 blur-xl" />
            <div className="relative rounded-[2rem] border border-white bg-white/90 p-5 shadow-2xl shadow-slate-900/10 sm:p-7">
              <div className="flex items-start justify-between gap-4"><div><p className="text-sm font-medium text-slate-500">Your care, at a glance</p><h2 className="mt-1 text-2xl font-bold tracking-tight">Make time for health.</h2></div><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-2xl">♡</span></div>
              <div className="mt-7 rounded-2xl bg-[#f1f8f6] p-5"><div className="flex items-center gap-4"><div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-teal-700 text-2xl text-white">✚</div><div className="min-w-0 flex-1"><p className="font-semibold">Care that fits your schedule</p><p className="mt-1 text-sm leading-6 text-slate-600">Browse doctors and available slots in one place.</p></div></div>
                <div className="mt-5 grid grid-cols-3 gap-2"><div className="rounded-xl bg-white p-3 text-center"><span className="block text-xl font-bold text-teal-800">01</span><span className="mt-1 block text-xs text-slate-500">Find care</span></div><div className="rounded-xl bg-white p-3 text-center"><span className="block text-xl font-bold text-teal-800">02</span><span className="mt-1 block text-xs text-slate-500">Pick a time</span></div><div className="rounded-xl bg-white p-3 text-center"><span className="block text-xl font-bold text-teal-800">03</span><span className="mt-1 block text-xs text-slate-500">Book a visit</span></div></div>
              </div>
              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-slate-100 p-4"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-lg">✦</span><div className="flex-1"><p className="text-sm font-semibold">A little more guidance</p><p className="mt-1 text-xs leading-5 text-slate-500">Symptom information can help you prepare for a conversation with a clinician.</p></div></div>
              <p className="mt-4 text-center text-xs leading-5 text-slate-400">CarePoint supports your booking journey and does not replace professional medical advice.</p>
            </div>
            <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:flex"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-lg text-emerald-700">✓</span><div><p className="text-sm font-semibold">Booking made simple</p><p className="text-xs text-slate-500">From search to confirmation</p></div></div>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-slate-100 bg-white py-20 sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="mx-auto max-w-2xl text-center"><p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">Made for your wellbeing</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Care coordination, without the complication.</h2><p className="mt-4 leading-7 text-slate-600">Useful tools to help you move from looking for care to planning your visit.</p></div><div className="mt-12 grid gap-5 md:grid-cols-3">{services.map((service) => <article key={service.title} className="group rounded-3xl border border-slate-100 bg-[#fbfdfc] p-7 transition duration-200 hover:-translate-y-1 hover:border-teal-100 hover:shadow-xl hover:shadow-teal-900/5"><span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-2xl transition group-hover:bg-teal-100">{service.icon}</span><h3 className="mt-6 text-lg font-bold">{service.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p></article>)}</div></div></section>

      <section id="how-it-works" className="py-20 sm:py-24"><div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">How it works</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Three simple steps to your next visit.</h2><p className="mt-5 leading-7 text-slate-600">Spend less time figuring out the process and more time preparing for your appointment.</p><Link href="/register" className="mt-8 inline-flex items-center gap-2 font-semibold text-teal-800 transition hover:gap-3">Get started <span aria-hidden="true">→</span></Link></div><div className="space-y-4">{steps.map((step) => <div key={step.number} className="flex gap-5 rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-sm font-bold text-teal-800">{step.number}</span><div><h3 className="font-bold">{step.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p></div></div>)}</div></div></section>

      <section id="about" className="px-5 pb-20 sm:px-8 sm:pb-24"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[2rem] bg-teal-800 px-7 py-10 text-white sm:px-12 sm:py-14 lg:flex-row lg:items-center"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-200">Your next step starts here</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready to make your health a priority?</h2><p className="mt-4 leading-7 text-teal-50/85">Create an account to begin exploring the appointment experience.</p></div><Link href="/register" className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-bold text-teal-900 transition hover:bg-teal-50">Create your account <span aria-hidden="true">→</span></Link></div></section>

      <footer className="border-t border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8"><div className="flex items-center gap-2 font-semibold text-slate-700"><span className="text-teal-700">✚</span> CarePoint</div><p>Thoughtful tools for a simpler appointment experience.</p><div className="flex gap-5"><Link href="/login" className="transition hover:text-teal-800">Sign in</Link><Link href="/register" className="transition hover:text-teal-800">Register</Link></div></div></footer>
    </main>
  );
}
