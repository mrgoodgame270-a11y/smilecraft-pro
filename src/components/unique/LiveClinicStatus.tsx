import { useEffect, useState } from "react";

function getStatus() {
  const now = new Date();
  const day = now.getDay(); // 0 Sun, 6 Sat
  const hour = now.getHours();
  const min = now.getMinutes();

  // Mon to Fri 9 to 21, Sat 9 to 18, Sun closed
  let openHour = 9;
  let closeHour = 21;
  if (day === 0) return { open: false, label: "Closed today, opens Monday 9 AM" };
  if (day === 6) closeHour = 18;

  if (hour < openHour) return { open: false, label: `Closed, opens at ${openHour} AM` };
  if (hour >= closeHour) return { open: false, label: "Closed, opens tomorrow 9 AM" };

  // open. Next slot rough calc
  const nextSlotMin = 30 - (min % 30);
  return { open: true, label: `Open now, next slot in ${nextSlotMin} min` };
}

export function LiveClinicStatus() {
  const [status, setStatus] = useState({ open: true, label: "Open now" });
  useEffect(() => {
    setStatus(getStatus());
    const t = setInterval(() => setStatus(getStatus()), 60_000);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="flex items-center gap-2 text-[12px]">
      <span className={`w-2 h-2 rounded-full ${status.open ? "bg-success animate-pulse-dot" : "bg-coral"}`} />
      <span suppressHydrationWarning>{status.label}</span>
    </span>
  );
}
