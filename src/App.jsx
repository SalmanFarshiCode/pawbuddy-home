const OTP_API_BASE = "https://pawbuddy-otp.onrender.com";
import React, { useMemo, useState } from "react";
import {
  ShieldPlus,
  MapPin,
  Store,
  Users,
  Star,
  Sparkles,
  CheckCircle2,
  Phone,
  LockKeyhole,
  ArrowRight,
  BadgeCheck,
  HeartPulse,
  Siren,
  Bot,
} from "lucide-react";

const cx = (...classes) => classes.filter(Boolean).join(" ");

// Links
const BDAPPS_URL = "https://bdapps.com/appstore-v4-consumer/app-details/APP_130310";
const PLAY_STORE_URL = "#";
const APP_STORE_URL = "#";

// Logos (place in public/assets/)
const PAWBUDDY_LOGO = "/assets/pawbuddy-logo.png";
const ROBI_LOGO = "/assets/robi-logo.png";
const APPLE_LOGO = "/assets/apple-logo.png";
const PLAY_LOGO = "/assets/store-logo.svg";
const BDAPPS_LOGO = "/assets/bdapps-logo.png";

function Pill({ children, tone = "neutral" }) {
  const tones = {
    neutral: "border-slate-200/70 bg-white/70 text-slate-700 ring-1 ring-white/60 shadow-sm",
    emerald: "border-emerald-200/60 bg-emerald-50/80 text-emerald-800 ring-1 ring-white/60 shadow-sm",
    violet: "border-violet-200/60 bg-violet-50/80 text-violet-800 ring-1 ring-white/60 shadow-sm",
  };
  return (
    <span className={cx("inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs", tones[tone])}>
      {children}
    </span>
  );
}

function SectionTitle({ kicker, title, desc }) {
  const kickerIsString = typeof kicker === "string";
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {kicker ? (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-50 to-emerald-50 px-3 py-1 text-xs text-slate-700 ring-1 ring-slate-200/60 shadow-sm">
          {kickerIsString ? <Sparkles className="h-4 w-4 text-violet-600" /> : null}
          <span className="inline-flex items-center gap-2">{kicker}</span>
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
        href={BDAPPS_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200/70 shadow-sm transition hover:translate-y-[-1px]"
        title="Open on BDApps Store"
      >
        <img
          src={BDAPPS_LOGO}
          alt="BDApps"
          className="h-5 w-5 object-contain"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        BDApps Store
        <ArrowRight className="h-4 w-4" />
      </a>

      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[-1px] hover:bg-violet-700"
      >
        <img
          src={PLAY_LOGO}
          alt="Play Store"
          className="h-5 w-5 object-contain"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        Play Store
      </a>

      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[-1px] hover:bg-emerald-700"
      >
        <img
          src={APPLE_LOGO}
          alt="App Store"
          className="h-5 w-5 object-contain"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        App Store
      </a>

      <a
        href="#subscribe"
        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200/70 shadow-sm transition hover:translate-y-[-1px]"
      >
        <img
          src={ROBI_LOGO}
          alt="Robi"
          className="h-5 w-5 object-contain"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        Subscribe
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc, tone = "violet" }) {
  const wrapper =
    tone === "emerald"
      ? "from-emerald-50/90 to-white"
      : tone === "slate"
      ? "from-slate-50/90 to-white"
      : "from-violet-50/90 to-white";

  const badge =
    tone === "emerald"
      ? "bg-emerald-50 text-emerald-800 ring-emerald-200/60"
      : tone === "slate"
      ? "bg-slate-50 text-slate-700 ring-slate-200/70"
      : "bg-violet-50 text-violet-800 ring-violet-200/60";

  const iconStyles =
    tone === "emerald" ? "text-emerald-700" : tone === "slate" ? "text-slate-700" : "text-violet-700";

  const badgeLabel = tone === "violet" ? "Rescue" : tone === "emerald" ? "Care" : "Community";

  return (
    <div className="rounded-3xl bg-white/75 p-5 shadow-sm ring-1 ring-slate-200/70">
      <div className="flex items-start gap-3">
        <div
          className={cx(
            "rounded-2xl p-2 ring-1 shadow-sm bg-gradient-to-br",
            wrapper,
            "ring-slate-200/70"
          )}
        >
          <Icon className={cx("h-5 w-5", iconStyles)} />
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <div className="text-sm font-semibold text-slate-900">{title}</div>
            <span className={cx("rounded-full px-2 py-0.5 text-[11px] font-semibold ring-1", badge)}>
              {badgeLabel}
            </span>
          </div>
          <div className="mt-1 text-sm leading-6 text-slate-600">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function ScreenshotCard({ src, title, desc }) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white/75 shadow-sm ring-1 ring-slate-200/70">
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
  const [tab, setTab] = useState("premium");
  const [phone, setPhone] = useState("");
  const [otpRequested, setOtpRequested] = useState(false);
  const [otp, setOtp] = useState("");
  const [status, setStatus] = useState("");

  // NEW:
  const [referenceNo, setReferenceNo] = useState("");
  const [loading, setLoading] = useState(false);

  const isBDNumber = useMemo(() => {
    const digits = phone.replace(/\D/g, "");
    return digits.length === 11 && digits.startsWith("01");
  }, [phone]);

  const canRequestOtp = isBDNumber && !otpRequested && !loading;
  const canVerify =
    otpRequested && otp.replace(/\D/g, "").length >= 4 && !!referenceNo && !loading;

  const reset = () => {
    setOtpRequested(false);
    setOtp("");
    setStatus("");
    setReferenceNo("");
    setLoading(false);
  };

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    if (!isBDNumber) {
      setStatus("Enter a valid Bangladesh mobile number (11 digits).");
      return;
    }

    setLoading(true);
    setStatus("Requesting OTP...");

    try {
      const digits = phone.replace(/\D/g, "");
      const body = new URLSearchParams({ user_mobile: digits });

      const res = await fetch(`${OTP_API_BASE}/send_otp.php`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok || !data?.referenceNo) {
        const msg = data?.error || data?.statusDetail || "Failed to request OTP.";
        setStatus(msg);
        setLoading(false);
        return;
      }

      setReferenceNo(data.referenceNo);
      setOtpRequested(true);
      setStatus("OTP sent. Enter the code to confirm subscription.");
    } catch (err) {
      setStatus(`Network error: ${String(err?.message || err)}`);
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    const otpDigits = otp.replace(/\D/g, "");
    if (otpDigits.length < 4) {
      setStatus("Please enter a valid OTP.");
      return;
    }
    if (!referenceNo) {
      setStatus("Missing reference number. Please request OTP again.");
      return;
    }

    setLoading(true);
    setStatus("Verifying OTP...");

    try {
      const body = new URLSearchParams({
        Otp: otpDigits,          // IMPORTANT: matches your PHP key "Otp"
        referenceNo: referenceNo // IMPORTANT: matches your PHP key "referenceNo"
      });

      const res = await fetch(`${OTP_API_BASE}/verify_otp.php`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) {
        const msg = data?.error || data?.statusDetail || "OTP verification failed.";
        setStatus(msg);
        setLoading(false);
        return;
      }

      const sub = data?.subscriptionStatus ?? "(unknown)";
      setStatus(`✅ Verified. Subscription status: ${sub}`);
      // Optional: if success, you can keep them "subscribed" in UI here.
    } catch (err) {
      setStatus(`Network error: ${String(err?.message || err)}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="subscribe" className="rounded-3xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-200/70 md:p-5">
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
              tab === "premium"
                ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200/70"
                : "text-slate-600 hover:text-slate-900"
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
              tab === "report"
                ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200/70"
                : "text-slate-600 hover:text-slate-900"
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
              <img
                src={ROBI_LOGO}
                alt="Robi"
                className="h-5 w-5 object-contain"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <div className="text-sm font-semibold">Premium via Robi</div>
              <span className="ml-auto rounded-full bg-emerald-600/10 px-2 py-0.5 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200/60">
                ৳2 / day
              </span>
            </div>
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
                {loading ? "Please wait..." : otpRequested ? "Verify OTP" : "Request OTP"}
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="#download"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200/70 transition hover:translate-y-[-1px]"
              >
                Download App
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {otpRequested ? (
              <button
                type="button"
                onClick={reset}
                className="w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200/70"
              >
                Start over
              </button>
            ) : null}

            <p className="text-center text-xs text-slate-500">By subscribing, you agree to our Terms & Privacy Policy.</p>
          </form>
        </>
      ) : (
        <div className="mt-4 space-y-3">
          {/* your existing report tab UI unchanged */}
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
      desc: "24/7 VetBot guidance and emergency next steps, with handoff to trusted vets when needed.",
      tone: "emerald",
    },
    {
      icon: Bot,
      title: "Always-on VetBot",
      desc: "Quick answers for symptoms, prevention, and urgent decisions—built for Bangladesh.",
      tone: "emerald",
    },
    {
      icon: Users,
      title: "Volunteer Network",
      desc: "Gamified volunteering with rewards & leaderboard—turn good intentions into real impact.",
      tone: "slate",
    },
  ];

  const howItWorks = [
    { step: "1", title: "Report", desc: "Share location + description + photo in the app." },
    { step: "2", title: "Dispatch", desc: "Nearby rescue teams & volunteers get notified (Premium gets priority)." },
    { step: "3", title: "Care", desc: "VetBot guidance + vet directory + follow-up updates." },
  ];

  const faqs = [
    { q: "What’s included in Basic?", a: "Rescue reporting, store access, VetBot (limited), and volunteer discovery." },
    { q: "What does Premium unlock?", a: "Full VetBot, priority notifications, store discounts, plus rewards & perks." },
    { q: "How does Robi billing work?", a: "Enter your Robi number, request OTP, and confirm subscription at ৳2/day." },
    {
      q: "Is PawBuddy an emergency service?",
      a: "It helps coordinate and guide. For severe emergencies, contact the nearest vet or rescue hotline immediately.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(65%_55%_at_50%_0%,rgba(139,92,246,0.18)_0%,rgba(16,185,129,0.10)_42%,rgba(255,255,255,0)_75%)]" />
        <div className="absolute -top-44 left-1/2 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-300/25 via-white/10 to-emerald-300/20 blur-3xl" />
      </div>

      {/* Header */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <div className="flex items-center gap-3">
          {/* Logo: circle + object-cover so it fills perfectly */}
          <div className="h-10 w-10 overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-slate-200/70">
            <img
              src={PAWBUDDY_LOGO}
              alt="PawBuddy"
              className="h-full w-full object-cover"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>
          <div>
            <div className="text-sm font-semibold leading-4">PawBuddy</div>
            <div className="text-xs text-slate-500">Rescue • Care • Store • VetBot</div>
          </div>
        </div>

        <nav className="hidden items-center gap-4 text-sm text-slate-600 md:flex">
          <a className="hover:text-slate-900" href="#features">
            Features
          </a>
          <a className="hover:text-slate-900" href="#premium">
            Premium
          </a>
          <a className="hover:text-slate-900" href="#screens">
            Screens
          </a>
          <a className="hover:text-slate-900" href="#faq">
            FAQ
          </a>

          <a
            className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200/70 transition hover:translate-y-[-1px]"
            href="#download"
          >
            Download
          </a>

          <a
            className="inline-flex items-center gap-2 rounded-2xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[-1px] hover:bg-violet-700"
            href="#subscribe"
          >
            <img
              src={ROBI_LOGO}
              alt="Robi"
              className="h-4 w-4 object-contain"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            Subscribe
          </a>
        </nav>

        {/* Mobile quick actions */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#download"
            className="rounded-2xl bg-white px-3 py-2 text-xs font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200/70"
          >
            Download
          </a>
          <a href="#subscribe" className="rounded-2xl bg-violet-600 px-3 py-2 text-xs font-semibold text-white shadow-sm">
            Subscribe
          </a>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-6 md:pb-24">
        <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          {/* Left */}
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
              {/* Main download button -> BDApps (with bdapps logo inside) */}
              <a
                href={BDAPPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[-1px] hover:bg-violet-700"
              >
                <img
                  src={BDAPPS_LOGO}
                  alt="BDApps"
                  className="h-5 w-5 object-contain"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
                Download PawBuddy
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#subscribe"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200/70 transition hover:translate-y-[-1px]"
              >
                <img
                  src={ROBI_LOGO}
                  alt="Robi"
                  className="h-5 w-5 object-contain"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
                Subscribe via Robi (৳2/day)
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Hero collage */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { src: "/assets/hero-rescue.png", label: "Rescue Report" },
                { src: "/assets/hero-vetbot.png", label: "VetBot + Vets" },
                { src: "/assets/hero-store.png", label: "Pet Store" },
              ].map((x) => (
                <div key={x.label} className="overflow-hidden rounded-3xl bg-white/75 shadow-sm ring-1 ring-slate-200/70">
                  <div className="relative aspect-[3/4] bg-gradient-to-br from-violet-100/70 to-emerald-100/40">
                    <img
                      src={x.src}
                      alt={x.label}
                      className="h-full w-full object-cover"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200/70">
                      {x.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="md:sticky md:top-6">
            <OTPCard />

            <div className="mt-4 rounded-3xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-200/70">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <ShieldPlus className="h-4 w-4 text-emerald-700" />
                Trust & Safety
              </div>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                  PawBuddy coordinates rescue & guidance. Response time depends on nearby teams and availability.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                  For severe emergencies, contact your nearest vet or local rescue hotline immediately.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features */}
        <section id="features" className="mt-16 scroll-mt-24 md:mt-24">
          <SectionTitle
            kicker="Cute enough for pets — serious enough for rescue"
            title="Rescue + Care + Store + Community"
            desc="Fast action when it matters, and supportive care every day."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} tone={f.tone} />
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mt-16 md:mt-24">
          <SectionTitle title="How PawBuddy works" desc="Simple flow: report → dispatch → care." />
          <div className="grid gap-4 md:grid-cols-3">
            {howItWorks.map((h) => (
              <div key={h.step} className="rounded-3xl bg-white/75 p-6 shadow-sm ring-1 ring-slate-200/70">
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

        {/* Premium */}
        <section id="premium" className="mt-16 scroll-mt-24 md:mt-24">
          <SectionTitle
            kicker={
              <span className="inline-flex items-center gap-2">
                <img
                  src={ROBI_LOGO}
                  alt="Robi"
                  className="h-4 w-4 object-contain"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
                Robi carrier billing
              </span>
            }
            title="Premium ৳2/day — unlock priority + perks"
            desc="Keep Basic free for everyone, and use Premium to fund speed + support."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-white/75 p-6 shadow-sm ring-1 ring-slate-200/70">
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
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#subscribe"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200/70 transition hover:translate-y-[-1px]"
                >
                  <img
                    src={ROBI_LOGO}
                    alt="Robi"
                    className="h-5 w-5 object-contain"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Screens */}
        <section id="screens" className="mt-16 scroll-mt-24 md:mt-24">
          <SectionTitle title="A quick look inside the app" desc="Rescue reporting, VetBot, and store — all in one place." />
          <div className="grid gap-4 md:grid-cols-4">
            <ScreenshotCard src="/assets/app-home.jpg" title="Home" desc="Quick access to rescue, store, vet & volunteer." />
            <ScreenshotCard src="/assets/app-report.jpg" title="Report Rescue" desc="Location + description + photo → submit." />
            <ScreenshotCard src="/assets/app-vetbot.jpg" title="VetBot" desc="Instant guidance + emergency tips." />
            <ScreenshotCard src="/assets/app-store.jpg" title="Pet Store" desc="Food & accessories with Premium discounts." />
          </div>
        </section>

        {/* Download */}
        <section id="download" className="mt-16 scroll-mt-24 md:mt-24">
          <div className="rounded-3xl bg-white/75 p-8 shadow-sm ring-1 ring-slate-200/70 md:p-10">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h3 className="flex items-center gap-3 text-2xl font-semibold tracking-tight text-slate-900">
  <span className="h-9 w-9 overflow-hidden rounded-full bg-white ring-1 ring-slate-200/70">
    <img
      src={PAWBUDDY_LOGO}
      alt="PawBuddy"
      className="h-full w-full object-cover"
    />
  </span>
  Download PawBuddy
</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
                  Start reporting rescues, get VetBot guidance anytime, and support faster response with Premium.
                </p>

                {/* Primary call-to-action: BDApps first */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={BDAPPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[-1px] hover:bg-violet-700"
                  >
                    <img
                      src={BDAPPS_LOGO}
                      alt="BDApps"
                      className="h-5 w-5 object-contain"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                    Download PawBuddy
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                {/* Store buttons row */}
                <div className="mt-4">
                  <StoreButtons />
                </div>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-violet-100/70 to-emerald-100/40 p-6 ring-1 ring-slate-200/70">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-semibold text-slate-900">Scan to download</div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200/70 shadow-sm">
                    <img
                      src={ROBI_LOGO}
                      alt="Robi"
                      className="h-4 w-4 object-contain"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                    Robi supported
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600">Add your QR code here when ready.</p>
                <div className="mt-4 flex aspect-square w-full items-center justify-center rounded-2xl bg-white/70 text-xs text-slate-500 ring-1 ring-slate-200/70">
                  QR
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-16 scroll-mt-24 md:mt-24">
          <SectionTitle title="FAQ" desc="Answers that help users feel confident and safe." />
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-3xl bg-white/75 p-6 shadow-sm ring-1 ring-slate-200/70">
                <div className="text-sm font-semibold text-slate-900">{f.q}</div>
                <div className="mt-2 text-sm leading-6 text-slate-600">{f.a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-slate-200/70 py-10 text-sm text-slate-500">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 overflow-hidden rounded-full bg-white ring-1 ring-slate-200/70">
                <img
                  src={PAWBUDDY_LOGO}
                  alt="PawBuddy"
                  className="h-full w-full object-cover"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>
              <div>
                <div className="font-semibold text-slate-900">PawBuddy</div>
                <div className="mt-1">© {new Date().getFullYear()} • Rescue & care for Bangladesh</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a className="hover:text-slate-900" href="#features">
                Features
              </a>
              <a className="hover:text-slate-900" href="#premium">
                Premium
              </a>
              <a className="hover:text-slate-900" href="#screens">
                Screens
              </a>
              <a className="hover:text-slate-900" href="#download">
                Download
              </a>
              <a className="hover:text-slate-900" href="#subscribe">
                Subscribe
              </a>
              <a className="hover:text-slate-900" href="#0">
                Terms
              </a>
              <a className="hover:text-slate-900" href="#0">
                Privacy
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
