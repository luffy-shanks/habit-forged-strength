import { Plus, Coffee, Sun, Moon, Utensils } from "lucide-react";

const meals = [
  { label: "Breakfast", icon: Coffee, time: "8:00 AM", items: ["Oatmeal with berries", "Black coffee"], calories: 320 },
  { label: "Lunch", icon: Sun, time: "1:00 PM", items: ["Grilled chicken salad", "Brown rice"], calories: 520 },
  { label: "Dinner", icon: Moon, time: "7:00 PM", items: [], calories: 0 },
  { label: "Snacks", icon: Utensils, time: "Throughout", items: ["Protein bar"], calories: 180 },
];

const NutritionPage = () => {
  const consumed = 1020;
  const target = 2200;
  const pct = Math.round((consumed / target) * 100);

  return (
    <div className="pb-24 px-4 pt-6 max-w-lg mx-auto">
      <h1 className="font-display text-2xl font-bold text-foreground mb-1">Nutrition</h1>
      <p className="text-muted-foreground text-sm mb-6">Track what you eat</p>

      {/* Calorie Overview */}
      <div className="glass-card p-5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-sm text-muted-foreground">Calories consumed</p>
            <p className="font-display text-3xl font-bold text-foreground">{consumed.toLocaleString()}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Target</p>
            <p className="font-display text-lg font-semibold text-primary">{target.toLocaleString()}</p>
          </div>
        </div>
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <div className="h-full gradient-accent rounded-full transition-all duration-700" style={{ width: `${pct}%` }} />
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-xs text-muted-foreground">{pct}% of daily goal</span>
          <span className="text-xs text-secondary">{target - consumed} kcal remaining</span>
        </div>
      </div>

      {/* Macros */}
      <div className="grid grid-cols-3 gap-3 mt-4">
        {[
          { label: "Protein", value: "82g", target: "140g", pct: 58, color: "gradient-accent" },
          { label: "Carbs", value: "120g", target: "250g", pct: 48, color: "gradient-success" },
          { label: "Fat", value: "35g", target: "70g", pct: 50, color: "bg-destructive" },
        ].map(m => (
          <div key={m.label} className="glass-card p-3 text-center">
            <p className="text-xs text-muted-foreground">{m.label}</p>
            <p className="font-display font-bold text-foreground mt-1">{m.value}</p>
            <div className="h-1.5 bg-muted rounded-full mt-2 overflow-hidden">
              <div className={`h-full rounded-full ${m.color}`} style={{ width: `${m.pct}%` }} />
            </div>
            <p className="text-[10px] text-muted-foreground mt-1">/ {m.target}</p>
          </div>
        ))}
      </div>

      {/* Meal Cards */}
      <h2 className="font-display font-semibold text-foreground mt-6 mb-3">Today's Meals</h2>
      <div className="space-y-3">
        {meals.map(meal => {
          const Icon = meal.icon;
          return (
            <div key={meal.label} className="glass-card p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-muted p-2">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{meal.label}</p>
                    <p className="text-[10px] text-muted-foreground">{meal.time}</p>
                  </div>
                </div>
                <span className="font-display font-semibold text-foreground text-sm">
                  {meal.calories > 0 ? `${meal.calories} kcal` : "—"}
                </span>
              </div>
              {meal.items.length > 0 ? (
                <div className="ml-11 space-y-1">
                  {meal.items.map(item => (
                    <p key={item} className="text-xs text-muted-foreground">• {item}</p>
                  ))}
                </div>
              ) : (
                <button className="ml-11 flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors">
                  <Plus className="h-3 w-3" />
                  Add meal
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NutritionPage;
