import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1600);
    const complete = setTimeout(onComplete, 2000);
    return () => { clearTimeout(timer); clearTimeout(complete); };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center gradient-dark transition-opacity duration-400 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
      <div className="animate-pulse-glow rounded-full p-6">
        <img src={logo} alt="FitWarrior" width={96} height={96} className="drop-shadow-2xl" />
      </div>
      <h1 className="mt-6 font-display text-4xl font-bold text-foreground">
        Fit<span className="text-gradient">Warrior</span>
      </h1>
      <p className="mt-2 text-sm text-muted-foreground tracking-widest uppercase">
        Train Hard. Track Smart.
      </p>
    </div>
  );
};

export default SplashScreen;
