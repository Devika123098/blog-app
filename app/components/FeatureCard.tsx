import React from "react";
import { cn } from "../lib/utils";
import Image, { type StaticImageData } from "next/image";

type ImageSrc = string | StaticImageData;

interface FeatureCardProps {
  image: ImageSrc;
  alt: string;
  icon: React.ElementType;
  title: string;
  content: string;
}

export const FeatureCard = ({ image, alt, icon: Icon, title, content }: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "md:w-[427px]  group flex flex-col gap-4 p-6",
        "rounded-2xl border border-gray-200 bg-white",
        "shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
      )}
    >
      <div className={cn("w-12 h-12 rounded-xl bg-white ring-1 ring-gray-200 shadow-sm flex items-center justify-center")}>
        <Icon width={24} height={24} className={cn("text-blue-500")} aria-hidden="true" />
      </div>

      <h6 className={cn("text-lg font-bold text-gray-900 tracking-tight")}>{title}</h6>

      <p className={cn("text-gray-700 text-sm leading-relaxed")}>{content}</p>

      <div className={cn("mt-auto rounded-xl overflow-hidden border border-gray-100 shadow-sm")}>
        <Image
          src={image}
          alt={alt}
          width={363}
          height={128}
          className={cn("w-full h-[128px] object-cover transition-transform duration-300 group-hover:scale-[1.03]")}
        />
      </div>
    </div>
  );
};