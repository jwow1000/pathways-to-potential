"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { urlFor } from "@/sanity/lib/image";
import BottomWaveOverlay from "./BottomWaveOverlay";
import { CustomImage as CustomImageType } from "../../studio/sanity.types";

type ObjectFitOption = "contain" | "cover" | "fill" | "none" | "scale-down";

type FancyImageProps = {
  src: string | StaticImageData | CustomImageType;
  alt: string;
  overlay?: boolean
  objectFit?: ObjectFitOption;
  className?: string;
  points?: number;
  waveHeightRatio?: number;
};

export default function CustomImage({
  src,
  alt,
  objectFit = "cover",
  points,
  waveHeightRatio,
  overlay = false,
  className,
}: FancyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const url = urlFor(src).url();

  return (
    <div 
      className={`
          realtive w-full h-full 
          transition-opacity transition-transform duration-1000 ease-in-out
          ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          ${className || ""}
        `}
    >
      {
        overlay &&
        <BottomWaveOverlay points={points} waveHeightRatio={waveHeightRatio}/>
      }
      <Image
        src={url}
        alt={alt}
        fill
        placeholder="blur"
        blurDataURL={urlFor(src).width(24).height(24).blur(10).url()}
        style={{ objectFit }}
        onLoad={() => setLoaded(true)}
        className={`
          transition-opacity duration-1000 ease-in-out
          ${loaded ? "opacity-100" : "opacity-0 "}
          ${className || ""}
        `}
      />
    </div>
  );
}
