import { Settings, ChevronRight, Trophy, Target, Calendar, Flame, Bell, Moon, Ruler as RulerIcon, Shield } from "lucide-react";
import logo from "@/assets/logo.png";

const achievements = [
  { label: "7-Day Streak", icon: "🔥", unlocked: true },
  { label: "First 10K Steps", icon: "🏃", unlocked: true },
  { label: "100 Workouts", icon: "💪", unlocked: false },
  { label: "Weight Goal", icon: "🎯", unlocked: false },
];

const settingsItems = [
  { label: "Notifications", icon: Bell },
  { label: "Units & Preferences", icon: RulerIcon },
  { label: "Privacy", icon: Shield },
];

const ProfilePage = () => (
  <div className="pb-24 px-4 pt-6 max-w-lg mx-auto">
    {/* Header */}
    <div className="flex items-center justify-between mb-6">
      <h1 className="font-display text-2xl font-bold text-foreground">Profile</h1>
      <button className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
        <Settings className="h-5 w-5 text-muted-foreground" />
      </button>
    </div>

    {/* User Card */}
    <div className="glass-card p-5 flex items-center gap-4">
      <div className="h-16 w-16 rounded-full gradient-accent flex items-center justify-center">
        <img src={logo} alt="Avatar" className="h-10 w-10" loading="lazy" width={40} height={40} />
      </div>
      <div>
        <h2 className="font-display text-lg font-bold text-foreground">Warrior</h2>
        <p className="text-sm text-muted-foreground">Build Muscle • Intermediate</p>
        <p className="text-xs text-primary mt-1">Member since March 2026</p>
      </div>
    </div>

    {/* Stats Row */}
    <div className="grid grid-cols-3 gap-3 mt-4">
      {[
        { label: "Workouts", value: "48", icon: Target },
        { label: "Streak", value: "7 days", icon: Flame },
        { label: "Active", value: "3 months", icon: Calendar },
      ].map(s => {
        const Icon = s.icon;
        return (
          <div key={s.label} className="glass-card p-3 text-center">
            <Icon className="h-4 w-4 text-primary mx-auto mb-1" />
            <p className="font-display font-bold text-foreground text-sm">{s.value}</p>
            <p className="text-[10px] text-muted-foreground">{s.label}</p>
          </div>
        );
      })}
    </div>

    {/* Achievements */}
    <h2 className="font-display font-semibold text-foreground mt-6 mb-3 flex items-center gap-2">
      <Trophy className="h-5 w-5 text-secondary" />
      Achievements
    </h2>
    <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-none">
      {achievements.map(a => (
        <div key={a.label} className={`glass-card min-w-[110px] p-4 flex flex-col items-center gap-2 flex-shrink-0 ${!a.unlocked ? "opacity-40" : ""}`}>
          <span className="text-2xl">{a.icon}</span>
          <span className="text-[10px] text-center text-foreground font-medium">{a.label}</span>
        </div>
      ))}
    </div>

    {/* Settings */}
    <h2 className="font-display font-semibold text-foreground mt-6 mb-3">Settings</h2>
    <div className="glass-card divide-y divide-border/50">
      {settingsItems.map(s => {
        const Icon = s.icon;
        return (
          <button key={s.label} className="w-full flex items-center justify-between p-4 hover:bg-muted/30 transition-colors">
            <div className="flex items-center gap-3">
              <Icon className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-foreground">{s.label}</span>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </button>
        );
      })}
    </div>
  </div>
);

export default ProfilePage;
