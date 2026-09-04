import { MessageCircle } from "lucide-react";

export default function Whatsapp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      {/* 1. Subtle, Professional Pulse Ring (Green, matching the brand) */}
      <span className="absolute inline-flex h-12 w-32 animate-ping rounded-full bg-emerald-400/20 opacity-75 duration-1000" />

      {/* 2. Floating Action Anchor Link */}
      <a
        href="https://wa.me/254714058073"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-emerald-500 hover:shadow-emerald-600/20 active:scale-[0.95]"
      >
        {/* Subtle Micro-Rotation Interaction on Icon Hover */}
        <MessageCircle size={18} className="transition-transform duration-300 group-hover:rotate-12" />
        <span>Chat Now</span>

        {/* 3. Small Mini-Indicator Light inside the Button */}
        <span className="relative flex h-2 w-2 ml-0.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
        </span>
      </a>
    </div>
  );
}
