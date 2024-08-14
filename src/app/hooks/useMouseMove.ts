import { useEffect, useState } from "react";

export default function useMouseMove() {
  const [cursorPos, setCursorPos] = useState({
    curX: 0,
    curY: 0,
    tgX: 0,
    tgY: 0,
  });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPos((prev) => ({ ...prev, tgX: e.clientX, tgY: e.clientY }));
    };

    function move() {
      setCursorPos((prev) => ({
        ...prev,
        curX: prev.curX + (cursorPos.tgX - prev.curX) / 20,
        curY: prev.curY + (cursorPos.tgY - prev.curY) / 20,
      }));
    }

    document.addEventListener("mousemove", updateCursorPosition);

    requestAnimationFrame(() => {
      move();
    });

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, [cursorPos.curX, cursorPos.curY, cursorPos.tgX, cursorPos.tgY]);

  return cursorPos;
}
