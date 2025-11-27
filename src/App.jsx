import React, { useMemo, useState } from "react";
import {
  ShieldPlus,
  MapPin,
  Store,
  Bot,
  Users,
  Star,
  Sparkles,
  CheckCircle2,
  Phone,
  LockKeyhole,
  ArrowRight,
  Download,
  BadgeCheck,
  HeartPulse,
  Siren,
} from "lucide-react";

const cx = (...classes) => classes.filter(Boolean).join(" ");

// Update these when your stores are live
const PLAY_STORE_URL = "#";
const APP_STORE_URL = "#";

function Pill({ children, tone = "neutral" }) {
  const tones = {
    neutral:
      "border-slate-200/70 bg-white/70 text-slate-700 ring-1 ring-white/60 shadow-sm",
    emerald:
      "border-emerald-200/60 bg-emerald-50/80 text-emerald-800 ring-1 ring-white/60 shadow-sm",
    violet:
      "border-violet-200/60 bg-violet-50/80 text-violet-800 ring-1 ring-white/60 shadow-sm",
  };
  return (
    <span className={cx("inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs", tones[tone])}>
      {children}
    </span>
  );
}

function SectionTitle({ kicker, title, desc }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {kicker ? (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-50 to-emerald-50 px-3 py-1 text-xs text-slate-700 ring-1 ring-slate-200/60 shadow-sm">
          <Sparkles className="h-4 w-4 text-violet-600" />
          {kicker}
        </div>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">{title}</h2>
      {desc ? <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">{desc}</p> : null}
    </div>
  );
}

function StoreButtons({ className = "" }) {
  return (
    <div className={cx("flex flex-wrap items-center gap-3", className)}>
      <a
        href={PLAY_STORE_URL}
        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[-1px] hover:bg-violet-700"
      >
        <Download className="h-4 w-4" />
        Play Store
      </a>
      <a
        href={APP_STORE_URL}
        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[-1px] hover:bg-emerald-700"
      >
        <Download className="h-4 w-4" />
        App Store
      </a>
      <a
        href="#subscribe"
        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200/70 shadow-sm transition hover:translate-y-[-1px]"
      >
        Subscribe (Robi)
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc, tone = "violet" }) {
  const toneStyles =
    tone === "emerald"
      ? "bg-emerald-50/50 ring-emerald-200/50"
      : tone === "slate"
      ? "bg-slate-50 ring-slate-200/70"
      : "bg-violet-50/50 ring-violet-200/50";

  const iconStyles =
    tone === "emerald" ? "text-emerald-700" : tone === "slate" ? "text-slate-700" : "text-violet-700";

  return (
    <div className="rounded-3xl bg-white/70 p-5 shadow-sm ring-1 ring-slate-200/70">
      <div className="flex items-start gap-3">
        <div className={cx("rounded-2xl p-2 ring-1", toneStyles)}>
          <Icon className={cx("h-5 w-5", iconStyles)} />
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">{title}</div>
          <div className="mt-1 text-sm leading-6 text-slate-600">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function ScreenshotCard({ src, title, desc }) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white/70 shadow-sm ring-1 ring-slate-200/70">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-violet-100/70 to-emerald-100/40">
        <img
          src={src}
          alt={title}
          className="h-full w-full object-cover transition group-hover:scale-[1.02]"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>
      <div className="p-4">
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        <p className="mt-1 text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

function OTPCard() {
  const [tab, setTab] = useState("premium"); // "premium" | "report"
  const [phone, setPhone] = useState("");
  const [otpRequested, setOtpRequested] = useState(false);
  const [otp, setOtp] = useState("");
  const [status, setStatus] = useState("");

  const isBDNumber = useMemo(() => {
    const digits = phone.replace(/\D/g, "");
    return digits.length === 11 && digits.startsWith("01");
  }, [phone]);

  const canRequestOtp = isBDNumber && !otpRequested;
  const canVerify = otpRequested && otp.replace(/\D/g, "").length >= 4;

  const handleRequestOtp = (e) => {
    e.preventDefault();
    if (!canRequestOtp) {
      setStatus("Please enter a valid Bangladesh mobile number (11 digits).");
      return;
    }
    setOtpRequested(true);
    setStatus("OTP requested. Please enter the code you receive to confirm.");
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (!canVerify) {
      setStatus("Please enter your OTP to continue.");
      return;
    }
    setStatus("OTP captured. Connect Robi verification to activate subscription.");
  };

  const reset = () => {
    setOtpRequested(false);
    setOtp("");
    setStatus("");
  };

  return (
    <div id="subscribe" className="rounded-3xl bg-white/75 p-4 shadow-sm ring-1 ring-slate-200/70 md:p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-semibold text-slate-900">Get started</div>
        <div className="rounded-2xl bg-slate-50 p-1 ring-1 ring-slate-200/70">
          <button
            onClick={() => {
              setTab("premium");
              reset();
            }}
            className={cx(
              "rounded-2xl px-3 py-1.5 text-xs font-semibold transition",
              tab === "premium" ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200/70" : "text-slate-600 hover:text-slate-900"
            )}
          >
            Premium
          </button>
          <button
            onClick={() => {
              setTab("report");
              reset();
            }}
            className={cx(
              "rounded-2xl px-3 py-1.5 text-xs font-semibold transition",
              tab === "report" ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200/70" : "text-slate-600 hover:text-slate-900"
            )}
          >
            Report Rescue
          </button>
        </div>
      </div>

      {tab === "premium" ? (
        <>
          <div className="mt-4 rounded-3xl bg-gradient-to-br from-violet-600/10 via-white to-emerald-600/10 p-4 ring-1 ring-slate-200/70">
            <div className="flex items-center gap-2 text-slate-900">
              <BadgeCheck className="h-5 w-5 text-violet-600" />
              <div className="text-sm font-semibold">Premium via Robi</div>
              <span className="ml-auto rounded-full bg-emerald-600/10 px-2 py-0.5 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200/60">
                ৳2 / day
              </span>
            </div>

            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                24/7 VetBot (full access)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Priority notifications to rescue teams & vets
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Store discounts + rewards & leaderboard perks
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Auto-volunteer perks (gamified)
              </li>
            </ul>
          </div>

          <form onSubmit={otpRequested ? handleVerify : handleRequestOtp} className="mt-4 space-y-3">
            <label className="block">
              <span className="mb-1 block text-xs font-semibold text-slate-700">Robi phone number</span>
              <div className="flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200/70">
                <Phone className="h-4 w-4 text-slate-500" />
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="01XXXXXXXXX"
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>
            </label>

            {otpRequested ? (
              <label className="block">
                <span className="mb-1 block text-xs font-semibold text-slate-700">OTP</span>
                <div className="flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200/70">
                  <LockKeyhole className="h-4 w-4 text-slate-500" />
                  <input
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  />
                </div>
              </label>
            ) : null}

            {status ? (
              <div className="rounded-2xl bg-slate-50 px-3 py-2 text-xs text-slate-700 ring-1 ring-slate-200/70">
                {status}
              </div>
            ) : null}

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <button
                type="submit"
                className={cx(
                  "flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition",
                  otpRequested
                    ? canVerify
                      ? "bg-emerald-600 text-white hover:translate-y-[-1px] hover:bg-emerald-700"
                      : "bg-emerald-600/20 text-emerald-900/40"
                    : canRequestOtp
                    ? "bg-violet-600 text-white hover:translate-y-[-1px] hover:bg-violet-700"
                    : "bg-violet-600/20 text-violet-900/40"
                )}
              >
                {otpRequested ? "Verify OTP" : "Request OTP"}
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="#download"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200/70 transition hover:translate-y-[-1px]"
              >
                Download App
                <Download className="h-4 w-4" />
              </a>
            </div>

            <p className="text-center text-xs text-slate-500">
              By subscribing, you agree to our Terms & Privacy Policy.
            </p>
          </form>
        </>
      ) : (
        <div className="mt-4 space-y-3">
          <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200/70">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <MapPin className="h-4 w-4 text-violet-600" />
              Report a stray in seconds
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Add location, a photo, and a short note. Nearby rescue teams and volunteers get notified quickly.
            </p>
            <a
              href="#download"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-violet-700"
            >
              Download to Report
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200/70">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <Store className="h-4 w-4 text-emerald-600" />
              Pet Store in-app
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Food and accessories curated for Bangladesh, with discounts for Premium members.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const features = [
    {
      icon: Siren,
      title: "Live Rescue Reporting",
      desc: "Report strays with location + photo. Coordinate faster with real rescue teams and volunteers.",
      tone: "violet",
    },
    {
      icon: HeartPulse,
      title: "Vet-guided Support",
      desc: "24/7 VetBot for guidance and emergency tips, with a clear handoff to real vets.",
      tone: "emerald",
    },
    {
      icon: Store,
      title: "Pet Store",
      desc: "Food and essentials in one place, with Premium discounts and reward perks.",
      tone: "slate",
    },
    {
      icon: Users,
      title: "Volunteer Network",
      desc: "Gamified volunteering with rewards, leaderboard, and community-driven impact.",
      tone: "emerald",
    },
  ];

  const howItWorks = [
    { step: "1", title: "Report", desc: "Share location + description + photo in the app." },
    { step: "2", title: "Dispatch", desc: "Nearby rescue teams & volunteers get notified (Premium gets priority)." },
    { step: "3", title: "Care", desc: "VetBot guidance + vet directory + follow-up updates." },
  ];

  const faqs = [
    {
      q: "What’s included in Basic?",
      a: "Rescue reporting, pet store access, VetBot (limited), and volunteer discovery.",
    },
    {
      q: "What does Premium unlock?",
      a: "Full VetBot access, priority notifications, store discounts, and rewards + volunteer perks.",
    },
    {
      q: "How does Robi billing work?",
      a: "Enter your Robi number, request OTP, and confirm subscription at ৳2/day.",
    },
    {
      q: "Is PawBuddy an emergency service?",
      a: "PawBuddy helps coordinate and guide. For severe emergencies, contact a nearby vet or local rescue hotline.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(65%_55%_at_50%_0%,rgba(139,92,246,0.18)_0%,rgba(16,185,129,0.10)_42%,rgba(255,255,255,0)_75%)]" />
        <div className="absolute -top-40 left-1/2 h-[540px] w-[980px] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-300/25 via-white/10 to-emerald-300/20 blur-3xl" />
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/70">
            <span className="text-xs text-slate-500">Logo</span>
          </div>
          <div>
            <div className="text-sm font-semibold leading-4">PawBuddy</div>
            <div className="text-xs text-slate-500">Rescue • Care • Store • VetBot</div>
          </div>
        </div>

        <nav className="hidden items-center gap-4 text-sm text-slate-600 md:flex">
          <a className="hover:text-slate-900" href="#features">Features</a>
          <a className="hover:text-slate-900" href="#premium">Premium</a>
          <a className="hover:text-slate-900" href="#screens">Screens</a>
          <a className="hover:text-slate-900" href="#faq">FAQ</a>
          <a
            className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200/70 transition hover:translate-y-[-1px]"
            href="#download"
          >
            Download
          </a>
          <a
            className="rounded-2xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[-1px] hover:bg-violet-700"
            href="#subscribe"
          >
            Subscribe
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-5 pb-16 pt-6 md:pb-24">
        <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Pill tone="violet">
                <Star className="h-4 w-4 text-violet-700" />
                BDApps Innovation Summit 2024 • Rank 7
              </Pill>
              <Pill tone="emerald">
                <BadgeCheck className="h-4 w-4 text-emerald-700" />
                Built for Bangladesh
              </Pill>
            </div>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
              Save animals faster —
              <span className="block bg-gradient-to-r from-violet-700 via-emerald-700 to-violet-700 bg-clip-text text-transparent">
                report, rescue, and care in one app.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 md:text-base">
              PawBuddy brings together live rescue reporting, a pet store, VetBot guidance, and a volunteer network —
              curated for Bangladesh.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#download"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[-1px] hover:bg-violet-700"
              >
                Download PawBuddy
                <Download className="h-4 w-4" />
              </a>

              <a
                href="#subscribe"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200/70 transition hover:translate-y-[-1px]"
              >
                Subscribe via Robi (৳2/day)
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { src: "/assets/hero-rescue.png", label: "Rescue Report" },
                { src: "/assets/hero-vetbot.png", label: "VetBot + Vets" },
                { src: "/assets/hero-store.png", label: "Pet Store" },
              ].map((x) => (
                <div key={x.label} className="overflow-hidden rounded-3xl bg-white/70 shadow-sm ring-1 ring-slate-200/70">
                  <div className="relative aspect-[3/4] bg-gradient-to-br from-violet-100/70 to-emerald-100/40">
                    <img
                      src={x.src}
                      alt={x.label}
                      className="h-full w-full object-cover"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200/70">
                      {x.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:sticky md:top-6">
            <OTPCard />
            <div className="mt-4 rounded-3xl bg-white/75 p-4 shadow-sm ring-1 ring-slate-200/70">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <ShieldPlus className="h-4 w-4 text-emerald-700" />
                Trust & Safety
              </div>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                  Community-driven rescue coordination and verified support flows.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                  For severe emergencies, contact the nearest vet or local rescue hotline.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <section id="features" className="mt-16 scroll-mt-24 md:mt-24">
          <SectionTitle
            kicker="Everything in one place"
            title="Rescue + Care + Store + Community"
            desc="Designed for fast action when it matters — and ongoing care every day."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} tone={f.tone} />
            ))}
          </div>
        </section>

        <section className="mt-16 md:mt-24">
          <SectionTitle title="How PawBuddy works" desc="Simple flow: report → dispatch → care." />
          <div className="grid gap-4 md:grid-cols-3">
            {howItWorks.map((h) => (
              <div key={h.step} className="rounded-3xl bg-white/70 p-6 shadow-sm ring-1 ring-slate-200/70">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/15 to-emerald-600/15 text-sm font-semibold text-slate-900 ring-1 ring-slate-200/70">
                    {h.step}
                  </div>
                  <div className="text-sm font-semibold text-slate-900">{h.title}</div>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{h.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="premium" className="mt-16 scroll-mt-24 md:mt-24">
          <SectionTitle
            kicker="Robi carrier billing"
            title="Premium ৳2/day — unlock priority + perks"
            desc="Keep Basic free for everyone, and use Premium to fund speed + support."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-white/70 p-6 shadow-sm ring-1 ring-slate-200/70">
              <div className="text-sm font-semibold text-slate-900">Basic (Free)</div>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {[
                  "Report rescue with location + photo",
                  "Pet store (browse & buy)",
                  "VetBot access (limited)",
                  "Volunteer discovery + community",
                ].map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-slate-400" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-violet-600/10 via-white to-emerald-600/10 p-6 shadow-sm ring-1 ring-slate-200/70">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-semibold text-slate-900">Premium</div>
                <span className="rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200/60">
                  ৳2/day
                </span>
              </div>

              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {[
                  "24/7 VetBot (full access) + vet handoff",
                  "Priority notifications to rescue teams & vets",
                  "Store discounts",
                  "Rewards + leaderboard perks",
                  "Automatic volunteer perks (gamified)",
                ].map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    {x}
                  </li>
                ))}
              </ul>

              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                <a
                  href="#download"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-violet-700"
                >
                  Download
                  <Download className="h-4 w-4" />
                </a>
                <a
                  href="#subscribe"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200/70 transition hover:translate-y-[-1px]"
                >
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="screens" className="mt-16 scroll-mt-24 md:mt-24">
          <SectionTitle title="A quick look inside the app" desc="Rescue reporting, VetBot, and store — all in one place." />
          <div className="grid gap-4 md:grid-cols-4">
            <ScreenshotCard src="/assets/app-home.jpg" title="Home" desc="Quick access to rescue, store, vet & volunteer." />
            <ScreenshotCard src="/assets/app-report.jpg" title="Report Rescue" desc="Location + description + photo → submit." />
            <ScreenshotCard src="/assets/app-vetbot.jpg" title="VetBot" desc="Instant guidance + emergency tips." />
            <ScreenshotCard src="/assets/app-store.jpg" title="Pet Store" desc="Food & accessories with Premium discounts." />
          </div>
        </section>

        <section id="download" className="mt-16 scroll-mt-24 md:mt-24">
          <div className="rounded-3xl bg-white/70 p-8 shadow-sm ring-1 ring-slate-200/70 md:p-10">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900">Download PawBuddy</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
                  Start reporting rescues, get VetBot guidance anytime, and support faster response with Premium.
                </p>
                <div className="mt-6">
                  <StoreButtons />
                </div>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-violet-100/70 to-emerald-100/40 p-6 ring-1 ring-slate-200/70">
                <div className="text-sm font-semibold text-slate-900">Scan to download</div>
                <p className="mt-2 text-sm text-slate-600">
                  Add your QR code here when ready.
                </p>
                <div className="mt-4 flex aspect-square w-full items-center justify-center rounded-2xl bg-white/70 text-xs text-slate-500 ring-1 ring-slate-200/70">
                  QR
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mt-16 scroll-mt-24 md:mt-24">
          <SectionTitle title="FAQ" desc="Answers that help users feel confident and safe." />
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-3xl bg-white/70 p-6 shadow-sm ring-1 ring-slate-200/70">
                <div className="text-sm font-semibold text-slate-900">{f.q}</div>
                <div className="mt-2 text-sm leading-6 text-slate-600">{f.a}</div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-16 border-t border-slate-200/70 py-10 text-sm text-slate-500">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <div className="font-semibold text-slate-900">PawBuddy</div>
              <div className="mt-1">© {new Date().getFullYear()} • Rescue & care for Bangladesh</div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a className="hover:text-slate-900" href="#features">Features</a>
              <a className="hover:text-slate-900" href="#premium">Premium</a>
              <a className="hover:text-slate-900" href="#screens">Screens</a>
              <a className="hover:text-slate-900" href="#download">Download</a>
              <a className="hover:text-slate-900" href="#subscribe">Subscribe</a>
              <a className="hover:text-slate-900" href="#0">Terms</a>
              <a className="hover:text-slate-900" href="#0">Privacy</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
