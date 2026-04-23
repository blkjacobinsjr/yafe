"use client";

import { useEffect, useRef, useState } from "react";

type BlurWordsProps = {
  text: string;
  className?: string;
  delay?: number;
};

export function BlurWords({
  text,
  className = "",
  delay = 60,
}: BlurWordsProps) {
  const words = text.split(" ");
  const ref = useRef<HTMLSpanElement | null>(null);
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
      { threshold: 0.15 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const shouldShow = !mounted || visible;

  return (
    <span ref={ref} className={className} aria-label={text}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          aria-hidden="true"
          style={{
            display: "inline-block",
            marginRight: index < words.length - 1 ? "0.18em" : "0",
            opacity: shouldShow ? 1 : 0,
            filter: shouldShow ? "blur(0px)" : "blur(10px)",
            transform: shouldShow
              ? "translate3d(0, 0, 0)"
              : "translate3d(0, 18px, 0)",
            transitionProperty: "opacity, transform, filter",
            transitionDuration: "720ms",
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            transitionDelay: `${index * delay}ms`,
            willChange: "transform, opacity, filter",
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
