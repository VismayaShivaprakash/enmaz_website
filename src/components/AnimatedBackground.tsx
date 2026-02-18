import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animId: number;
        let t = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const drawWave = (
            y: number,
            wavelength: number,
            amplitude: number,
            speed: number,
            color: "red" | "green",
            opacity: number
        ) => {
            const W = canvas.width;
            const H = canvas.height;

            ctx.beginPath();
            // Start slightly off-screen left
            ctx.moveTo(-100, H);

            for (let x = 0; x <= W; x += 10) {
                // Compound sine wave for organic feel
                const wave =
                    Math.sin(x * wavelength + t * speed) * amplitude +
                    Math.sin(x * wavelength * 0.5 + t * speed * 0.5) * (amplitude * 0.5);
                ctx.lineTo(x, y + wave);
            }

            ctx.lineTo(W, H); // Bottom right
            ctx.lineTo(0, H); // Bottom left
            ctx.closePath();

            const r = color === "red" ? 220 : 20;
            const g = color === "red" ? 30 : 200;
            const b = color === "red" ? 30 : 80;

            // Vertical gradient fill - fade out as it goes down
            const gradient = ctx.createLinearGradient(0, y - amplitude, 0, H);
            gradient.addColorStop(0, `rgba(${r},${g},${b},${opacity})`);
            gradient.addColorStop(0.5, `rgba(${r},${g},${b},${opacity * 0.3})`);
            gradient.addColorStop(1, `rgba(${r},${g},${b},0)`);

            ctx.fillStyle = gradient;
            ctx.fill();
        };

        const draw = () => {
            t += 0.008;
            const W = canvas.width;
            const H = canvas.height;

            // Clear
            ctx.clearRect(0, 0, W, H);

            // Deep base
            ctx.fillStyle = "#020408";
            ctx.fillRect(0, 0, W, H);

            // Layered waves - back to front
            // 1. Large slow red wave in back
            drawWave(H * 0.55, 0.002, 60, 0.5, "red", 0.12);

            // 2. Medium green wave
            drawWave(H * 0.60, 0.003, 50, 0.7, "green", 0.09);

            // 3. Smaller faster red wave
            drawWave(H * 0.65, 0.004, 40, 0.9, "red", 0.17);

            // 4. Subtle green detail wave in front
            drawWave(H * 0.70, 0.005, 30, 1.1, "green", 0.14);

            // Vignette
            const vig = ctx.createRadialGradient(
                W * 0.5, H * 0.45, H * 0.1,
                W * 0.5, H * 0.45, H * 0.9
            );
            vig.addColorStop(0, "rgba(0,0,0,0)");
            vig.addColorStop(1, "rgba(0,0,0,0.6)");
            ctx.fillStyle = vig;
            ctx.fillRect(0, 0, W, H);

            // Bottom fade to site bg
            const fade = ctx.createLinearGradient(0, H * 0.85, 0, H);
            fade.addColorStop(0, "rgba(0,0,0,0)");
            fade.addColorStop(1, "rgba(3,7,18,1)");
            ctx.fillStyle = fade;
            ctx.fillRect(0, H * 0.85, W, H * 0.15);

            animId = requestAnimationFrame(draw);
        };

        resize();
        window.addEventListener("resize", resize);
        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
        />
    );
};

export default AnimatedBackground;
