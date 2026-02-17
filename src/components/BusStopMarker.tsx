import { MapPin } from "lucide-react";

interface BusStopMarkerProps {
  stopNumber: number;
  isActive: boolean;
  isCompleted: boolean;
  label: string;
}

const BusStopMarker = ({ stopNumber, isActive, isCompleted, label }: BusStopMarkerProps) => (
  <div className="flex flex-col items-center gap-1">
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
        isActive
          ? "bg-bus-yellow text-bus-dark scale-125 shadow-lg ring-4 ring-bus-yellow/30"
          : isCompleted
          ? "bg-bus-green text-primary-foreground"
          : "bg-muted text-muted-foreground"
      }`}
    >
      {isCompleted ? "✓" : stopNumber}
    </div>
    <span
      className={`text-[10px] font-medium whitespace-nowrap hidden md:block ${
        isActive ? "text-bus-yellow font-bold" : "text-muted-foreground"
      }`}
    >
      {label}
    </span>
  </div>
);

export default BusStopMarker;
