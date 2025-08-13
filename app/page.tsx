import { cn } from "./lib/utils"
import BlogHighlights from "./components/BlogHighlights"
import { RecentPosts } from "./components/RecentPosts"
import About from "./components/About"
import Features from "./components/Features"
import Contact from "./components/Contact"
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchPosts } from "./lib/api/posts"
export default  async function HomePage() {
   const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })
  return (
    <>
    <main className={cn("w-full min-h-screen bg-white text-black")}>
      <section className={cn("w-[90%] mx-auto")}>
        <HydrationBoundary state={dehydrate(queryClient)}>
        <BlogHighlights  />
        <RecentPosts/>
        </HydrationBoundary>
        <About/>
        <Features/>
      </section>
    </main>
    <footer id="contact" className={cn("w-full mt-15 bg-gray-900 text-white flex justify-center")}>
      <div className={cn("w-[90%]")}>
          <Contact/>
      </div>
    </footer>
    </>
  )
}