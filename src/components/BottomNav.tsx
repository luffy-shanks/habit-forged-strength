import { Home, Dumbbell, BarChart3, Apple, User } from "lucide-react";

const tabs = [
  { id: "home", label: "Home", icon: Home },
  { id: "workout", label: "Workout", icon: Dumbbell },
  { id: "tracker", label: "Tracker", icon: BarChart3 },
  { id: "nutrition", label: "Nutrition", icon: Apple },
  { id: "profile", label: "Profile", icon: User },
] as const;

export type TabId = typeof tabs[number]["id"];

interface BottomNavProps {
  active: TabId;
  onChange: (tab: TabId) => void;
}

const BottomNav = ({ active, onChange }: BottomNavProps) => (
  <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-card/90 backdrop-blur-xl">
    <div className="mx-auto flex max-w-lg">
      {tabs.map(tab => {
        const Icon = tab.icon;
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`flex flex-1 flex-col items-center gap-1 py-3 transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
          >
            <Icon className={`h-5 w-5 ${isActive ? "drop-shadow-[0_0_8px_hsl(217,91%,60%)]" : ""}`} />
            <span className="text-[10px] font-medium">{tab.label}</span>
          </button>
        );
      })}
    </div>
  </nav>
);

export default BottomNav;
