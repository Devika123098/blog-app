import { cn } from "./lib/utils"
import BlogHighlights from "./components/BlogHighlights"
import { RecentPosts } from "./components/RecentPosts"
export default async  function HomePage() {

  return (
    <main className={cn("w-full min-h-screen bg-white text-black")}>
      <div className={cn("w-[90%] mx-auto")}>
        <BlogHighlights  />
        <RecentPosts/>
      </div>
    </main>
  )
}