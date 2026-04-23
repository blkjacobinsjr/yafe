"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { joinWaitlist } from "@/app/actions";
import styles from "./waitlist-form.module.css";

type WaitlistState = {
  status: "idle" | "success" | "error";
  message: string;
};

const initialState: WaitlistState = {
  status: "idle",
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={styles.submitButton} disabled={pending}>
      <span className={styles.submitInner}>
        <span>{pending ? "Reserving your place" : "Join waitlist"}</span>
        <span className={styles.loader} data-visible={pending} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </span>
    </button>
  );
}

export function WaitlistForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [state, formAction] = useActionState(joinWaitlist, initialState);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <div className={styles.shell}>
      <form ref={formRef} action={formAction} className={styles.form}>
        <div className={styles.fieldRow}>
          <label className={styles.srOnly} htmlFor="waitlist-email">
            Email address
          </label>
          <input
            id="waitlist-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Email address"
            className={styles.input}
          />

          <label className={styles.honeypot} htmlFor="website">
            Website
          </label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            className={styles.honeypot}
          />

          <SubmitButton />
        </div>

        <p className={styles.helper}>
          One note when the first release lands. No crowded drip sequence.
        </p>

        <p
          className={[
            styles.message,
            state.status === "success" ? styles.messageSuccess : "",
            state.status === "error" ? styles.messageError : "",
          ].join(" ")}
          aria-live="polite"
        >
          {state.message || " "}
        </p>
      </form>
    </div>
  );
}
