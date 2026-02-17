import { Bus } from "lucide-react";

const BusIcon = ({ className = "" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <div className="w-16 h-10 bg-bus-yellow rounded-lg relative shadow-lg border-2 border-bus-dark">
      {/* Windows */}
      <div className="absolute top-1.5 left-1.5 flex gap-1">
        <div className="w-3 h-3 bg-primary/20 rounded-sm border border-bus-dark/30" />
        <div className="w-3 h-3 bg-primary/20 rounded-sm border border-bus-dark/30" />
        <div className="w-3 h-3 bg-primary/20 rounded-sm border border-bus-dark/30" />
      </div>
      {/* Wheels */}
      <div className="absolute -bottom-1.5 left-2 w-3 h-3 bg-bus-dark rounded-full border border-muted" />
      <div className="absolute -bottom-1.5 right-2 w-3 h-3 bg-bus-dark rounded-full border border-muted" />
      {/* Front light */}
      <div className="absolute top-2.5 right-0.5 w-1.5 h-2 bg-bus-orange rounded-sm" />
    </div>
  </div>
);

export default BusIcon;
