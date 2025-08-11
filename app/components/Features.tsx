import React from 'react'
import { cn } from "../lib/utils"
import img1 from "../assets/feat-img-1.png"
import Image, { type StaticImageData } from 'next/image'
import { SparklesIcon, CloudIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline'
import img2 from "../assets/feat-img-2.png"
import img3 from "../assets/feat-img-3.png"
import { FeatureCard } from './FeatureCard'

type ImageSrc = string | StaticImageData

interface Feature{
  image: ImageSrc;
  alt: string;
  icon: React.ElementType;
  title: string;
  content: string;
}

const features: Feature[] = [
  {
    image: img1,
    alt: "Content Editor",
    icon: SparklesIcon,
    title: "Intuitive Content Editor",
    content: "Craft stunning blog posts with our drag-and-drop interface and rich text editing tools. Focus on your message, we handle the design."
  },
  {
    image: img2,
    alt: "Cloud Publishing",
    icon: CloudIcon,
    title: "Seamless Cloud Publishing",
    content: "Publish your articles instantly to a global audience with our reliable cloud infrastructure. Your content is always available, everywhere."
  },
  {
    image: img3,
    alt: "Comment System",
    icon: ChatBubbleLeftIcon,
    title: "Engaging Comment System",
    content: "Foster a vibrant community around your content with integrated discussions and moderation tools. Connect with your readers effortlessly."
  }
]

function Features() {
  return (
    <section id="features" className={cn("w-full py-12 bg-gradient-to-b from-white via-gray-50 to-gray-50")}>
      <div className={cn("max-w-7xl mx-auto px-4 md:px-8")}>
        <div className={cn("text-center mb-10")}>
          <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-gray-200 shadow-sm backdrop-blur")}>
            <SparklesIcon className={cn("w-4 h-4 text-gray-700")} />
            <span className={cn("text-xs text-gray-700")}>Features</span>
          </div>
          <h3 className={cn("font-bold text-xl md:text-3xl text-center text-gray-900 mt-3 tracking-tight")}>
            Powerful Tools for Every Creator
          </h3>
          <div className={cn("mx-auto mt-3 h-px w-24 bg-gray-200 rounded-full")} />
        </div>

        <ul className={cn("grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center")}>
          {features.map((feature, index) => (
            <li key={index} className={cn("w-full flex justify-center")}>
              <FeatureCard
                image={feature.image}
                alt={feature.alt}
                icon={feature.icon}
                title={feature.title}
                content={feature.content}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Features