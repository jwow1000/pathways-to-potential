"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { urlFor } from "@/sanity/lib/image";

type ObjectFitOption = "contain" | "cover" | "fill" | "none" | "scale-down";

type FancyImageProps = {
  src: string | StaticImageData;
  alt: string;
  objectFit?: ObjectFitOption;
  className?: string;
};

export default function CustomImage({
  src,
  alt,
  objectFit = "cover",
  className,
}: FancyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const url = urlFor(src).url();

  return (
    <Image
      src={url}
      alt={alt}
      fill
      placeholder="blur"
      blurDataURL={urlFor(src).width(24).height(24).blur(10).url()}
      style={{ objectFit }}
      className={`
        transition-opacity transition-transform duration-700 ease-out
        ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
        ${className || ""}
      `}
      onLoad={() => setLoaded(true)}
    />
  );
}
