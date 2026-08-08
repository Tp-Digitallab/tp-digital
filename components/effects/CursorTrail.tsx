"use client";

import { useEffect, useRef } from "react";

type FlowPoint = {
  x: number;
  y: number;
};

type FluidWisp = {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  radiusX: number;
  radiusY: number;
  rotation: number;
  rotationSpeed: number;
  life: number;
  decay: number;
  hue: number;
  phase: number;
};

const FOLLOWER_COUNT = 9;
const MAX_WISPS = 26;
const WISP_DISTANCE = 36;
const MAX_PIXEL_RATIO = 1.75;

/*
 * Общая яркость эффекта:
 *
 * 0.45 — очень спокойно
 * 0.65 — рекомендуемый вариант
 * 0.85 — заметнее
 */
const EFFECT_STRENGTH = 1.65;

export default function CursorTrail() {
  const canvasRef =
    useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasElement =
      canvasRef.current;

    if (!canvasElement) {
      return;
    }

    const containerElement =
      canvasElement.parentElement;

    if (!containerElement) {
      return;
    }

    const drawingContext =
      canvasElement.getContext("2d");

    if (!drawingContext) {
      return;
    }

    const canvas: HTMLCanvasElement =
      canvasElement;

    const container: HTMLElement =
      containerElement;

    const context: CanvasRenderingContext2D =
      drawingContext;


    const hasFinePointer =
  window.matchMedia(
    "(any-hover: hover) and (any-pointer: fine)"
  ).matches;

if (!hasFinePointer) {
  return;
}

    const followers: FlowPoint[] = [];
    const wisps: FluidWisp[] = [];

    let width = 0;
    let height = 0;
    let pixelRatio = 1;

    let targetX = 0;
    let targetY = 0;

    let previousPointerX = 0;
    let previousPointerY = 0;

    let pointerReady = false;
    let pointerInside = false;

    let fluidOpacity = 0;
    let accumulatedDistance = 0;
    let lastMovementTime = 0;

    let previousFrameTime =
      performance.now();

    let animationFrame:
      number | null = null;

    function clearCanvas() {
      context.clearRect(
        0,
        0,
        width,
        height
      );
    }

    function resizeCanvas() {
      const rect =
        canvas.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      if (
        width === 0 ||
        height === 0
      ) {
        return;
      }

      pixelRatio = Math.min(
        window.devicePixelRatio || 1,
        MAX_PIXEL_RATIO
      );

      canvas.width = Math.round(
        width * pixelRatio
      );

      canvas.height = Math.round(
        height * pixelRatio
      );

      context.setTransform(
        pixelRatio,
        0,
        0,
        pixelRatio,
        0,
        0
      );

      wisps.length = 0;
      followers.length = 0;

      pointerReady = false;
      fluidOpacity = 0;
    }

    function initialisePointer(
      x: number,
      y: number
    ) {
      targetX = x;
      targetY = y;

      previousPointerX = x;
      previousPointerY = y;

      followers.length = 0;

      for (
        let index = 0;
        index < FOLLOWER_COUNT;
        index += 1
      ) {
        followers.push({
          x,
          y,
        });
      }

      pointerReady = true;
    }

    function createWisp(
      x: number,
      y: number,
      movementX: number,
      movementY: number,
      strength = 1
    ) {
      if (
        wisps.length >= MAX_WISPS
      ) {
        wisps.shift();
      }

      const speed =
        Math.hypot(
          movementX,
          movementY
        );

      const direction =
        speed > 0
          ? Math.atan2(
              movementY,
              movementX
            )
          : 0;

      const baseRadius =
        105 +
        Math.random() * 50;

      const stretch =
        1 +
        Math.min(
          speed / 45,
          0.75
        );

      const sidewaysDirection =
        direction +
        Math.PI / 2;

      const sidewaysSpeed =
        (Math.random() - 0.5) *
        0.75;

      wisps.push({
        x,
        y,

        velocityX:
          -movementX * 0.012 +
          Math.cos(
            sidewaysDirection
          ) *
            sidewaysSpeed,

        velocityY:
          -movementY * 0.012 +
          Math.sin(
            sidewaysDirection
          ) *
            sidewaysSpeed,

        radiusX:
          baseRadius *
          stretch *
          strength,

        radiusY:
          baseRadius *
          (0.68 +
            Math.random() *
              0.28) *
          strength,

        rotation:
          direction +
          (Math.random() - 0.5) *
            0.4,

        rotationSpeed:
          (Math.random() - 0.5) *
          0.0035,

        life: 1,

        decay:
          0.0038 +
          Math.random() * 0.002,

        hue:
          210 +
          Math.random() * 48,

        phase:
          Math.random() *
          Math.PI *
          2,
      });
    }

    function startAnimation() {
      if (
        animationFrame !== null
      ) {
        return;
      }

      previousFrameTime =
        performance.now();

      animationFrame =
        window.requestAnimationFrame(
          animate
        );
    }

    function handlePointerMove(
      event: PointerEvent
    ) {
      if (
        event.pointerType &&
        event.pointerType !== "mouse"
      ) {
        return;
      }

      const rect =
        container.getBoundingClientRect();

      const x =
        event.clientX -
        rect.left;

      const y =
        event.clientY -
        rect.top;

      const isInside =
        x >= 0 &&
        y >= 0 &&
        x <= rect.width &&
        y <= rect.height;

      if (!isInside) {
        pointerInside = false;
        startAnimation();
        return;
      }

      if (!pointerReady) {
        initialisePointer(x, y);

        createWisp(
          x,
          y,
          0,
          0,
          0.9
        );
      } else if (!pointerInside) {
        previousPointerX = x;
        previousPointerY = y;

        targetX = x;
        targetY = y;

        createWisp(
          x,
          y,
          0,
          0,
          0.8
        );
      } else {
        const movementX =
          x -
          previousPointerX;

        const movementY =
          y -
          previousPointerY;

        const distance =
          Math.hypot(
            movementX,
            movementY
          );

        accumulatedDistance +=
          distance;

        const wispCount =
          Math.min(
            3,
            Math.floor(
              accumulatedDistance /
                WISP_DISTANCE
            )
          );

        for (
          let index = 1;
          index <= wispCount;
          index += 1
        ) {
          const progress =
            index /
            (wispCount + 1);

          createWisp(
            previousPointerX +
              movementX *
                progress,

            previousPointerY +
              movementY *
                progress,

            movementX,
            movementY
          );
        }

        if (wispCount > 0) {
          accumulatedDistance %=
            WISP_DISTANCE;
        }

        targetX = x;
        targetY = y;

        previousPointerX = x;
        previousPointerY = y;
      }

      pointerInside = true;

      lastMovementTime =
        performance.now();

      startAnimation();
    }

    function handlePointerLeave() {
      pointerInside = false;
      startAnimation();
    }

    function updateFollowers(
      frameScale: number
    ) {
      if (
        !pointerReady ||
        followers.length === 0
      ) {
        return;
      }

      const firstFollower =
        followers[0];

      const headEase =
        1 -
        Math.pow(
          0.82,
          frameScale
        );

      firstFollower.x +=
        (targetX -
          firstFollower.x) *
        headEase;

      firstFollower.y +=
        (targetY -
          firstFollower.y) *
        headEase;

      for (
        let index = 1;
        index < followers.length;
        index += 1
      ) {
        const follower =
          followers[index];

        const leader =
          followers[index - 1];

        const ease =
          1 -
          Math.pow(
            0.87 +
              index * 0.006,
            frameScale
          );

        follower.x +=
          (leader.x -
            follower.x) *
          ease;

        follower.y +=
          (leader.y -
            follower.y) *
          ease;
      }
    }

    function updateWisps(
      frameScale: number
    ) {
      for (
        let index =
          wisps.length - 1;
        index >= 0;
        index -= 1
      ) {
        const wisp =
          wisps[index];

        wisp.life -=
          wisp.decay *
          frameScale;

        if (wisp.life <= 0) {
          wisps.splice(
            index,
            1
          );

          continue;
        }

        wisp.phase +=
          0.012 *
          frameScale;

        wisp.rotation +=
          wisp.rotationSpeed *
          frameScale;

        wisp.x +=
          (
            wisp.velocityX +
            Math.cos(
              wisp.phase
            ) *
              0.08
          ) *
          frameScale;

        wisp.y +=
          (
            wisp.velocityY +
            Math.sin(
              wisp.phase * 0.9
            ) *
              0.07
          ) *
          frameScale;

        const drag =
          Math.pow(
            0.986,
            frameScale
          );

        wisp.velocityX *= drag;
        wisp.velocityY *= drag;

        wisp.radiusX +=
          0.08 *
          frameScale;

        wisp.radiusY +=
          0.05 *
          frameScale;
      }
    }

    function createFluidPath() {
      if (
        followers.length < 2
      ) {
        return false;
      }

      const oldestPoint =
        followers[
          followers.length - 1
        ];

      context.beginPath();

      context.moveTo(
        oldestPoint.x,
        oldestPoint.y
      );

      for (
        let index =
          followers.length - 2;
        index > 0;
        index -= 1
      ) {
        const point =
          followers[index];

        const nextPoint =
          followers[index - 1];

        const middleX =
          (point.x +
            nextPoint.x) /
          2;

        const middleY =
          (point.y +
            nextPoint.y) /
          2;

        context.quadraticCurveTo(
          point.x,
          point.y,
          middleX,
          middleY
        );
      }

      const newestPoint =
        followers[0];

      context.lineTo(
        newestPoint.x,
        newestPoint.y
      );

      return true;
    }

    function drawFluidRibbon(
      opacity: number
    ) {
      if (!createFluidPath()) {
        return;
      }

      context.save();

      context.globalCompositeOperation =
        "screen";

      context.lineCap =
        "round";

      context.lineJoin =
        "round";

      context.filter =
        "blur(34px)";

      context.lineWidth = 190;

      context.strokeStyle =
        `rgba(37, 99, 235, ${
          0.045 *
          EFFECT_STRENGTH *
          opacity
        })`;

      context.stroke();
      context.restore();

      if (!createFluidPath()) {
        return;
      }

      context.save();

      context.globalCompositeOperation =
        "screen";

      context.lineCap =
        "round";

      context.lineJoin =
        "round";

      context.filter =
        "blur(18px)";

      context.lineWidth = 92;

      context.strokeStyle =
        `rgba(34, 211, 238, ${
          0.026 *
          EFFECT_STRENGTH *
          opacity
        })`;

      context.shadowBlur = 35;

      context.shadowColor =
        `rgba(124, 58, 237, ${
          0.075 *
          EFFECT_STRENGTH *
          opacity
        })`;

      context.stroke();
      context.restore();
    }

    function drawFluidEllipse(
      x: number,
      y: number,
      radiusX: number,
      radiusY: number,
      rotation: number,
      hue: number,
      alpha: number,
      phase: number
    ) {
      context.save();

      context.translate(x, y);
      context.rotate(rotation);

      context.scale(
        radiusX,
        radiusY
      );

      const lightX =
        -0.16 +
        Math.sin(phase) *
          0.08;

      const lightY =
        -0.12 +
        Math.cos(
          phase * 0.8
        ) *
          0.07;

      const gradient =
        context.createRadialGradient(
          lightX,
          lightY,
          0.04,
          0,
          0,
          1
        );

      gradient.addColorStop(
        0,
        `hsla(${
          hue + 18
        }, 96%, 67%, ${
          alpha * 0.7
        })`
      );

      gradient.addColorStop(
        0.34,
        `hsla(${hue}, 94%, 58%, ${alpha})`
      );

      gradient.addColorStop(
        0.68,
        `hsla(${
          hue + 26
        }, 92%, 51%, ${
          alpha * 0.38
        })`
      );

      gradient.addColorStop(
        1,
        `hsla(${hue}, 90%, 45%, 0)`
      );

      context.fillStyle =
        gradient;

      context.beginPath();

      context.arc(
        0,
        0,
        1,
        0,
        Math.PI * 2
      );

      context.fill();
      context.restore();
    }

    function drawWisps() {
      context.save();

      context.globalCompositeOperation =
        "screen";

      context.filter =
        "blur(7px)";

      for (
        const wisp of wisps
      ) {
        const life =
          Math.max(
            0,
            wisp.life
          );

        const alpha =
          Math.pow(
            life,
            1.65
          ) *
          0.072 *
          EFFECT_STRENGTH;

        drawFluidEllipse(
          wisp.x,
          wisp.y,
          wisp.radiusX,
          wisp.radiusY,
          wisp.rotation,
          wisp.hue,
          alpha,
          wisp.phase
        );

        drawFluidEllipse(
          wisp.x +
            Math.cos(
              wisp.phase
            ) *
              wisp.radiusX *
              0.16,

          wisp.y +
            Math.sin(
              wisp.phase * 0.85
            ) *
              wisp.radiusY *
              0.16,

          wisp.radiusX * 0.68,
          wisp.radiusY * 0.72,

          -wisp.rotation * 0.55,

          wisp.hue + 24,

          alpha * 0.42,

          wisp.phase + 1.7
        );
      }

      context.restore();
    }

    function drawAmbientGlow(
      opacity: number
    ) {
      if (
        followers.length === 0
      ) {
        return;
      }

      const head =
        followers[0];

      const radius = 270;

      const gradient =
        context.createRadialGradient(
          head.x,
          head.y,
          0,
          head.x,
          head.y,
          radius
        );

      gradient.addColorStop(
        0,
        `rgba(56, 189, 248, ${
          0.055 *
          EFFECT_STRENGTH *
          opacity
        })`
      );

      gradient.addColorStop(
        0.38,
        `rgba(59, 130, 246, ${
          0.032 *
          EFFECT_STRENGTH *
          opacity
        })`
      );

      gradient.addColorStop(
        0.7,
        `rgba(124, 58, 237, ${
          0.018 *
          EFFECT_STRENGTH *
          opacity
        })`
      );

      gradient.addColorStop(
        1,
        "rgba(0, 0, 0, 0)"
      );

      context.save();

      context.globalCompositeOperation =
        "screen";

      context.fillStyle =
        gradient;

      context.fillRect(
        head.x - radius,
        head.y - radius,
        radius * 2,
        radius * 2
      );

      context.restore();
    }

    function animate(
      time: number
    ) {
      animationFrame = null;

      const frameScale =
        Math.min(
          (
            time -
            previousFrameTime
          ) /
            16.667,
          2
        );

      previousFrameTime = time;

      clearCanvas();

      const recentlyMoved =
        time -
          lastMovementTime <
        850;

      const targetOpacity =
        pointerInside &&
        recentlyMoved
          ? 1
          : 0;

      const opacityEase =
        1 -
        Math.pow(
          0.93,
          frameScale
        );

      fluidOpacity +=
        (
          targetOpacity -
          fluidOpacity
        ) *
        opacityEase;

      updateFollowers(
        frameScale
      );

      updateWisps(
        frameScale
      );

      drawWisps();

      if (
        fluidOpacity > 0.002
      ) {
        drawFluidRibbon(
          fluidOpacity
        );

        drawAmbientGlow(
          fluidOpacity
        );
      }

      const shouldContinue =
        wisps.length > 0 ||
        fluidOpacity > 0.002 ||
        time -
          lastMovementTime <
          1000;

      if (shouldContinue) {
        animationFrame =
          window.requestAnimationFrame(
            animate
          );
      }
    }

    resizeCanvas();

    const resizeObserver =
      new ResizeObserver(
        resizeCanvas
      );

    resizeObserver.observe(
      container
    );

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "blur",
      handlePointerLeave
    );

    document.addEventListener(
      "mouseleave",
      handlePointerLeave
    );

    return () => {
      if (
        animationFrame !== null
      ) {
        window.cancelAnimationFrame(
          animationFrame
        );
      }

      resizeObserver.disconnect();

      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "blur",
        handlePointerLeave
      );

      document.removeEventListener(
        "mouseleave",
        handlePointerLeave
      );

      clearCanvas();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        z-0
        hidden
        h-full
        w-full
        mix-blend-screen
        md:block
      "
    />
  );
}