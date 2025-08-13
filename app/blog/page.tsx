"use client"
import { useQuery } from "@tanstack/react-query"
import { post } from "../types/post"
import { cn } from "../lib/utils"
import BlogCard from "../components/BlogCard"
import Loader from "../components/Loader"

async function fetchPosts(): Promise<post[]> {
  const res = await fetch("https://688dabf0a459d5566b12deb8.mockapi.io/api/vi/posts",{ next: { revalidate: 60 } })
  if (!res.ok) throw new Error("Failed to fetch posts")
  return res.json()
}

export default function Blog() {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  })

  if (!data) return null
  if(isLoading) return <Loader/>
  return (
    <div className={cn("w-[90%] mx-auto py-12")}>
      <div className={cn("mb-10 text-center")}>
        <h2 className={cn("text-gray-900 font-bold text-2xl md:text-3xl mb-4 tracking-tight")}>Our Latest Insights</h2>
        <p className={cn("text-gray-700 text-lg max-w-2xl mx-auto")}>
          Dive into our collection of articles, guides, and stories covering a wide range of topics, designed to inform and inspire.
        </p>
      </div>
      <ul className={cn(
        "w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      )}>
        {data.map((post) => (
          <li key={post.id} className={cn("flex justify-center")}>
            <BlogCard
              image={post.image}
              title={post.title}
              content={post.body}
              profile={post.avatar}
              name={post.name}
              id={post.id}
              tag={post.tags}
              date={post.createdAt}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}