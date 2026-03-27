import { CheckCircle2, MapPin, Clock, Phone, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BookingConfirmationProps {
  service: string;
  time: string;
  price: string;
  onBack: () => void;
}

const BookingConfirmation = ({ service, time, price, onBack }: BookingConfirmationProps) => (
  <div className="fixed inset-0 flex flex-col items-center bg-background px-6 pt-16 pb-8">
    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary/10 animate-fade-up">
      <CheckCircle2 className="h-10 w-10 text-secondary" />
    </div>

    <h1 className="mt-6 font-display text-2xl font-bold text-foreground">Booking Confirmed!</h1>
    <p className="mt-1 text-sm text-muted-foreground">Your worker is on the way</p>

    <div className="mt-8 w-full max-w-sm bg-card rounded-2xl shadow-card p-5 space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">Service</span>
        <span className="font-semibold text-foreground">{service}</span>
      </div>
      <div className="border-t border-border" />
      <div className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">Worker</span>
        <span className="font-semibold text-foreground">Ramesh K. ✓</span>
      </div>
      <div className="border-t border-border" />
      <div className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> Time</span>
        <span className="font-semibold text-foreground">{time}</span>
      </div>
      <div className="border-t border-border" />
      <div className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Address</span>
        <span className="text-sm text-foreground">Home · 123 MG Road</span>
      </div>
      <div className="border-t border-border" />
      <div className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">Total</span>
        <span className="font-display text-xl font-bold text-foreground">{price}</span>
      </div>
    </div>

    <div className="mt-6 w-full max-w-sm flex gap-3">
      <Button variant="outline" className="flex-1 h-12 rounded-xl gap-2">
        <Phone className="h-4 w-4" /> Call
      </Button>
      <Button variant="destructive" className="h-12 rounded-xl gap-2 px-6">
        <AlertTriangle className="h-4 w-4" /> SOS
      </Button>
    </div>

    <Button onClick={onBack} variant="ghost" className="mt-4 text-muted-foreground">
      Back to Home
    </Button>
  </div>
);

export default BookingConfirmation;
