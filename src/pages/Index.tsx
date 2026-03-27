import { useState, useCallback } from "react";
import SplashScreen from "@/components/SplashScreen";
import Onboarding from "@/components/Onboarding";
import LoginScreen from "@/components/LoginScreen";
import BottomNav, { type TabId } from "@/components/BottomNav";
import HomeDashboard from "@/components/HomeDashboard";
import SearchPage from "@/components/SearchPage";
import BookingsPage from "@/components/BookingsPage";
import ProfilePage from "@/components/ProfilePage";
import WorkerDashboard from "@/components/WorkerDashboard";

type Phase = "splash" | "onboarding" | "login" | "app";
type Role = "customer" | "worker";

const Index = () => {
  const [phase, setPhase] = useState<Phase>("splash");
  const [role, setRole] = useState<Role>("customer");
  const [activeTab, setActiveTab] = useState<TabId>("home");

  const handleSplashComplete = useCallback(() => setPhase("onboarding"), []);
  const handleOnboardingComplete = useCallback(() => setPhase("login"), []);
  const handleLoginComplete = useCallback((r: Role) => {
    setRole(r);
    setPhase("app");
  }, []);

  if (phase === "splash") return <SplashScreen onComplete={handleSplashComplete} />;
  if (phase === "onboarding") return <Onboarding onComplete={handleOnboardingComplete} />;
  if (phase === "login") return <LoginScreen onComplete={handleLoginComplete} />;

  if (role === "worker") {
    return (
      <div className="min-h-screen bg-background">
        <WorkerDashboard />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {activeTab === "home" && <HomeDashboard />}
      {activeTab === "search" && <SearchPage />}
      {activeTab === "bookings" && <BookingsPage />}
      {activeTab === "profile" && <ProfilePage />}
      <BottomNav active={activeTab} onChange={setActiveTab} />
    </div>
  );
};

export default Index;
