import { cn } from "./lib/utils"
import BlogHighlights from "./components/BlogHighlights"

export default async  function HomePage() {

  return (
    <main className={cn("w-full min-h-screen bg-white text-black py-6")}>
      <div className={cn("w-[90%] mx-auto")}>
        <BlogHighlights  />
      </div>
    </main>
  )
}