import { ArrowLeft, Star, Clock, BadgeCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import BookingConfirmation from "./BookingConfirmation";

interface ServiceDetailPageProps {
  serviceId: string;
  onBack: () => void;
}

const serviceInfo: Record<string, { title: string; emoji: string; desc: string; price: string; duration: string }> = {
  cleaning: { title: "Home Cleaning", emoji: "🧹", desc: "Professional deep cleaning for your home. Includes dusting, mopping, bathroom cleaning, and kitchen cleaning.", price: "₹249", duration: "2-3 hrs" },
  plumbing: { title: "Plumbing", emoji: "🔧", desc: "Fix leaks, blocked drains, tap installation, and all plumbing needs.", price: "₹299", duration: "1-2 hrs" },
  electric: { title: "Electrical Work", emoji: "⚡", desc: "Wiring, switch repair, fan installation, and electrical troubleshooting.", price: "₹349", duration: "1-2 hrs" },
  utensils: { title: "Utensil Cleaning", emoji: "🍳", desc: "Professional vessel and utensil cleaning service for events or daily needs.", price: "₹199", duration: "1-2 hrs" },
  painting: { title: "Painting", emoji: "🎨", desc: "Interior and exterior painting with quality materials and finish.", price: "₹999", duration: "4-6 hrs" },
  quickhelp: { title: "Quick Help", emoji: "🚀", desc: "Need something done ASAP? Get a helper for any small task within 15 minutes.", price: "₹149", duration: "30 min" },
};

const timeSlots = ["Now", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"];

const ServiceDetailPage = ({ serviceId, onBack }: ServiceDetailPageProps) => {
  const info = serviceInfo[serviceId] || serviceInfo.cleaning;
  const [selectedSlot, setSelectedSlot] = useState("Now");
  const [booked, setBooked] = useState(false);

  if (booked) {
    return <BookingConfirmation service={info.title} time={selectedSlot} price={info.price} onBack={onBack} />;
  }

  return (
    <div className="pb-28">
      {/* Header */}
      <div className="bg-primary px-5 pt-12 pb-8 rounded-b-3xl">
        <button onClick={onBack} className="flex items-center gap-1 text-primary-foreground/80 text-sm mb-4">
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        <div className="flex items-center gap-3">
          <span className="text-4xl">{info.emoji}</span>
          <div>
            <h1 className="font-display text-xl font-bold text-primary-foreground">{info.title}</h1>
            <div className="flex items-center gap-3 mt-1 text-primary-foreground/70 text-sm">
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {info.duration}</span>
              <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-current" /> 4.8</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 mt-6 space-y-6">
        {/* Price */}
        <div className="flex items-baseline justify-between">
          <span className="text-sm text-muted-foreground">Starting from</span>
          <span className="font-display text-3xl font-bold text-foreground">{info.price}</span>
        </div>

        {/* Description */}
        <div>
          <h3 className="font-semibold text-foreground mb-1">About this service</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{info.desc}</p>
        </div>

        {/* Time Slots */}
        <div>
          <h3 className="font-semibold text-foreground mb-2">Select time</h3>
          <div className="flex flex-wrap gap-2">
            {timeSlots.map(slot => (
              <button
                key={slot}
                onClick={() => setSelectedSlot(slot)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedSlot === slot
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Top Workers */}
        <div>
          <h3 className="font-semibold text-foreground mb-2">Top rated workers</h3>
          <div className="space-y-2">
            {[
              { name: "Ramesh K.", rating: 4.8, distance: "0.8 km" },
              { name: "Priya S.", rating: 4.9, distance: "1.2 km" },
            ].map(w => (
              <div key={w.name} className="flex items-center gap-3 p-3 rounded-xl bg-card shadow-card">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-display font-bold text-primary">
                  {w.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium text-foreground">{w.name}</span>
                    <BadgeCheck className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {w.distance}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                  <span className="text-sm font-medium">{w.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="fixed bottom-16 left-0 right-0 px-5 pb-4 pt-2 bg-gradient-to-t from-background via-background to-transparent">
        <Button onClick={() => setBooked(true)} className="w-full h-14 rounded-xl text-base font-bold shadow-lg">
          Book Now — {info.price}
        </Button>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
