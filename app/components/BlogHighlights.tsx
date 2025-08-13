"use client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";
import defaultImg from "../assets/default.jpg";
import { cn } from "../lib/utils";
import Loader from "./Loader";
import { fetchPosts } from "../lib/api/posts";


export default function BlogHighlights() {
  const { data, isLoading} = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (!data) return null;
  if(isLoading) return <Loader/>
  const [main, ...others] = data;

  return (
    <section className="flex flex-col md:flex-row mt-15 gap-8 w-full mx-auto">
      
      <Link
        href={`/blog/${main.id}`}
        className={cn(
          "w-full md:w-[62%] h-96 rounded-2xl overflow-hidden relative group shadow-xl"
        )}
        style={{ minWidth: 0 }}
      >
        <Image
          src={main.image}
          alt={main.title}
          width={900}
          height={384}
          className={cn(
            "w-full h-full object-cover rounded-2xl transition-transform group-hover:scale-105 duration-300"
          )}
          priority
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-2xl" />
       
        <div className="absolute bottom-0 left-0 w-full flex flex-col justify-end p-8 z-10">
          <span className="inline-block w-fit bg-black/70 text-white text-xs px-3 py-1 rounded-full mb-3 font-medium border border-black/40">
            {main.tags}
          </span>
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-snug drop-shadow-lg mb-2">
            {main.title}
          </h2>
        </div>
      </Link>

      
      <div className="w-full md:w-[38%] flex flex-col">
        <h3 className="text-xl font-semibold mb-4">Other featured posts</h3>
        <ul className="space-y-0">
  {others.slice(0, 5).map((post, index) => (
    <li key={post.id}>
      <Link
        href={`/blog/${post.id}`}
        className={cn(
          "group flex items-center gap-4 py-3 px-2 rounded-xl transition-all duration-200",
          "hover:bg-gray-50 hover:shadow-md hover:scale-[1.025] active:scale-100"
        )}
        style={{ minWidth: 0 }}
      >
        <Image
          src={post.image || defaultImg.src}
          alt={post.title}
          width={56}
          height={42}
          className={cn(
            "w-14 h-10 object-cover rounded-lg border border-gray-200 transition-transform duration-200",
            "group-hover:scale-105"
          )}
          onError={e => (e.currentTarget.src = defaultImg.src)}
        />
        <span className={cn(
          "text-base font-medium text-gray-900 leading-snug transition-colors duration-200",
          "group-hover:text-gray-700"
        )}>
          {post.title}
        </span>
      </Link>
      {index < 4 && <div className="border-b border-gray-200 ml-16" />}
    </li>
  ))}
</ul>
      </div>
    </section>
  );
}