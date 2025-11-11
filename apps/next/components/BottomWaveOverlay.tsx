'use client'

import { useMemo } from "react";
import * as d3 from "d3";

export default function BottomWaveOverlay({
  points = 5,
  waveHeightRatio = 0.33, // bottom wave height as fraction of parent height
}: {
  fill?: string;
  points?: number;
  waveHeightRatio?: number;
}) {

  const pathData = useMemo(() => {
    const width = 100; // normalized width
    const height = 100; // normalized height
    const waveHeight = height * waveHeightRatio;
    const randomBates = d3.randomBates(3);

    // generate points along bottom
    const wavePoints: [number, number][] = Array.from(
      { length: points },
      (_, i) => {
        const x = (i / (points - 1)) * width;
        const y = height - randomBates() * waveHeight;
        return [x, y];
      }
    );

    const lineGenerator = d3
      .line<[number, number]>()
      .x((d) => d[0])
      .y((d) => d[1])
      .curve(d3.curveCatmullRom);

    const waveLine = lineGenerator(wavePoints)!;

    // Close the path to cover the area below the wave
    return `M0,100 L0,${100 / waveHeightRatio} L0,${
      wavePoints[0][1]
    } ${waveLine.slice(1)} L100,100 Z`;
  }, [points, waveHeightRatio]);

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute top-0 fill-inherit left-0 w-full h-full pointer-events-none fill-red z-40 "
    >
      <path d={pathData} />
    </svg>
  );
}
