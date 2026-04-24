"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { joinWaitlist } from "@/app/actions";
import styles from "./waitlist-form.module.css";

type WaitlistState = {
  status: "idle" | "success" | "error";
  message: string;
};

type WaitlistFormProps = {
  formId: string;
  collection?: string;
  source?: string;
  label?: string;
  placeholder?: string;
  submitLabel?: string;
  pendingLabel?: string;
  note?: string;
  centered?: boolean;
  className?: string;
};

const initialState: WaitlistState = {
  status: "idle",
  message: "",
};

function SubmitButton({
  label,
  pendingLabel,
}: {
  label: string;
  pendingLabel: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={styles.submitButton} disabled={pending}>
      <span className={styles.submitInner}>
        <span>{pending ? pendingLabel : label}</span>
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
        <span className={styles.loader} data-visible={pending} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </span>
    </button>
  );
}

export function WaitlistForm({
  formId,
  collection = "yafe-01",
  source = "page",
  label = "Request the list",
  placeholder = "your.name@somewhere",
  submitLabel = "Request access",
  pendingLabel = "Entering",
  note = "Private. No newsletters. One letter, when it is time.",
  centered = false,
  className = "",
}: WaitlistFormProps) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [state, formAction] = useActionState(joinWaitlist, initialState);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <div
      className={[
        styles.shell,
        centered ? styles.centered : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <form ref={formRef} action={formAction} className={styles.form}>
        {label ? <div className={styles.label}>{label}</div> : null}

        <div className={styles.fieldRow}>
          <label className={styles.srOnly} htmlFor={formId}>
            Email address
          </label>
          <input
            id={formId}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={placeholder}
            className={styles.input}
          />

          <input type="hidden" name="collection" value={collection} />
          <input type="hidden" name="source" value={source} />

          <label className={styles.honeypot} htmlFor={`${formId}-website`}>
            Website
          </label>
          <input
            id={`${formId}-website`}
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            className={styles.honeypot}
          />

          <SubmitButton label={submitLabel} pendingLabel={pendingLabel} />
        </div>

        <p className={styles.note}>{note}</p>

        <p
          className={[
            styles.message,
            state.status === "success" ? styles.messageSuccess : "",
            state.status === "error" ? styles.messageError : "",
          ]
            .filter(Boolean)
            .join(" ")}
          aria-live="polite"
        >
          {state.message || " "}
        </p>
      </form>
    </div>
  );
}
