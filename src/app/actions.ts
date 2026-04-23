"use server";

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

type WaitlistState = {
  status: "idle" | "success" | "error";
  message: string;
};

type WaitlistEntry = {
  email: string;
  collection: string;
  createdAt: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function joinWaitlist(
  _previousState: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const website = String(formData.get("website") ?? "").trim();

  if (website) {
    return { status: "success", message: "You are on the list." };
  }

  if (!emailPattern.test(email)) {
    return { status: "error", message: "Enter a valid email address." };
  }

  const entry: WaitlistEntry = {
    email,
    collection: "yafe-01",
    createdAt: new Date().toISOString(),
  };

  try {
    if (process.env.WAITLIST_WEBHOOK_URL) {
      const response = await fetch(process.env.WAITLIST_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          ...(process.env.WAITLIST_WEBHOOK_SECRET
            ? { "x-waitlist-secret": process.env.WAITLIST_WEBHOOK_SECRET }
            : {}),
        },
        body: JSON.stringify(entry),
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(`Webhook failed with ${response.status}`);
      }
    } else if (!process.env.VERCEL_ENV) {
      await appendLocally(entry);
    } else {
      console.info("[yafe-waitlist]", JSON.stringify(entry));
    }

    return { status: "success", message: "You are on the list." };
  } catch (error) {
    console.error("[yafe-waitlist:error]", error);
    return {
      status: "error",
      message: "Something slipped. Try again in a moment.",
    };
  }
}

async function appendLocally(entry: WaitlistEntry) {
  const directory = join(process.cwd(), "data");
  const file = join(directory, "waitlist.json");

  await mkdir(directory, { recursive: true });

  let entries: WaitlistEntry[] = [];

  try {
    const raw = await readFile(file, "utf8");
    const parsed = JSON.parse(raw) as WaitlistEntry[];
    if (Array.isArray(parsed)) {
      entries = parsed;
    }
  } catch {
    entries = [];
  }

  entries.push(entry);
  await writeFile(file, `${JSON.stringify(entries, null, 2)}\n`, "utf8");
}
