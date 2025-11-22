"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { urlFor } from "@/sanity/lib/image";
import BottomWaveOverlay from "./BottomWaveOverlay";
import { CustomImage as CustomImageType } from "../../studio/sanity.types";

type ObjectFitOption = "contain" | "cover" | "fill" | "none" | "scale-down";

type FancyImageProps = {
  src: string | StaticImageData | CustomImageType;
  alt?: string;
  overlay?: boolean;
  objectFit?: ObjectFitOption;
  className?: string;
  points?: number;
  opacity?: number;
  waveHeightRatio?: number;
  animation?: boolean;
};

export default function CustomImage({
  src,
  alt = "no alt text provided",
  objectFit = "cover",
  points,
  waveHeightRatio,
  overlay = false,
  opacity = 100,
  className,
  animation = true,
}: FancyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const url = urlFor(src).url();

  const wrapperClasses = `
    relative w-full h-full pointer-events-none
    ${animation ? "transition-opacity transition-transform duration-1000 ease-in-out" : ""}
    ${loaded && animation ? `opacity-${opacity} translate-y-0` : animation ? "opacity-0 translate-y-8" : ""}
    ${className || ""}
  `;

  const imageClasses = `
    ${animation ? "transition-opacity duration-1000 ease-in-out" : ""}
    ${loaded ? "opacity-100" : animation ? "opacity-0" : ""}
    ${className || ""}
  `;

  return (
    <div className={wrapperClasses}>
      {overlay && <BottomWaveOverlay points={points} waveHeightRatio={waveHeightRatio} />}

      <Image
        src={url}
        alt={alt}
        fill
        placeholder="blur"
        blurDataURL={urlFor(src).width(24).height(24).blur(10).url()}
        style={{ objectFit }}
        onLoad={() => setLoaded(true)}
        className={imageClasses}
      />
    </div>
  );
}
