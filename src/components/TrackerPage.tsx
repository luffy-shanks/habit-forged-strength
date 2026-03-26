import { useState } from "react";
import { TrendingUp, TrendingDown, Scale, Footprints, Flame } from "lucide-react";

const weeklySteps = [4200, 6800, 5500, 8200, 7100, 6234, 0];
const weeklyCalories = [380, 520, 440, 610, 490, 420, 0];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const maxSteps = Math.max(...weeklySteps);

const weightHistory = [
  { date: "Mar 1", weight: 74.2 },
  { date: "Mar 8", weight: 73.8 },
  { date: "Mar 15", weight: 73.1 },
  { date: "Mar 22", weight: 72.5 },
  { date: "Mar 26", weight: 72.0 },
];

const TrackerPage = () => {
  const [tab, setTab] = useState<"steps" | "calories">("steps");
  const data = tab === "steps" ? weeklySteps : weeklyCalories;
  const maxVal = Math.max(...data);

  return (
    <div className="pb-24 px-4 pt-6 max-w-lg mx-auto">
      <h1 className="font-display text-2xl font-bold text-foreground mb-1">Tracker</h1>
      <p className="text-muted-foreground text-sm mb-6">Monitor your progress</p>

      {/* Toggle */}
      <div className="flex gap-2 mb-4">
        {(["steps", "calories"] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all ${tab === t ? "gradient-accent text-primary-foreground" : "bg-muted text-muted-foreground"}`}
          >
            {t === "steps" ? "Steps" : "Calories"}
          </button>
        ))}
      </div>

      {/* Bar Chart */}
      <div className="glass-card p-5">
        <div className="flex items-end gap-2 h-40">
          {data.map((val, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <span className="text-[10px] text-muted-foreground">{val > 0 ? val.toLocaleString() : ""}</span>
              <div className="w-full rounded-t-md relative" style={{ height: `${val > 0 ? (val / maxVal) * 100 : 4}%` }}>
                <div className={`absolute inset-0 rounded-t-md ${i === 5 ? "gradient-accent" : val > 0 ? "bg-primary/40" : "bg-muted"}`} />
              </div>
              <span className={`text-[10px] ${i === 5 ? "text-primary font-medium" : "text-muted-foreground"}`}>{days[i]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 gap-3 mt-4">
        <div className="glass-card p-4">
          <Footprints className="h-5 w-5 text-primary mb-2" />
          <p className="font-display text-xl font-bold text-foreground">38,034</p>
          <p className="text-xs text-muted-foreground">This week</p>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp className="h-3 w-3 text-secondary" />
            <span className="text-xs text-secondary">+12%</span>
          </div>
        </div>
        <div className="glass-card p-4">
          <Flame className="h-5 w-5 text-destructive mb-2" />
          <p className="font-display text-xl font-bold text-foreground">2,860</p>
          <p className="text-xs text-muted-foreground">Calories burned</p>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp className="h-3 w-3 text-secondary" />
            <span className="text-xs text-secondary">+8%</span>
          </div>
        </div>
      </div>

      {/* Weight Progress */}
      <h2 className="font-display font-semibold text-foreground mt-6 mb-3 flex items-center gap-2">
        <Scale className="h-5 w-5 text-primary" />
        Weight Progress
      </h2>
      <div className="glass-card p-4">
        {weightHistory.map((w, i) => (
          <div key={w.date} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
            <span className="text-sm text-muted-foreground">{w.date}</span>
            <div className="flex items-center gap-2">
              <span className="font-display font-semibold text-foreground">{w.weight} kg</span>
              {i > 0 && (
                <span className="flex items-center gap-0.5 text-xs text-secondary">
                  <TrendingDown className="h-3 w-3" />
                  {(weightHistory[i - 1].weight - w.weight).toFixed(1)}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackerPage;
