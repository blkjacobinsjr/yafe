"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

const transforms = {
  up: "translate3d(0, 24px, 0)",
  down: "translate3d(0, -24px, 0)",
  left: "translate3d(24px, 0, 0)",
  right: "translate3d(-24px, 0, 0)",
  none: "none",
} as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: keyof typeof transforms;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const isInView = () => {
      const bounds = element.getBoundingClientRect();
      return bounds.top < window.innerHeight * 0.88 && bounds.bottom > 0;
    };

    setMounted(true);

    if (isInView()) {
      setVisible(true);
      return;
    }

    setVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const shouldShow = !mounted || visible;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shouldShow ? 1 : 0,
        transform: shouldShow ? "translate3d(0, 0, 0)" : transforms[direction],
        transitionProperty: "opacity, transform",
        transitionDuration: "650ms",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}s`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}
