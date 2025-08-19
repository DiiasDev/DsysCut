import React, { useEffect, useRef, useState } from "react";

interface AlertWithProgressProps {
  message: string;
  type?: "success" | "error";
  duration?: number; // em ms
  onClose?: () => void;
}

export default function AlertWithProgress({
  message,
  type = "success",
  duration = 3000,
  onClose,
}: AlertWithProgressProps) {
  const [progress, setProgress] = useState(100);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let start = Date.now();
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const percent = Math.max(100 - (elapsed / duration) * 100, 0);
      setProgress(percent);
      if (percent <= 0) {
        clearInterval(timerRef.current!);
        if (onClose) onClose();
      }
    }, 30);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [duration, onClose]);

  return (
    <div
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 min-w-[260px] max-w-xs px-4 py-3 rounded-lg shadow-lg flex flex-col items-center
        ${type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}
      role="alert"
    >
      <span className="font-semibold">{message}</span>
      <div className="w-full h-1 mt-2 bg-white/30 rounded overflow-hidden">
        <div
          className={`h-full transition-all duration-75
            ${type === "success" ? "bg-green-300" : "bg-red-300"}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
