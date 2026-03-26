import { useState, useCallback } from "react";
import SplashScreen from "@/components/SplashScreen";
import Onboarding, { type OnboardingData } from "@/components/Onboarding";
import BottomNav, { type TabId } from "@/components/BottomNav";
import HomeDashboard from "@/components/HomeDashboard";
import WorkoutPage from "@/components/WorkoutPage";
import TrackerPage from "@/components/TrackerPage";
import NutritionPage from "@/components/NutritionPage";
import ProfilePage from "@/components/ProfilePage";

const Index = () => {
  const [phase, setPhase] = useState<"splash" | "onboarding" | "app">("splash");
  const [activeTab, setActiveTab] = useState<TabId>("home");

  const handleSplashComplete = useCallback(() => setPhase("onboarding"), []);
  const handleOnboardingComplete = useCallback((_data: OnboardingData) => {
    setPhase("app");
  }, []);

  if (phase === "splash") return <SplashScreen onComplete={handleSplashComplete} />;
  if (phase === "onboarding") return <Onboarding onComplete={handleOnboardingComplete} />;

  return (
    <div className="min-h-screen bg-background">
      {activeTab === "home" && <HomeDashboard />}
      {activeTab === "workout" && <WorkoutPage />}
      {activeTab === "tracker" && <TrackerPage />}
      {activeTab === "nutrition" && <NutritionPage />}
      {activeTab === "profile" && <ProfilePage />}
      <BottomNav active={activeTab} onChange={setActiveTab} />
    </div>
  );
};

export default Index;
