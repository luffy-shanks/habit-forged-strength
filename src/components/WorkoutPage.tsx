import { Dumbbell, Heart, Flame, Zap, Home as HomeIcon, Clock, ChevronRight } from "lucide-react";

const categories = [
  { label: "Strength", icon: Dumbbell, count: 24 },
  { label: "Cardio", icon: Heart, count: 18 },
  { label: "HIIT", icon: Flame, count: 12 },
  { label: "Yoga", icon: Zap, count: 15 },
  { label: "Home", icon: HomeIcon, count: 20 },
];

const workouts = [
  { title: "Full Body Blast", category: "HIIT", duration: "30 min", calories: "350 kcal", difficulty: "Intermediate", color: "text-destructive" },
  { title: "Push Day", category: "Strength", duration: "45 min", calories: "280 kcal", difficulty: "Advanced", color: "text-primary" },
  { title: "Morning Yoga Flow", category: "Yoga", duration: "20 min", calories: "120 kcal", difficulty: "Beginner", color: "text-secondary" },
  { title: "Fat Burner Cardio", category: "Cardio", duration: "25 min", calories: "400 kcal", difficulty: "Intermediate", color: "text-destructive" },
  { title: "Core Crusher", category: "Strength", duration: "15 min", calories: "180 kcal", difficulty: "Advanced", color: "text-primary" },
];

const WorkoutPage = () => (
  <div className="pb-24 px-4 pt-6 max-w-lg mx-auto">
    <h1 className="font-display text-2xl font-bold text-foreground mb-1">Workouts</h1>
    <p className="text-muted-foreground text-sm mb-6">Find your perfect routine</p>

    {/* Categories */}
    <div className="flex gap-3 overflow-x-auto pb-3 -mx-4 px-4 scrollbar-none">
      {categories.map(c => {
        const Icon = c.icon;
        return (
          <button key={c.label} className="glass-card min-w-[100px] p-4 flex flex-col items-center gap-2 hover:border-primary/30 transition-colors flex-shrink-0">
            <Icon className="h-6 w-6 text-primary" />
            <span className="text-xs font-medium text-foreground">{c.label}</span>
            <span className="text-[10px] text-muted-foreground">{c.count} workouts</span>
          </button>
        );
      })}
    </div>

    {/* Workout List */}
    <h2 className="font-display font-semibold text-foreground mt-6 mb-3">Popular Workouts</h2>
    <div className="space-y-3">
      {workouts.map(w => (
        <button key={w.title} className="glass-card w-full p-4 flex items-center gap-4 text-left hover:border-primary/30 transition-colors group">
          <div className="rounded-lg gradient-accent p-3">
            <Dumbbell className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-foreground truncate">{w.title}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" />{w.duration}</span>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground">{w.calories}</span>
            </div>
            <span className={`text-[10px] font-medium ${w.color}`}>{w.difficulty}</span>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </button>
      ))}
    </div>
  </div>
);

export default WorkoutPage;
