import { CalendarCheck, Clock, CheckCircle2 } from "lucide-react";

const bookings = [
  { id: 1, service: "Home Cleaning", worker: "Priya S.", date: "Today, 2:00 PM", price: "₹249", status: "upcoming" as const },
  { id: 2, service: "Plumbing Fix", worker: "Ramesh K.", date: "Yesterday", price: "₹299", status: "completed" as const },
  { id: 3, service: "Electrical Repair", worker: "Arun M.", date: "Mar 22", price: "₹349", status: "completed" as const },
];

const BookingsPage = () => (
  <div className="pb-24 pt-12 px-5">
    <h1 className="font-display text-xl font-bold text-foreground mb-6">My Bookings</h1>

    <div className="space-y-3">
      {bookings.map(b => (
        <div key={b.id} className="flex items-center gap-3 p-4 rounded-xl bg-card shadow-card">
          <div className={`flex h-10 w-10 items-center justify-center rounded-full ${b.status === "upcoming" ? "bg-primary/10" : "bg-secondary/10"}`}>
            {b.status === "upcoming"
              ? <Clock className="h-5 w-5 text-primary" />
              : <CheckCircle2 className="h-5 w-5 text-secondary" />
            }
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm text-foreground">{b.service}</p>
            <p className="text-xs text-muted-foreground">{b.worker} · {b.date}</p>
          </div>
          <div className="text-right">
            <p className="font-display font-bold text-foreground text-sm">{b.price}</p>
            <span className={`text-[10px] font-medium ${b.status === "upcoming" ? "text-primary" : "text-secondary"}`}>
              {b.status === "upcoming" ? "Upcoming" : "Done"}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default BookingsPage;
