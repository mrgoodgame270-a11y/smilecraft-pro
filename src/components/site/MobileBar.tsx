import { Phone, MessageCircle, Calendar } from "lucide-react";

export function MobileBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-border shadow-elevated grid grid-cols-3 gap-2 p-2">
      <a href="tel:+15551234567" className="flex flex-col items-center gap-0.5 py-2 text-primary">
        <Phone className="w-4 h-4" /><span className="text-[11px] font-semibold">Call</span>
      </a>
      <a href="https://wa.me/15551234567" className="flex flex-col items-center gap-0.5 py-2 text-success">
        <MessageCircle className="w-4 h-4" /><span className="text-[11px] font-semibold">WhatsApp</span>
      </a>
      <a href="#booking" className="flex flex-col items-center gap-0.5 py-2 gradient-cta text-white rounded-xl">
        <Calendar className="w-4 h-4" /><span className="text-[11px] font-semibold">Book</span>
      </a>
    </div>
  );
}
