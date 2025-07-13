import Particles from "react-tsparticles";

export default function OrbParticles() {
  return (
    <Particles
      options={{
        fullScreen: false,
        background: { color: "#000000" },
        fpsLimit: 60,
        particles: {
          color: { value: "#00f2ff" },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            outModes: { default: "bounce" },
          },
          number: { value: 30 },
          opacity: { value: 0.3 },
          shape: { type: "circle" },
          size: { value: { min: 0.5, max: 1.5 } },
        },
        detectRetina: true,
      }}
    />
  );
}
