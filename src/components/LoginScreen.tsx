import { useState } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";

interface LoginScreenProps {
  onComplete: (role: "customer" | "worker") => void;
}

const LoginScreen = ({ onComplete }: LoginScreenProps) => {
  const [phase, setPhase] = useState<"phone" | "otp" | "role">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  return (
    <div className="fixed inset-0 flex flex-col items-center bg-background px-6 pt-16 pb-8">
      <img src={logo} alt="Meido" width={56} height={56} className="rounded-xl" />
      <h1 className="mt-4 font-display text-2xl font-bold text-foreground">Welcome to Meido</h1>
      <p className="mt-1 text-sm text-muted-foreground">Quick help, anytime nearby</p>

      <div className="mt-10 w-full max-w-sm">
        {phase === "phone" && (
          <div className="space-y-4 animate-fade-up">
            <label className="text-sm font-medium text-foreground">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="tel"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="pl-10 h-12 rounded-xl text-base"
              />
            </div>
            <Button onClick={() => setPhase("otp")} className="w-full h-12 rounded-xl text-base font-semibold gap-2" disabled={phone.length < 10}>
              Send OTP <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {phase === "otp" && (
          <div className="space-y-4 animate-fade-up">
            <label className="text-sm font-medium text-foreground">Enter OTP</label>
            <p className="text-xs text-muted-foreground">Sent to {phone}</p>
            <Input
              type="text"
              placeholder="••••••"
              maxLength={6}
              value={otp}
              onChange={e => setOtp(e.target.value)}
              className="h-12 rounded-xl text-center text-2xl tracking-[0.5em] font-mono"
            />
            <Button onClick={() => setPhase("role")} className="w-full h-12 rounded-xl text-base font-semibold" disabled={otp.length < 4}>
              Verify
            </Button>
            <button className="w-full text-sm text-primary font-medium">Resend OTP</button>
          </div>
        )}

        {phase === "role" && (
          <div className="space-y-4 animate-fade-up">
            <h2 className="text-lg font-display font-bold text-foreground text-center">How will you use Meido?</h2>
            <button
              onClick={() => onComplete("customer")}
              className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-border hover:border-primary bg-card shadow-card hover:shadow-card-hover transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">🏠</div>
              <div className="text-left">
                <p className="font-semibold text-foreground">I need help</p>
                <p className="text-xs text-muted-foreground">Find workers for tasks near you</p>
              </div>
            </button>
            <button
              onClick={() => onComplete("worker")}
              className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-border hover:border-secondary bg-card shadow-card hover:shadow-card-hover transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-2xl">🔧</div>
              <div className="text-left">
                <p className="font-semibold text-foreground">I want to work</p>
                <p className="text-xs text-muted-foreground">Accept jobs and earn money</p>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
