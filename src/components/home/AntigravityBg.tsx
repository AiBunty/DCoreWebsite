import { useEffect, useRef } from "react";

type Dot = {
  angle: number;
  ring: number;
  height: number;
  speed: number;
  size: number;
  shade: number;
  twinkle: number;
};

export function AntigravityBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let dots: Dot[] = [];
    let idleId = 0;
    const pointer = { x: 0, y: 0, tx: 0, ty: 0, spin: 0 };
    const motionScale = prefersReducedMotion ? 0.35 : 0.45;

    const createDots = () => {
      const count = width < 768 ? 140 : 260;
      dots = Array.from({ length: count }, () => {
        return {
          angle: Math.random() * Math.PI * 2,
          ring: Math.pow(Math.random(), 0.62),
          height: (Math.random() - 0.5) * 1.85,
          speed: (0.00045 + Math.random() * 0.0014) * motionScale,
          size: 0.75 + Math.random() * 1.75,
          shade: 18 + Math.random() * 26,
          twinkle: Math.random() * Math.PI * 2,
        };
      });
    };

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createDots();
    };

    const setPointerTarget = (clientX: number, clientY: number) => {
      pointer.tx = (clientX / window.innerWidth - 0.5) * 2;
      pointer.ty = (clientY / window.innerHeight - 0.5) * 2;
    };

    const onMouseMove = (event: MouseEvent) => {
      setPointerTarget(event.clientX, event.clientY);
    };

    const onPointerMove = (event: PointerEvent) => {
      setPointerTarget(event.clientX, event.clientY);
    };

    const onLeave = () => {
      pointer.tx = 0;
      pointer.ty = 0;
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const follow = prefersReducedMotion ? 0.018 : 0.045;
      pointer.x += (pointer.tx - pointer.x) * follow;
      pointer.y += (pointer.ty - pointer.y) * follow;
      pointer.spin += (pointer.x * 0.42 - pointer.spin) * 0.025;

      const sceneRadius = Math.min(width, height);
      const cx = width * 0.5 + pointer.x * sceneRadius * 0.04;
      const cy = height * 0.52 + pointer.y * sceneRadius * 0.025;
      const radius = Math.min(width, height) * 0.43;
      const verticalRadius = radius * 0.52;
      const depthRadius = radius * 1.15;
      const camera = radius * 3.4;
      const baseRotation =
        time * (prefersReducedMotion ? 0.000015 : 0.00005) + pointer.spin * 0.24;
      const rotY = pointer.x * 0.36;
      const rotX = pointer.y * -0.2;
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      for (let i = 0; i < dots.length; i += 1) {
        const dot = dots[i];
        const t = dot.angle + baseRotation + time * dot.speed;
        const radial = radius * (0.08 + dot.ring * 0.92);
        const lift = Math.sin(t * 1.65 + dot.twinkle) * (1 - dot.ring) * 18;

        const x0 = Math.cos(t) * radial;
        const z0 = Math.sin(t) * depthRadius * (0.25 + dot.ring * 0.75);
        const y0 = dot.height * verticalRadius + lift;

        const x1 = x0 * cosY - z0 * sinY;
        const z1 = x0 * sinY + z0 * cosY;
        const y1 = y0 * cosX - z1 * sinX;
        const z2 = y0 * sinX + z1 * cosX;

        const perspective = camera / (camera - z2);
        const depthParallax = z2 / depthRadius;
        const x = cx + x1 * perspective + pointer.x * depthParallax * 18;
        const y = cy + y1 * perspective + pointer.y * depthParallax * 11;

        if (x < -20 || x > width + 20 || y < -20 || y > height + 20) {
          continue;
        }

        const depthFactor = (z2 / depthRadius + 1) * 0.5;
        const twinkle = 0.7 + 0.3 * Math.sin(time * 0.002 + dot.twinkle);
        const alpha = (0.12 + depthFactor * 0.76) * twinkle;
        const w = dot.size * perspective * (1.8 + depthFactor * 2.4);
        const h = Math.max(0.8, dot.size * perspective * 0.7);

        const lightness = dot.shade + depthFactor * 18;
        ctx.fillStyle = `hsla(220, 8%, ${lightness}%, ${alpha})`;
        ctx.fillRect(x - w * 0.5, y - h * 0.5, w, h);
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    const startAnimation = () => {
      raf = requestAnimationFrame(draw);
    };

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(startAnimation, { timeout: 1200 });
    } else {
      idleId = window.setTimeout(startAnimation, 250);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      if ("cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      } else {
        window.clearTimeout(idleId);
      }
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(255,255,255,0.96),rgba(248,250,252,0.95),rgba(241,245,249,1))]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/95 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-50/95 to-transparent" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-95" />
    </div>
  );
}
