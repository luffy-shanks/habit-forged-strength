import { useState, useEffect } from "react";
import { MapPin, Search, Star, BadgeCheck, Clock, ChevronRight, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import ServiceDetailPage from "./ServiceDetailPage";

const services = [
  { id: "cleaning", emoji: "🧹", label: "Cleaning" },
  { id: "plumbing", emoji: "🔧", label: "Plumbing" },
  { id: "electric", emoji: "⚡", label: "Electrical" },
  { id: "utensils", emoji: "🍳", label: "Utensils" },
  { id: "painting", emoji: "🎨", label: "Painting" },
  { id: "quickhelp", emoji: "🚀", label: "Quick Help" },
];

const workers = [
  { id: 1, name: "Ramesh K.", service: "Plumbing", rating: 4.8, reviews: 124, distance: "0.8 km", available: true, price: "₹299" },
  { id: 2, name: "Priya S.", service: "Cleaning", rating: 4.9, reviews: 89, distance: "1.2 km", available: true, price: "₹249" },
  { id: 3, name: "Arun M.", service: "Electrical", rating: 4.7, reviews: 67, distance: "2.1 km", available: false, price: "₹349" },
  { id: 4, name: "Meena R.", service: "Cleaning", rating: 4.6, reviews: 45, distance: "0.5 km", available: true, price: "₹199" },
];

const HomeDashboard = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [location, setLocation] = useState<string>("Tap to detect location");
  const [locating, setLocating] = useState(false);

  const detectLocation = () => {
    if (!navigator.geolocation) {
      setLocation("Location unavailable");
      return;
    }
    setLocating(true);
    setLocation("Detecting location...");
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&format=json`
          );
          const data = await res.json();
          const city = data.address?.city || data.address?.town || data.address?.village || "Your Area";
          const state = data.address?.state || "";
          setLocation(`${city}${state ? ", " + state : ""}`);
        } catch {
          setLocation("Location detected");
        }
        setLocating(false);
      },
      (err) => {
        console.error("Geolocation error:", err.message);
        setLocation("Bengaluru, Karnataka");
        setLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  useEffect(() => {
    detectLocation();
  }, []);

  if (selectedService) {
    return <ServiceDetailPage serviceId={selectedService} onBack={() => setSelectedService(null)} />;
  }

  return (
    <div className="pb-24">
      <div className="bg-primary px-5 pt-12 pb-6 rounded-b-3xl">
        <button className="flex items-center gap-2 text-primary-foreground/80 text-sm mb-4">
          {locating ? <Loader2 className="h-4 w-4 animate-spin" /> : <MapPin className="h-4 w-4" />}
          <span>{location}</span>
          <ChevronRight className="h-3 w-3" />
        </button>
        <h1 className="font-display text-xl font-bold text-primary-foreground">
          What do you need help with?
        </h1>
        <div className="relative mt-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search for a service..." className="pl-10 h-11 rounded-xl bg-card border-0 text-foreground" />
        </div>
      </div>

      <div className="px-5 mt-6">
        <h2 className="font-display font-bold text-foreground mb-3">Services</h2>
        <div className="grid grid-cols-3 gap-3">
          {services.map(s => (
            <button
              key={s.id}
              onClick={() => setSelectedService(s.id)}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all"
            >
              <span className="text-2xl">{s.emoji}</span>
              <span className="text-xs font-medium text-foreground">{s.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="px-5 mt-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display font-bold text-foreground">Nearby Workers</h2>
          <button className="text-xs text-primary font-medium flex items-center gap-0.5">
            See all <ChevronRight className="h-3 w-3" />
          </button>
        </div>
        <div className="space-y-3">
          {workers.map(w => (
            <button
              key={w.id}
              onClick={() => setSelectedService(w.service.toLowerCase())}
              className="w-full flex items-center gap-3 p-3 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all text-left"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted font-display font-bold text-primary text-lg">
                {w.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-sm text-foreground">{w.name}</span>
                  <BadgeCheck className="h-3.5 w-3.5 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground">{w.service} · {w.distance}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  <span className="text-xs font-medium text-foreground">{w.rating}</span>
                  <span className="text-xs text-muted-foreground">({w.reviews})</span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-display font-bold text-foreground">{w.price}</p>
                {w.available ? (
                  <span className="flex items-center gap-1 text-[10px] font-medium text-secondary">
                    <Clock className="h-3 w-3" /> 15 min
                  </span>
                ) : (
                  <span className="text-[10px] text-muted-foreground">Busy</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
