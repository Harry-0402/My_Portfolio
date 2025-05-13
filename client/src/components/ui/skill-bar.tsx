import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface SkillBarProps {
  name: string;
  percentage: number;
  className?: string;
}

export function SkillBar({ name, percentage, className }: SkillBarProps) {
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setWidth(percentage);
      }, 100);
    }
  }, [visible, percentage]);

  return (
    <div ref={ref} className={cn("mb-6", className)}>
      <div className="flex justify-between mb-2">
        <span className="font-medium text-dark-600">{name}</span>
        <span className="text-primary">{percentage}%</span>
      </div>
      <div className="relative h-[6px] bg-gray-200 rounded-full">
        <div
          className="skill-progress"
          style={{ width: `${width}%` }}
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}
