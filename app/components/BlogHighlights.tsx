"use client"
import { useQuery} from "@tanstack/react-query"
import {post} from "../types/post"
import Link from "next/link"
import Image from "next/image"
import defaultImg from "../assets/default.jpg"
import {cn} from "../lib/utils"
async function fetchPosts():  Promise<post[]>{
     const res = await fetch("https://688dabf0a459d5566b12deb8.mockapi.io/api/vi/posts",{
    cache: "no-store"
  })
  if(!res.ok) throw new Error("Failed to fetch posts")
  return res.json()  
}
export default function BlogHighlights(){

    const { data,error,isLoading,isError} = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
    })
    
    if(!data) return null
    const [main, ...others] = data

    return(
            <div className={cn("flex flex-col md:flex-row mt-10 gap-8 max-w-6xl mx-auto")}>
                <Link href={`/blog/${main.id}`} className={cn("w-full md:w-[62%] overflow-hidden h-96 rounded-2xl relative group shadow-xl")}>
                    <Image src={main.image} alt={main.title} width={800} height={384} className={cn("w-full h-full object-cover rounded-2xl transition-transform  group-hover:scale-105 duration-300")}></Image>
                    <div className={cn("absolute bottom-0 w-full flex flex-col justify-end bg-black/40 backdrop-blur-md p-6")}>
                    <span className={cn("inline-block w-fit bg-[#424856FF] text-white text-xs px-3 py-1 rounded-full mb-3 font-medium")}>{main.tags}</span>
                    <h2 className={cn("text-white text-3xl font-bold  leading-normal drop-shadow-lg")}>{main.title}</h2>
                    </div>
                </Link>
                <div className={cn(" w-full md:w-[38%] flex flex-col")}>
                    <h3 className="text-xl font-semibold mb-4">Other featured posts</h3>
                    <ul className={cn("space-y-1")}>
                        {others.slice(0,5).map(post=>(
                            <li key={post.id}>
                                <Link href={`/blog/${post.id}`}
                                className={cn("flex items-center gap-4 p-2 pl-0 hover:bg-gray-100 transition border-b border-gray-300 rounded-t-lg")}
                                >
                                <Image
                                    src={post.image || defaultImg.src}
                                    alt={post.title}
                                    width={64}
                                    height={48}
                                    className={cn("w-16 h-12 object-cover rounded-lg border border-gray-200")}
                                    onError={e => (e.currentTarget.src = defaultImg.src)}
/>
                                <span className={cn("text-base font-medium text-gray-900" )}>{post.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
            </div>
    )
}