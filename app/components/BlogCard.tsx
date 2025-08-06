import React from 'react'
import { cn } from "../lib/utils"
import Image from 'next/image';
import defaultImg from "../assets/default.jpg"
import Link from 'next/link';

interface BlogCardProps {
  image: string;
  title: string;
  content: string;
  profile: string;
  name: string;
  id: string;
  tag: string;
  date: string;
}

export default function BlogCard({ image, title, content, profile, name, id, tag, date }: BlogCardProps) {
  return (
    <div className={cn(
      "w-[325px] h-[450px] rounded-2xl group cursor-pointer overflow-hidden p-0 shadow-lg bg-white border border-gray-100 flex flex-col transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl"
    )}>
      <div className="relative">
        <Image
          src={image || defaultImg.src}
          alt={title}
          width={325}
          height={213}
          className={cn("w-full h-[213px] object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105")}
          onError={e => (e.currentTarget.src = defaultImg.src)}
          priority
        />
        <span className={cn(
          "absolute top-3 left-3 bg-white/90 text-xs font-semibold px-3 py-1 rounded-full shadow backdrop-blur"
        )}>
          {tag}
        </span>
      </div>
      <div className={cn("flex-1 flex flex-col px-5 py-4")}>
        <h3 className={cn(
          "font-bold text-lg text-black mb-2 transition-colors duration-200 group-hover:text-gray-900 line-clamp-2"
        )}>
          {title}
        </h3>
        <p className={cn(
          "text-gray-700 text-sm mb-4 line-clamp-2"
        )}>
          {content.slice(0, 120)}...
        </p>
        <div className={cn("flex items-center gap-2 mb-4")}>
          <div className={cn("w-[32px] h-[32px] rounded-full overflow-hidden border-2 border-gray-200 shadow-sm")}>
            <Image
              width={32}
              height={32}
              src={profile || defaultImg.src}
              alt={name}
              className={cn("rounded-full object-cover")}
            />
          </div>
          <p className={cn("text-xs text-gray-500 font-medium")}>{name}</p>
          <span className={cn("text-xs text-gray-400")}>• {date ? new Date(date).toLocaleDateString() : "8 min read"}</span>
        </div>
        <Link
          href={`/blog/${id}`}
          className={cn(
            "block py-2 w-full rounded-lg border border-[#DEE1E6FF] text-gray-800 bg-white hover:text-white hover:bg-gray-900 hover:border-gray-900 transition-all duration-300 text-sm text-center font-medium mt-auto shadow-sm hover:shadow-lg"
          )}
        >
          Read More
        </Link>
      </div>
    </div>
  )
}