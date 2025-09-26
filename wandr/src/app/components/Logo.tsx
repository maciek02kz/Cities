"use client";
import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

export default function Logo() {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const router = useRouter();

  const handleActivate = useCallback(() => {
    setIsEnlarged(true);
    // wait a moment so the enlargement animation is visible, then navigate home
    window.setTimeout(() => {
      setIsEnlarged(false);
      router.push("/");
    }, 300);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLImageElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleActivate();
      }
    },
    [handleActivate]
  );

  return (
    <img
      src="/wandr_logo.png"
      alt="Wandr Logo"
      className={`logo ${isEnlarged ? "logo--enlarged" : ""}`}
      style={{ height: "50px" }}
      role="button"
      tabIndex={0}
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
    />
  );
}
