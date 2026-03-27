import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFadeOut(true), 1600);
    const t2 = setTimeout(onComplete, 2000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary transition-opacity duration-400 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
      <img src={logo} alt="Meido" width={80} height={80} className="rounded-2xl shadow-lg" />
      <h1 className="mt-5 font-display text-3xl font-bold text-primary-foreground">
        Meido
      </h1>
      <p className="mt-2 text-sm text-primary-foreground/70 tracking-wide">
        Quick help, anytime nearby
      </p>
      <div className="mt-8 flex gap-1.5">
        {[0, 1, 2].map(i => (
          <div key={i} className="h-2 w-2 rounded-full bg-primary-foreground/60" style={{ animation: `pulse-dot 1s ease-in-out ${i * 0.2}s infinite` }} />
        ))}
      </div>
    </div>
  );
};

export default SplashScreen;
