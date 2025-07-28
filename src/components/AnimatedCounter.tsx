import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter = ({ value, duration = 2000, className = "" }: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    const numericValue = parseInt(value.replace(/\D/g, ""));
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const currentValue = Math.floor(startValue + (numericValue - startValue) * progress);
      
      if (value.includes("+")) {
        setDisplayValue(`${currentValue}+`);
      } else if (value.includes("x")) {
        setDisplayValue(`${currentValue}x`);
      } else if (value.includes("%")) {
        setDisplayValue(`${currentValue}%`);
      } else if (value.includes("k")) {
        setDisplayValue(`${currentValue}k`);
      } else {
        setDisplayValue(currentValue.toString());
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  return <span className={className}>{displayValue}</span>;
};

export default AnimatedCounter;