"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LuDatabase } from "react-icons/lu";
import type { IconType } from "react-icons";
import {
  SiGithub,
  SiNextdotjs,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type OrbitItem = {
  name: string;
  icon: IconType;
};

type OrbitLayer = {
  id: string;
  label: string;
  radius: number;
  duration: number;
  direction: 1 | -1;
  dashed: boolean;
  items: OrbitItem[];
};

const orbitLayers: OrbitLayer[] = [
  {
    id: "interface",
    label: "Interface",
    radius: 95,
    duration: 25,
    direction: 1,
    dashed: false,
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    id: "infrastructure",
    label: "Data & infra",
    radius: 155,
    duration: 40,
    direction: -1,
    dashed: true,
    items: [
      { name: "TanStack Query", icon: LuDatabase },
      { name: "Supabase", icon: SiSupabase },
      { name: "GitHub", icon: SiGithub },
    ],
  },
];

const TechOrbit = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-100 flex items-center justify-center select-none"
      role="img"
      aria-label={`Tech stack: ${orbitLayers
        .flatMap((layer) => layer.items.map((item) => item.name))
        .join(", ")}`}
    >
      {/* Center Core */}
      <div className="z-10 relative grid size-24 place-items-center rounded-full border border-secondary bg-secondary/10 backdrop-blur-sm text-center shadow-inner">
        <span className="text-xs font-semibold leading-tight text-foreground">
          My tech
          <br />
          stack
        </span>
      </div>

      {orbitLayers.map((layer) => {
        const isAnimated = !prefersReducedMotion;

        return (
          <motion.div
            key={layer.id}
            animate={isAnimated ? { rotate: 360 * layer.direction } : undefined}
            transition={{
              duration: layer.duration,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute rounded-full border-secondary ${
              layer.dashed ? "border border-dashed" : "border border-solid"
            }`}
            style={{
              width: layer.radius * 2,
              height: layer.radius * 2,
            }}
          >
            <div
              className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
              aria-hidden="true"
            >
              <motion.span
                animate={
                  isAnimated ? { rotate: -360 * layer.direction } : undefined
                }
                transition={{
                  duration: layer.duration,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="block whitespace-nowrap rounded-full border border-secondary bg-background px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground shadow-sm"
              >
                {layer.label}
              </motion.span>
            </div>

            {layer.items.map((tech, index) => {
              const Icon = tech.icon;

              const count = layer.items.length;
              const angleIncrement = (2 * Math.PI) / count;
              const angle = index * angleIncrement + angleIncrement / 2;

              const x = layer.radius + layer.radius * Math.sin(angle);
              const y = layer.radius - layer.radius * Math.cos(angle);

              return (
                <div
                  key={tech.name}
                  className="absolute"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <motion.div
                    animate={
                      isAnimated
                        ? { rotate: -360 * layer.direction }
                        : undefined
                    }
                    transition={{
                      duration: layer.duration,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <button
                      type="button"
                      aria-label={tech.name}
                      className="group relative grid size-10 place-items-center rounded-full border border-secondary bg-background shadow-sm transition-all duration-200 hover:scale-110 hover:border-primary focus-visible:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 sm:size-12"
                    >
                      <Icon className="size-4 text-muted-foreground transition-colors duration-200 group-hover:text-primary sm:size-5" />

                      <span
                        className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-secondary bg-background px-2 py-1 text-xs font-medium opacity-0 shadow-md transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 z-30"
                        role="presentation"
                      >
                        {tech.name}
                      </span>
                    </button>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        );
      })}
    </div>
  );
};

export default TechOrbit;
