"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./product-stage.module.css";

type StageFrame = {
  src: string;
  alt: string;
};

type ProductStageProps = {
  frames: StageFrame[];
};

export function ProductStage({ frames }: ProductStageProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [anchorX, setAnchorX] = useState<number | null>(null);
  const [hasMoved, setHasMoved] = useState(false);

  const maxIndex = frames.length - 1;

  const stepFrame = (delta: number) => {
    setActiveIndex((current) => {
      const next = Math.max(0, Math.min(maxIndex, current + delta));
      return next;
    });
  };

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    setAnchorX(event.clientX);
    setHasMoved(false);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (anchorX === null) {
      return;
    }

    const threshold = event.currentTarget.clientWidth / (frames.length * 1.8);
    const distance = event.clientX - anchorX;

    if (Math.abs(distance) < threshold) {
      return;
    }

    setHasMoved(true);
    stepFrame(distance > 0 ? -1 : 1);
    setAnchorX(event.clientX);
  };

  const handlePointerEnd = () => {
    setAnchorX(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (hasMoved) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const midpoint = bounds.left + bounds.width / 2;
    stepFrame(event.clientX < midpoint ? -1 : 1);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      stepFrame(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      stepFrame(1);
    }
  };

  return (
    <div
      className={[
        styles.stage,
        anchorX !== null ? styles.dragging : "",
        hasMoved ? styles.touched : "",
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
      tabIndex={0}
      role="button"
      aria-label="Rotate the Yafe frame"
    >
      {frames.map((frame, index) => (
        <div
          key={frame.src}
          className={[
            styles.frame,
            index === activeIndex ? styles.frameActive : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <Image
            src={frame.src}
            alt={frame.alt}
            fill
            sizes="(max-width: 900px) 100vw, 56vw"
            className={styles.frameImage}
            draggable={false}
          />
        </div>
      ))}

      <div className={styles.dots} aria-hidden="true">
        {frames.map((frame, index) => (
          <span
            key={frame.src}
            className={[
              styles.dot,
              index === activeIndex ? styles.dotActive : "",
            ]
              .filter(Boolean)
              .join(" ")}
          />
        ))}
      </div>

      <div className={styles.hint}>Drag to rotate</div>
    </div>
  );
}
