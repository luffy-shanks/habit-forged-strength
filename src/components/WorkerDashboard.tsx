import { useState } from "react";
import { DollarSign, Briefcase, Clock, ToggleLeft, ToggleRight, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const incomingJobs = [
  { id: 1, service: "Home Cleaning", customer: "Anjali P.", address: "MG Road, 2.3 km", price: "₹249", time: "Now" },
  { id: 2, service: "Pipe Leak Fix", customer: "Kiran S.", address: "Jayanagar, 1.1 km", price: "₹299", time: "2:00 PM" },
];

const WorkerDashboard = () => {
  const [online, setOnline] = useState(true);

  return (
    <div className="pb-24 pt-12 px-5">
      {/* Online Toggle */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-xl font-bold text-foreground">Worker Dashboard</h1>
        <button onClick={() => setOnline(!online)} className="flex items-center gap-2">
          {online
            ? <ToggleRight className="h-8 w-8 text-secondary" />
            : <ToggleLeft className="h-8 w-8 text-muted-foreground" />
          }
          <span className={`text-sm font-medium ${online ? "text-secondary" : "text-muted-foreground"}`}>
            {online ? "Online" : "Offline"}
          </span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { icon: DollarSign, label: "Earnings", value: "₹1,240", color: "text-secondary" },
          { icon: Briefcase, label: "Jobs Today", value: "3", color: "text-primary" },
          { icon: Clock, label: "Hours", value: "4.5h", color: "text-accent" },
        ].map(stat => (
          <div key={stat.label} className="flex flex-col items-center p-3 rounded-xl bg-card shadow-card">
            <stat.icon className={`h-5 w-5 ${stat.color} mb-1`} />
            <span className="font-display font-bold text-foreground">{stat.value}</span>
            <span className="text-[10px] text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Incoming Jobs */}
      <h2 className="font-display font-bold text-foreground mb-3">Incoming Requests</h2>
      {online ? (
        <div className="space-y-3">
          {incomingJobs.map(job => (
            <div key={job.id} className="p-4 rounded-xl bg-card shadow-card space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-sm text-foreground">{job.service}</p>
                  <p className="text-xs text-muted-foreground">{job.customer} · {job.address}</p>
                </div>
                <div className="text-right">
                  <p className="font-display font-bold text-foreground">{job.price}</p>
                  <p className="text-xs text-muted-foreground">{job.time}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1 h-10 rounded-lg gap-1 bg-secondary hover:bg-secondary/90">
                  <CheckCircle2 className="h-4 w-4" /> Accept
                </Button>
                <Button variant="outline" className="flex-1 h-10 rounded-lg gap-1">
                  <XCircle className="h-4 w-4" /> Reject
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-muted-foreground text-sm">
          You're offline. Go online to receive requests.
        </div>
      )}
    </div>
  );
};

export default WorkerDashboard;
