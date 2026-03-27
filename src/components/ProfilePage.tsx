import { MapPin, CreditCard, HelpCircle, Bell, Moon, ChevronRight, LogOut } from "lucide-react";

const menuItems = [
  { icon: MapPin, label: "Saved Addresses" },
  { icon: CreditCard, label: "Payment History" },
  { icon: Bell, label: "Notifications" },
  { icon: HelpCircle, label: "Help & Support" },
  { icon: Moon, label: "Dark Mode" },
];

const ProfilePage = () => (
  <div className="pb-24 pt-12 px-5">
    <div className="flex items-center gap-4 mb-8">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-2xl font-bold">
        G
      </div>
      <div>
        <h1 className="font-display text-lg font-bold text-foreground">Gowtham</h1>
        <p className="text-sm text-muted-foreground">+91 98765 43210</p>
      </div>
    </div>

    <div className="space-y-1">
      {menuItems.map(item => {
        const Icon = item.icon;
        return (
          <button key={item.label} className="w-full flex items-center gap-3 px-3 py-3.5 rounded-xl hover:bg-muted transition-colors">
            <Icon className="h-5 w-5 text-muted-foreground" />
            <span className="flex-1 text-left text-sm font-medium text-foreground">{item.label}</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </button>
        );
      })}
    </div>

    <button className="w-full flex items-center gap-3 px-3 py-3.5 rounded-xl mt-6 text-destructive hover:bg-destructive/5 transition-colors">
      <LogOut className="h-5 w-5" />
      <span className="text-sm font-medium">Log Out</span>
    </button>
  </div>
);

export default ProfilePage;
