"use client";

import { useState } from "react";
import styles from "./Tab.module.css";
import { profile } from "@/lib/data";

export default function Connection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>// COMMS LINK</span>
        <h2 className={styles.title}>CONNECT</h2>
      </div>

      <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>IDENTIFIER (NAME)</label>
            <input
              name="name"
              required
              className={styles.input}
              placeholder="Your name"
              disabled={status === "sent"}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>SIGNAL ADDRESS (EMAIL)</label>
            <input
              name="email"
              type="email"
              required
              className={styles.input}
              placeholder="your@email.com"
              disabled={status === "sent"}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>MESSAGE</label>
            <textarea
              name="message"
              required
              className={styles.textarea}
              placeholder="What's on your mind?"
              disabled={status === "sent"}
            />
          </div>
          {status === "sent" ? (
            <p className={styles.formMsg}>✓ TRANSMISSION RECEIVED</p>
          ) : status === "error" ? (
            <p className={styles.formMsg} style={{ color: "#e63b2e" }}>
              ✗ TRANSMISSION FAILED — TRY EMAIL DIRECTLY
            </p>
          ) : (
            <button type="submit" className={styles.submitBtn} disabled={status === "sending"}>
              {status === "sending" ? "SENDING..." : "▶ TRANSMIT"}
            </button>
          )}
        </form>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 8 }}>
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                color: "var(--text-dim)",
                letterSpacing: "0.25em",
                marginBottom: 6,
              }}
            >
              DIRECT CHANNELS
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a
                href={`mailto:yodahemesay@gmail.com`}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--text-bright)",
                  textDecoration: "none",
                }}
              >
                ✉ yodahemesay@gmail.com
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--text-bright)",
                  textDecoration: "none",
                }}
              >
                ↗ LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--text-bright)",
                  textDecoration: "none",
                }}
              >
                ↗ GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
