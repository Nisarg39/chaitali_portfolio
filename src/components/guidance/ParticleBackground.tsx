'use client';
import { useCallback } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("tsparticles: initializing engine", engine);
    await loadSlim(engine);
    console.log("tsparticles: loaded slim");
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <ParticlesProvider init={particlesInit}>
        <Particles
          id="tsparticles"
          className="w-full h-full"
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab", // creates links to the mouse cursor like forming bonds
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.5,
              },
            },
          },
        },
        particles: {
          color: {
            value: ["#10b981", "#3b82f6", "#6366f1", "#f43f5e"], // Emerald, Blue, Indigo, Rose
          },
          links: {
            color: "#6366f1",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1.5,
            triangles: {
              enable: true,
              opacity: 0.05,
            }
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 1.2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              width: 800,
              height: 800,
            },
            value: 60, // Not too crowded
          },
          opacity: {
            value: 0.6,
            animation: {
              enable: true,
              speed: 0.5,
              sync: false,
            }
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 2, max: 6 },
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            }
          },
        },
        detectRetina: true,
      }}
    />
    </ParticlesProvider>
    </div>
  );
}
