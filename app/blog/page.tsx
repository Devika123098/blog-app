
"use client"
import { useQuery} from "@tanstack/react-query"
import {post} from "../types/post"
import { cn } from "../lib/utils"
import BlogCard from "../components/BlogCard"
async function fetchPosts():  Promise<post[]>{
     const res = await fetch("https://688dabf0a459d5566b12deb8.mockapi.io/api/vi/posts",{
    cache: "no-store"
  })
  if(!res.ok) throw new Error("Failed to fetch posts")
  return res.json()  
}

 export default function Blog(){

    const { data,error,isLoading,isError} = useQuery({
            queryKey: ["posts"],
            queryFn: fetchPosts,
        })
        
        if(!data) return null
        return(
            <div className={cn("w-[90%] mx-auto")}>
                <h2 className={cn("text-black font-bold text-2xl mb-4")}>Our Latest Insights</h2>
                <p className={cn("text-gray-800 text-lg  mb-10")}>Dive into our collection of articles, guides, and stories covering a wide range of topics, designed to inform and inspire.</p>
                <ul className={cn("w-full flex justify-center flex-wrap gap-5")}>
                     {data.map((post)=>(
                     <li key={post.id}>
                        <BlogCard image={post.image} title={post.title} content={post.body} profile={post.avatar} name={post.name} id={post.id} tag={post.tags} date={post.createdAt}/>
                     </li>
                ))}    
                </ul>
            </div>
        )
 }