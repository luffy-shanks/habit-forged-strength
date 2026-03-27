import { Home, Search, CalendarCheck, User } from "lucide-react";

const tabs = [
  { id: "home", label: "Home", icon: Home },
  { id: "search", label: "Search", icon: Search },
  { id: "bookings", label: "Bookings", icon: CalendarCheck },
  { id: "profile", label: "Profile", icon: User },
] as const;

export type TabId = typeof tabs[number]["id"];

interface BottomNavProps {
  active: TabId;
  onChange: (tab: TabId) => void;
}

const BottomNav = ({ active, onChange }: BottomNavProps) => (
  <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-card/95 backdrop-blur-sm">
    <div className="mx-auto flex max-w-lg">
      {tabs.map(tab => {
        const Icon = tab.icon;
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`flex flex-1 flex-col items-center gap-1 py-3 transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`}
          >
            <Icon className="h-5 w-5" strokeWidth={isActive ? 2.5 : 2} />
            <span className={`text-[10px] ${isActive ? "font-semibold" : "font-medium"}`}>{tab.label}</span>
          </button>
        );
      })}
    </div>
  </nav>
);

export default BottomNav;
