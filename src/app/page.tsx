"use client";
import GooSvg from "./_components/GooSvg";
import useMouseMove from "./hooks/useMouseMove";

export default function Home() {
  const { curX, curY } = useMouseMove();

  return (
    <main className="min-h-screen">
      <div className="w-full h-full absolute overflow-hidden top-0 left-0 bg-gradient-to-bl from-[var(--color-bg1)] to-[var(color-bg2)]">
        <GooSvg />
        <div
          className="w-full h-full"
          style={{ filter: "url(#goo) blur(40px)" }}
        >
          <div className="absolute bg-gradient-radial from-[rgba(var(--color1),0.8)] from-0% to-50% to-[rgba(var(--color1),0)] bg-no-repeat mix-blend-hard-light top-[calc(50% - var(--circle-size) / 2)] left-[calc(50% - var(--circle-size) / 2)] origin-center opacity-100 animate-move-vertical w-[80em] h-[80em]"></div>
          <div className="absolute bg-gradient-radial from-[rgba(var(--color2),0.8)] from-0% to-50% to-[rgba(var(--color2),0)] bg-no-repeat mix-blend-hard-light top-[calc(50% - var(--circle-size) / 2)] left-[calc(50% - var(--circle-size) / 2)] origin-center opacity-100 animate-move-in-circle1 w-[80em] h-[80em]"></div>
          <div className="absolute bg-gradient-radial from-[rgba(var(--color3),0.8)] from-0% to-50% to-[rgba(var(--color3),0)] bg-no-repeat mix-blend-hard-light top-[calc(50% - var(--circle-size) / 2 + 200px)] left-[calc(50% - var(--circle-size) / 2 -500px)] origin-[calc(50% + 400px)] opacity-100 animate-move-in-circle2 w-[80em] h-[80em]"></div>
          <div className="absolute bg-gradient-radial from-[rgba(var(--color4),0.8)] from-0% to-50% to-[rgba(var(--color4),0)] bg-no-repeat mix-blend-hard-light top-[calc(50% - var(--circle-size) / 2)] left-[calc(50% - var(--circle-size) / 2)] origin-[calc(50% - 200px)] opacity-70 animate-move-horizontal w-[80em] h-[80em]"></div>
          <div className="absolute bg-gradient-radial from-[rgba(var(--color5),0.8)] from-0% to-50% to-[rgba(var(--color5),0)] bg-no-repeat mix-blend-hard-light top-[calc(50% - var(--circle-size))] left-[calc(50% - var(--circle-size))] origin-[calc(50% - 800px) calc(50% + 200px)] opacity-100 animate-move-in-circle3 w-[160em] h-[160em]"></div>

          <div
            className="absolute bg-gradient-radial from-[rgba(var(--color-interactive),0.8)] from-0% to-50% to-[rgba(var(--color-interactive),0)] bg-no-repeat mix-blend-hard-light top-[-50%] left-[-50%] opacity-70 w-full h-full"
            style={{
              transform: `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`,
            }}
          ></div>
        </div>
      </div>
    </main>
  );
}
