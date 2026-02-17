import BusStopMarker from "./BusStopMarker";
import BusIcon from "./BusIcon";

interface RouteProgressProps {
  currentStop: number;
  totalStops: number;
  stops: string[];
}

const RouteProgress = ({ currentStop, totalStops, stops }: RouteProgressProps) => {
  const progress = ((currentStop) / (totalStops - 1)) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-1 relative">
          {/* Progress line */}
          <div className="absolute top-4 left-4 right-4 h-1 bg-muted rounded-full">
            <div
              className="h-full bg-bus-yellow rounded-full transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Bus position */}
          <div
            className="absolute top-0 transition-all duration-700 ease-out z-10"
            style={{ left: `calc(${progress}% - 8px)` }}
          >
            <div className="animate-bus-bounce">
              <div className="text-lg">🚌</div>
            </div>
          </div>

          {/* Stop markers */}
          {stops.map((label, i) => (
            <BusStopMarker
              key={i}
              stopNumber={i}
              isActive={i === currentStop}
              isCompleted={i < currentStop}
              label={label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RouteProgress;
