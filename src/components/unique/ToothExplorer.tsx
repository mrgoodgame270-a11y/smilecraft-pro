import { useState } from "react";

const PARTS = [
  {
    id: "enamel",
    label: "Enamel",
    color: "#FBE4D8",
    treats: "Whitening, bonding, fluoride treatments protect and brighten the outer layer.",
  },
  {
    id: "dentin",
    label: "Dentin",
    color: "#F4A28C",
    treats: "Fillings and crowns repair this softer layer when decay reaches it.",
  },
  {
    id: "pulp",
    label: "Pulp",
    color: "#E07856",
    treats: "Root canal therapy treats infection deep inside the tooth nerve and blood vessels.",
  },
  {
    id: "root",
    label: "Root",
    color: "#1B8A9E",
    treats: "Implants and gum care anchor the tooth and address the supporting structure.",
  },
];

export function ToothExplorer() {
  const [active, setActive] = useState(PARTS[0]);

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center bg-cream-deep rounded-3xl p-6 md:p-10">
      <div className="flex justify-center">
        <svg viewBox="0 0 200 280" className="w-64 h-auto">
          <defs>
            <radialGradient id="pulpG" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#E07856" />
              <stop offset="100%" stopColor="#9c4a2e" />
            </radialGradient>
          </defs>
          {/* Enamel (outer) */}
          <path
            d="M100 10 C 60 10 40 50 45 100 C 48 130 55 160 65 200 C 70 235 80 270 100 270 C 120 270 130 235 135 200 C 145 160 152 130 155 100 C 160 50 140 10 100 10 Z"
            fill={PARTS[0].color}
            stroke={active.id === "enamel" ? "#1B8A9E" : "#0A1F26"}
            strokeWidth={active.id === "enamel" ? 3 : 1}
            onMouseEnter={() => setActive(PARTS[0])}
            onClick={() => setActive(PARTS[0])}
            className="cursor-pointer transition-all"
          />
          {/* Dentin */}
          <path
            d="M100 30 C 70 30 55 60 60 100 C 63 130 70 160 78 200 C 82 230 88 250 100 250 C 112 250 118 230 122 200 C 130 160 137 130 140 100 C 145 60 130 30 100 30 Z"
            fill={PARTS[1].color}
            stroke={active.id === "dentin" ? "#1B8A9E" : "transparent"}
            strokeWidth={3}
            onMouseEnter={() => setActive(PARTS[1])}
            onClick={() => setActive(PARTS[1])}
            className="cursor-pointer transition-all"
          />
          {/* Pulp */}
          <path
            d="M100 60 C 85 60 78 80 82 110 C 85 140 92 180 100 200 C 108 180 115 140 118 110 C 122 80 115 60 100 60 Z"
            fill="url(#pulpG)"
            stroke={active.id === "pulp" ? "#1B8A9E" : "transparent"}
            strokeWidth={3}
            onMouseEnter={() => setActive(PARTS[2])}
            onClick={() => setActive(PARTS[2])}
            className="cursor-pointer transition-all"
          />
          {/* Root highlight */}
          <ellipse
            cx={100}
            cy={250}
            rx={20}
            ry={18}
            fill={PARTS[3].color}
            opacity={0.9}
            stroke={active.id === "root" ? "#E07856" : "transparent"}
            strokeWidth={3}
            onMouseEnter={() => setActive(PARTS[3])}
            onClick={() => setActive(PARTS[3])}
            className="cursor-pointer transition-all"
          />
        </svg>
      </div>
      <div>
        <div className="flex flex-wrap gap-2 mb-5">
          {PARTS.map((p) => (
            <button
              key={p.id}
              onMouseEnter={() => setActive(p)}
              onClick={() => setActive(p)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${active.id === p.id ? "gradient-cta text-cream shadow-glow" : "bg-cream text-ink hover:bg-accent/15"}`}
            >
              {p.label}
            </button>
          ))}
        </div>
        <h3 className="font-display font-bold text-2xl text-ink">{active.label}</h3>
        <p className="mt-3 text-slate-body leading-[1.7]">{active.treats}</p>
      </div>
    </div>
  );
}
