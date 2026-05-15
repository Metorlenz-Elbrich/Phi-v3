"use client";

import { useEffect, useRef } from "react";

export interface PointerState {
  x: number;
  y: number;
  nx: number;
  ny: number;
}

export function usePointer(): React.MutableRefObject<PointerState> {
  const ref = useRef<PointerState>({ x: 0, y: 0, nx: 0, ny: 0 });

  useEffect(() => {
    const handler = (event: PointerEvent) => {
      const { innerWidth: w, innerHeight: h } = window;
      ref.current.x = event.clientX;
      ref.current.y = event.clientY;
      ref.current.nx = (event.clientX / w) * 2 - 1;
      ref.current.ny = (event.clientY / h) * 2 - 1;
    };
    window.addEventListener("pointermove", handler, { passive: true });
    return () => window.removeEventListener("pointermove", handler);
  }, []);

  return ref;
}
