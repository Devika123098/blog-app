"use client";
import { useQuery } from "@tanstack/react-query";
import { post } from "../types/post";
import React from 'react'
import { cn } from '../lib/utils'
import Link from 'next/link'
import BlogCard from "./BlogCard";
async function fetchPosts(): Promise<post[]> {
  const res = await fetch("https://688dabf0a459d5566b12deb8.mockapi.io/api/vi/posts",{ next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export const RecentPosts = () => {
    const { data } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
      });
    
      if (!data) return null
      const recentPosts = data.sort((a,b)=> new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0,4)
  return (
    <div className={cn("mt-15 w-full mx-auto")}>
        <div className={cn("w-full flex items-center justify-between mb-6")}>
            <h3 className="text-xl font-semibold ">Recent Posts</h3>
            <Link href={`/blog`} className="px-4 py-1 text-sm font-medium border border-gray-300 bg-white rounded-lg text-gray-800 hover:bg-gray-100 transition">
            All Posts
          </Link>
        </div>
        <ul className={cn("w-full flex flex-col items-center gap-5 md:flex-row md:justify-evenly")}>
                             {recentPosts.map((post)=>(
                             <li key={post.id}>
                                <BlogCard image={post.image} title={post.title} content={post.body} profile={post.avatar} name={post.name} id={post.id} tag={post.tags} date={post.createdAt}/>
                             </li>
                        ))}    
                        </ul>
    </div>
  )
}
