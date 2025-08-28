"use client";
import { useState, useEffect } from "react";
const benefits = [
  "managing tasks.",
  "managing staff",
  "tracking projects.",
  "invoicing.",
  "more profit.",
];
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseDuration = 2000;
export function AnimatedBenefits() {
  const [benefitIndex, setBenefitIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const handleTyping = () => {
      const currentBenefit = benefits[benefitIndex];
      if (isDeleting) {
        if (text.length > 0) {
          setText(currentBenefit.substring(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setBenefitIndex((prev) => (prev + 1) % benefits.length);
        }
      } else {
        if (text.length < currentBenefit.length) {
          setText(currentBenefit.substring(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }
    };
    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, benefitIndex]);
  return (
    <span className="font-semibold text-primary">
      {text}
      <span className="blinking-cursor">|</span>
    </span>
  );
}
