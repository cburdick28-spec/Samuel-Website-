import { useState } from "react";
import { Button } from "../common/Button";
import { RevealOnScroll } from "../common/RevealOnScroll";
import styles from "./Newsletter.module.css";

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <RevealOnScroll className={styles.inner}>
          <h2 className={styles.heading}>Stay in the Loop</h2>
          <p className={styles.copy}>
            Sign up for early access to new drops, member pricing, and the occasional field note.
          </p>
          {submitted ? (
            <span className={styles.status}>You're on the list. Welcome to AURA.</span>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="email"
                required
                className={styles.input}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
              />
              <Button type="submit" variant="primary">
                Sign Up
              </Button>
            </form>
          )}
        </RevealOnScroll>
      </div>
    </section>
  );
}
