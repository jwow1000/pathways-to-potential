"use client";
import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

interface Props {
  open: boolean;
  width: number;
  height: number; 
  padding: number;
  color?: string;
}

export default function MenuButton({ open, width, height, padding, color='red' }: Props) {
  const ref = useRef<SVGSVGElement | null>(null);
  const init = useRef<boolean>(true);

  useEffect(() => {
    if (!ref.current) return;

    const svg = d3.select(ref.current);
    
    const menuSymbol = [
      { x1: padding, y1: padding, x2: width-padding, y2: padding },
      { x1: padding, y1: height/2, x2: width-padding, y2: height/2 },
      { x1: padding, y1: height-padding, x2: width-padding, y2: height-padding },
    ];
    const flatSymbol = {
      x1: padding, 
      y1: height/2, 
      x2: width-padding, 
      y2: height/2,
    }
    const xSymbol = [
      { x1: padding, y1: padding, x2: width-padding, y2: height-padding},
      { x1: padding, y1: padding, x2: width-padding, y2: height-padding},
      { x1: padding, y1: height-padding, x2: width-padding, y2: padding},
    ];

    // if this is first time loading, dont animate
    if(init.current) {
      svg.selectAll("line")
        .data(menuSymbol)
        .join("line")
        .attr("x1", (d) => d.x1)
        .attr("y1", (d) => d.y1)
        .attr("x2", (d) => d.x2)
        .attr("y2", (d) => d.y2)
        .attr("stroke", color)
        .attr("stroke-width", 4)
        // .attr("stroke-linecap", "round"); // Rounded line edges
      // make init false
      init.current = false
    } else {
      const data = open ? xSymbol : menuSymbol; 
      svg.selectAll("line")
        .data(data)
        .join("line")
        .transition()
        .duration(500)
        .attr("x1", flatSymbol.x1)
        .attr("y1", flatSymbol.y1)
        .attr("x2", flatSymbol.x2)
        .attr("y2", flatSymbol.y2)
        .attr("stroke", open ? color : color)
        .transition()
        .duration(500)
        .attr("x1", (d) => d.x1)
        .attr("y1", (d) => d.y1)
        .attr("x2", (d) => d.x2)
        .attr("y2", (d) => d.y2)
        .attr("stroke-width", 4)
        // .attr("stroke-linecap", "round"); // Rounded line edges
    }

  }, [open, width, height, padding, color]); // Re-run when `open` changes

  return <svg ref={ref} width={width} height={height}></svg>;
}
