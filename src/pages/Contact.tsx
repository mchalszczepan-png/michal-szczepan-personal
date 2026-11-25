import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import DesktopMenuBar from "@/components/DesktopMenuBar";
import profilePhoto from "@/assets/profile-photo.jpg";
import { supabase } from "@/integrations/supabase/client";
import "@/styles/contact.css";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255),
  subject: z.string().trim().max(200, "Subject must be under 200 characters").optional(),
  message: z.string().trim().min(1, "Message is required").max(5000, "Message must be under 5000 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;
type Notice = { kind: "ok" | "error"; title: string; text: string };

const GITHUB_URL = "https://github.com/mchalszczepan-png";
const LINKEDIN_URL = "https://www.linkedin.com/in/michal-szczepan-728189370";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState<Notice | null>(null);
  const noticeTimer = useRef<number>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  useEffect(() => {
    document.title = "Contact: Michal Szczepan";
    return () => window.clearTimeout(noticeTimer.current);
  }, []);

  const show = (n: Notice) => {
    window.clearTimeout(noticeTimer.current);
    setNotice(n);
    noticeTimer.current = window.setTimeout(() => setNotice(null), 6000);
  };

  const onSubmit = async (data: ContactForm) => {
    setSending(true);
    try {
      const { data: result, error } = await supabase.functions.invoke("send-contact-email", {
        body: { ...data, honeypot: "" },
      });

      if (error) throw error;
      if (result?.error) throw new Error(result.error);

      show({ kind: "ok", title: "Message sent", text: "Thank you. I will reply as soon as I can." });
      reset();
    } catch (err) {
      show({ kind: "error", title: "Failed to send", text: (err instanceof Error && err.message) || "Something went wrong." });
    } finally {
      setSending(false);
    }
  };

  /** The card's Email line jumps to the compose window. */
  const startMessage = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const input = document.getElementById("contact-name");
    input?.scrollIntoView({ block: "center", behavior: reduce ? "auto" : "smooth" });
    input?.focus({ preventScroll: true });
  };

  const fieldProps = (name: keyof ContactForm) => ({
    id: `contact-${name}`,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `contact-${name}-err` : undefined,
  });
  const fieldError = (name: keyof ContactForm) =>
    errors[name] ? <span className="err" id={`contact-${name}-err`}>{errors[name]?.message}</span> : null;

  return (
    <div className="pg-contact">
      <DesktopMenuBar backHome />

      <main className="desk">
        <nav className="icons" aria-label="Pages">
          <Link className="icon" to="/">
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <path d="M6 32L32 9l26 23" fill="#F26B1D" stroke="#24211C" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M12 30v26h40V30" fill="#fff" stroke="#24211C" strokeWidth="2.5" strokeLinejoin="round" />
              <rect x="26" y="38" width="12" height="18" fill="#F4C94A" stroke="#24211C" strokeWidth="2" />
            </svg>
            <span>Home</span>
          </Link>
          <a className="icon" href="/Michal_Szczepan_CV.pdf" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <path d="M14 6h26l12 12v40H14z" fill="#fff" stroke="#24211C" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M40 6v12h12" fill="#F6F1E6" stroke="#24211C" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M20 26h22M20 32h26M20 38h18" stroke="#9A917F" strokeWidth="2" strokeLinecap="round" />
              <rect x="18" y="44" width="22" height="10" rx="2" fill="#D64532" stroke="#24211C" strokeWidth="1.5" />
              <text x="29" y="52" fontFamily="Figtree,sans-serif" fontSize="7.5" fontWeight="700" fill="#fff" textAnchor="middle">PDF</text>
            </svg>
            <span>CV</span>
          </a>
        </nav>

        <section className="win card" aria-label="Contact card">
          <div className="bar">
            <div className="dots">
              <Link className="close" to="/" aria-label="Close and go home" />
              <i aria-hidden="true" />
              <i aria-hidden="true" />
            </div>
            <div className="title">Michal Szczepan.vcf</div>
          </div>
          <div className="face">
            <img src={profilePhoto} alt="Michal Szczepan" />
            <div>
              <h1>Michal Szczepan</h1>
              <p className="role"><b>Co-Founder and CTO of Ganzy.</b></p>
            </div>
          </div>
          <div className="lines">
            <button type="button" className="line" onClick={startMessage}>
              <span className="k">Email</span>
              <span className="v">Send a message</span>
              <svg viewBox="0 0 64 64" aria-hidden="true">
                <rect x="7" y="15" width="50" height="34" rx="3" fill="#fff" stroke="#24211C" strokeWidth="2.5" />
                <path d="M8 17l24 18 24-18" fill="none" stroke="#24211C" strokeWidth="2.5" strokeLinejoin="round" />
                <rect x="44" y="20" width="9" height="10" fill="#F26B1D" stroke="#24211C" strokeWidth="1.5" />
              </svg>
            </button>
            <a className="line" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <span className="k">GitHub</span>
              <span className="v">github.com/mchalszczepan-png</span>
              <svg viewBox="0 0 64 64" aria-hidden="true">
                <rect x="7" y="7" width="50" height="50" rx="12" fill="#24211C" stroke="#24211C" strokeWidth="2.5" />
                <g transform="translate(14 14) scale(1.5)" fill="none" stroke="#FFFDF8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </g>
              </svg>
            </a>
            <a className="line" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              <span className="k">LinkedIn</span>
              <span className="v">linkedin.com/in/michal-szczepan-728189370</span>
              <svg viewBox="0 0 64 64" aria-hidden="true">
                <rect x="7" y="7" width="50" height="50" rx="10" fill="#2E5AA7" stroke="#24211C" strokeWidth="2.5" />
                <rect x="17" y="27" width="7" height="19" fill="#fff" />
                <circle cx="20.5" cy="19.5" r="4" fill="#fff" />
                <path d="M29 27h6.5v3c1.4-2.2 3.6-3.5 6.5-3.5 4.6 0 6 3 6 7.5V46h-7V35.5c0-2.2-.8-3.5-2.8-3.5-2.1 0-3.2 1.5-3.2 3.7V46h-6z" fill="#fff" />
              </svg>
            </a>
          </div>
          <p className="loc">
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M8 15s5-4.6 5-8.5A5 5 0 0 0 3 6.5C3 10.4 8 15 8 15z" fill="#F26B1D" stroke="#24211C" strokeWidth="1.4" />
              <circle cx="8" cy="6.5" r="1.8" fill="#fff" stroke="#24211C" strokeWidth="1.2" />
            </svg>
            Based in Cork, Ireland
          </p>
        </section>

        <section className="win focus compose" aria-labelledby="compose-title">
          <div className="bar">
            <div className="dots">
              <Link className="close" to="/" aria-label="Close and go home" />
              <i aria-hidden="true" />
              <i aria-hidden="true" />
            </div>
            <div className="title">Send a message</div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <p className="lead">
              <b id="compose-title">Send a message</b>
              Fill in the form and I will reply as soon as I can.
            </p>
            {/* Honeypot: hidden from people, filled only by bots */}
            <input className="hp" type="text" name="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            <div className="two">
              <div className={`field${errors.name ? " invalid" : ""}`}>
                <label htmlFor="contact-name">Name</label>
                <input {...register("name")} {...fieldProps("name")} placeholder="Your name" autoComplete="name" />
                {fieldError("name")}
              </div>
              <div className={`field${errors.email ? " invalid" : ""}`}>
                <label htmlFor="contact-email">Email</label>
                <input {...register("email")} {...fieldProps("email")} type="email" placeholder="your@email.com" autoComplete="email" />
                {fieldError("email")}
              </div>
            </div>
            <div className={`field${errors.subject ? " invalid" : ""}`}>
              <label htmlFor="contact-subject">Subject <i>(optional)</i></label>
              <input {...register("subject")} {...fieldProps("subject")} placeholder="What's this about?" />
              {fieldError("subject")}
            </div>
            <div className={`field${errors.message ? " invalid" : ""}`}>
              <label htmlFor="contact-message">Message</label>
              <textarea {...register("message")} {...fieldProps("message")} placeholder="Your message..." />
              {fieldError("message")}
            </div>

            <div className="send">
              <small>Or reach me on GitHub or LinkedIn.</small>
              <button className="btn primary" type="submit" disabled={sending}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
                {sending ? "Sending..." : "Send message"}
              </button>
            </div>
          </form>
        </section>

        <aside className="note"><b>Currently</b>Building Ganzy, and aiming for a 1:1 average in the winter engineering exams at UCC.</aside>
      </main>

      <div className={`toast${notice ? " show" : ""}${notice?.kind === "error" ? " bad" : ""}`} role="status" aria-live="polite">
        {notice && (
          <>
            <span className="mark" aria-hidden="true">{notice.kind === "ok" ? "✓" : "!"}</span>
            <div><b>{notice.title}</b>{notice.text}</div>
            <button type="button" className="dismiss" aria-label="Dismiss" onClick={() => setNotice(null)}>&times;</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;
