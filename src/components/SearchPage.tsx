import { Search, Star, BadgeCheck, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const allServices = [
  { id: 1, name: "Home Deep Cleaning", category: "Cleaning", price: "₹249", rating: 4.8, time: "2-3 hrs" },
  { id: 2, name: "Bathroom Cleaning", category: "Cleaning", price: "₹149", rating: 4.7, time: "1 hr" },
  { id: 3, name: "Pipe Leak Fix", category: "Plumbing", price: "₹299", rating: 4.9, time: "1 hr" },
  { id: 4, name: "Fan Installation", category: "Electrical", price: "₹199", rating: 4.6, time: "30 min" },
  { id: 5, name: "Full House Painting", category: "Painting", price: "₹2999", rating: 4.8, time: "2 days" },
  { id: 6, name: "AC Service", category: "Electrical", price: "₹499", rating: 4.5, time: "1-2 hrs" },
];

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const filtered = allServices.filter(s =>
    s.name.toLowerCase().includes(query.toLowerCase()) ||
    s.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="pb-24 pt-12 px-5">
      <h1 className="font-display text-xl font-bold text-foreground mb-4">Search Services</h1>
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search cleaning, plumbing, etc."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="pl-10 h-11 rounded-xl"
        />
      </div>

      <div className="space-y-3">
        {filtered.map(s => (
          <div key={s.id} className="flex items-center gap-3 p-3 rounded-xl bg-card shadow-card">
            <div className="flex-1">
              <p className="font-semibold text-sm text-foreground">{s.name}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-2 mt-0.5">
                {s.category}
                <span className="flex items-center gap-0.5"><Star className="h-3 w-3 fill-accent text-accent" />{s.rating}</span>
                <span className="flex items-center gap-0.5"><Clock className="h-3 w-3" />{s.time}</span>
              </p>
            </div>
            <span className="font-display font-bold text-foreground">{s.price}</span>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground text-sm mt-12">No services found for "{query}"</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
