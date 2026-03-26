import { useState } from "react";
import { Target, Ruler, Zap, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OnboardingProps {
  onComplete: (data: OnboardingData) => void;
}

export interface OnboardingData {
  goal: string;
  height: string;
  weight: string;
  age: string;
  gender: string;
  level: string;
}

const goals = [
  { id: "lose", label: "Lose Weight", icon: "🔥" },
  { id: "muscle", label: "Build Muscle", icon: "💪" },
  { id: "fit", label: "Stay Fit", icon: "🏃" },
  { id: "endurance", label: "Improve Endurance", icon: "⚡" },
];

const levels = [
  { id: "beginner", label: "Beginner", desc: "Just getting started" },
  { id: "intermediate", label: "Intermediate", desc: "Consistent for 3+ months" },
  { id: "advanced", label: "Advanced", desc: "Training for years" },
];

const Onboarding = ({ onComplete }: OnboardingProps) => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<OnboardingData>({ goal: "", height: "", weight: "", age: "", gender: "", level: "" });

  const next = () => {
    if (step < 2) setStep(step + 1);
    else onComplete(data);
  };

  const canProceed = step === 0 ? data.goal : step === 1 ? data.height && data.weight && data.age : data.level;

  return (
    <div className="fixed inset-0 z-40 flex flex-col gradient-dark">
      {/* Progress */}
      <div className="flex gap-2 p-6">
        {[0, 1, 2].map(i => (
          <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${i <= step ? "gradient-accent" : "bg-muted"}`} />
        ))}
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-32" style={{ animation: "fade-up 0.4s ease-out" }} key={step}>
        {step === 0 && (
          <div>
            <Target className="h-10 w-10 text-primary mb-4" />
            <h2 className="font-display text-2xl font-bold text-foreground">What's Your Goal?</h2>
            <p className="text-muted-foreground mt-1 mb-6">This helps us personalize your experience</p>
            <div className="space-y-3">
              {goals.map(g => (
                <button
                  key={g.id}
                  onClick={() => setData({ ...data, goal: g.id })}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all ${data.goal === g.id ? "border-primary glow-primary bg-primary/10" : "border-border bg-card hover:border-muted-foreground/30"}`}
                >
                  <span className="text-2xl">{g.icon}</span>
                  <span className="font-medium text-foreground">{g.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <Ruler className="h-10 w-10 text-primary mb-4" />
            <h2 className="font-display text-2xl font-bold text-foreground">Basic Info</h2>
            <p className="text-muted-foreground mt-1 mb-6">Help us calculate your targets</p>
            <div className="space-y-4">
              {[
                { key: "height" as const, label: "Height (cm)", placeholder: "175" },
                { key: "weight" as const, label: "Weight (kg)", placeholder: "70" },
                { key: "age" as const, label: "Age", placeholder: "25" },
              ].map(f => (
                <div key={f.key}>
                  <label className="text-sm text-muted-foreground mb-1 block">{f.label}</label>
                  <input
                    type="number"
                    placeholder={f.placeholder}
                    value={data[f.key]}
                    onChange={e => setData({ ...data, [f.key]: e.target.value })}
                    className="w-full rounded-xl bg-card border border-border p-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
              ))}
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Gender</label>
                <div className="flex gap-3">
                  {["Male", "Female", "Other"].map(g => (
                    <button
                      key={g}
                      onClick={() => setData({ ...data, gender: g.toLowerCase() })}
                      className={`flex-1 p-3 rounded-xl border text-sm font-medium transition-all ${data.gender === g.toLowerCase() ? "border-primary bg-primary/10 text-primary" : "border-border bg-card text-muted-foreground hover:border-muted-foreground/30"}`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <Zap className="h-10 w-10 text-secondary mb-4" />
            <h2 className="font-display text-2xl font-bold text-foreground">Experience Level</h2>
            <p className="text-muted-foreground mt-1 mb-6">We'll adjust intensity accordingly</p>
            <div className="space-y-3">
              {levels.map(l => (
                <button
                  key={l.id}
                  onClick={() => setData({ ...data, level: l.id })}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${data.level === l.id ? "border-secondary glow-success bg-secondary/10" : "border-border bg-card hover:border-muted-foreground/30"}`}
                >
                  <span className="font-medium text-foreground block">{l.label}</span>
                  <span className="text-sm text-muted-foreground">{l.desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 gradient-dark">
        <Button
          onClick={next}
          disabled={!canProceed}
          className="w-full h-14 rounded-xl gradient-accent text-primary-foreground font-semibold text-lg disabled:opacity-40 hover:opacity-90 transition-opacity"
        >
          {step < 2 ? "Continue" : "Get Started"}
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Onboarding;
