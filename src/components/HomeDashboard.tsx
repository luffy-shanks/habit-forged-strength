import { Footprints, Flame, Timer, Droplets, Play, Plus, TrendingUp, GlassWater } from "lucide-react";

const stats = [
  { label: "Steps", value: "6,234", target: "10,000", icon: Footprints, color: "text-primary" },
  { label: "Calories", value: "420", target: "600 kcal", icon: Flame, color: "text-destructive" },
  { label: "Workout", value: "32", target: "45 min", icon: Timer, color: "text-secondary" },
  { label: "Water", value: "1.5", target: "3.0 L", icon: Droplets, color: "text-primary" },
];

const quickActions = [
  { label: "Start Workout", icon: Play, accent: true },
  { label: "Log Meal", icon: Plus, accent: false },
  { label: "Add Water", icon: GlassWater, accent: false },
  { label: "View Progress", icon: TrendingUp, accent: false },
];

const HomeDashboard = () => {
  const progress = 68;

  return (
    <div className="pb-24 px-4 pt-6 max-w-lg mx-auto">
      {/* Greeting */}
      <div className="mb-6">
        <p className="text-muted-foreground text-sm">
          {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
        </p>
        <h1 className="font-display text-2xl font-bold text-foreground">Hey Warrior 👋</h1>
      </div>

      {/* Stats Cards */}
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-none">
        {stats.map(s => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="glass-card min-w-[140px] p-4 flex-shrink-0">
              <Icon className={`h-5 w-5 ${s.color} mb-2`} />
              <p className="font-display text-xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.target}</p>
            </div>
          );
        })}
      </div>

      {/* Progress Ring */}
      <div className="glass-card p-6 mt-4 flex items-center gap-6">
        <div className="relative h-24 w-24 flex-shrink-0">
          <svg className="h-24 w-24 -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
            <circle
              cx="50" cy="50" r="45" fill="none"
              stroke="url(#progressGrad)" strokeWidth="8" strokeLinecap="round"
              strokeDasharray={`${progress * 2.83} 283`}
              style={{ transition: "stroke-dasharray 1s ease" }}
            />
            <defs>
              <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(217 91% 60%)" />
                <stop offset="100%" stopColor="hsl(142 71% 45%)" />
              </linearGradient>
            </defs>
          </svg>
          <span className="absolute inset-0 flex items-center justify-center font-display text-lg font-bold text-foreground">
            {progress}%
          </span>
        </div>
        <div>
          <h3 className="font-display font-semibold text-foreground">Daily Goal</h3>
          <p className="text-sm text-muted-foreground mt-1">You're doing great! Keep pushing to hit your targets today.</p>
        </div>
      </div>

      {/* Today's Workout */}
      <div className="glass-card p-5 mt-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display font-semibold text-foreground">Today's Workout</h3>
          <span className="text-xs text-secondary font-medium bg-secondary/10 px-2 py-1 rounded-full">Recommended</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4">Upper Body Strength • 35 min • 280 kcal</p>
        <button className="w-full h-12 rounded-xl gradient-accent text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
          <Play className="h-5 w-5" />
          Start Now
        </button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3 mt-4">
        {quickActions.map(a => {
          const Icon = a.icon;
          return (
            <button
              key={a.label}
              className={`glass-card p-4 flex items-center gap-3 transition-all hover:border-primary/30 ${a.accent ? "border-primary/20" : ""}`}
            >
              <div className={`rounded-lg p-2 ${a.accent ? "gradient-accent" : "bg-muted"}`}>
                <Icon className={`h-4 w-4 ${a.accent ? "text-primary-foreground" : "text-muted-foreground"}`} />
              </div>
              <span className="text-sm font-medium text-foreground">{a.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HomeDashboard;
