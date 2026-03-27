import { useState } from "react";
import { MapPin, DollarSign, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OnboardingProps {
  onComplete: () => void;
}

const slides = [
  { icon: MapPin, title: "Find nearby help instantly", desc: "Discover verified workers near you for any task — cleaning, plumbing, electrical, and more." },
  { icon: DollarSign, title: "Affordable small tasks", desc: "Transparent pricing with no hidden fees. Pay only for what you need." },
  { icon: ShieldCheck, title: "Trusted verified workers", desc: "Every worker is verified and rated by real customers for your safety." },
];

const Onboarding = ({ onComplete }: OnboardingProps) => {
  const [step, setStep] = useState(0);
  const isLast = step === slides.length - 1;
  const slide = slides[step];
  const Icon = slide.icon;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-between bg-background px-6 py-12">
      <button onClick={onComplete} className="self-end text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        Skip
      </button>

      <div className="flex flex-col items-center text-center animate-fade-up" key={step}>
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
          <Icon className="h-12 w-12 text-primary" />
        </div>
        <h2 className="mt-8 font-display text-2xl font-bold text-foreground">{slide.title}</h2>
        <p className="mt-3 max-w-xs text-muted-foreground leading-relaxed">{slide.desc}</p>
      </div>

      <div className="flex flex-col items-center gap-6 w-full max-w-xs">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <div key={i} className={`h-2 rounded-full transition-all ${i === step ? "w-8 bg-primary" : "w-2 bg-border"}`} />
          ))}
        </div>
        <Button
          onClick={() => isLast ? onComplete() : setStep(s => s + 1)}
          className="w-full h-12 text-base font-semibold rounded-xl gap-2"
        >
          {isLast ? "Get Started" : "Next"} <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Onboarding;
