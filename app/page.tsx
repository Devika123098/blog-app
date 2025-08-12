import { cn } from "./lib/utils"
import BlogHighlights from "./components/BlogHighlights"
import { RecentPosts } from "./components/RecentPosts"
import About from "./components/About"
import Features from "./components/Features"
import Contact from "./components/Contact"
export default async  function HomePage() {

  return (
    <>
    <main className={cn("w-full min-h-screen bg-white text-black")}>
      <section className={cn("w-[90%] mx-auto")}>
        <BlogHighlights  />
        <RecentPosts/>
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