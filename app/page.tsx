import { cn } from "./lib/utils"
import BlogHighlights from "./components/BlogHighlights"
import { RecentPosts } from "./components/RecentPosts"
export default async  function HomePage() {

  return (
    <main className={cn("w-full min-h-screen bg-white text-black")}>
      <div className={cn("w-[90%] mx-auto")}>
        <BlogHighlights  />
        <RecentPosts/>
        <div id="about" className={cn("mt-15")}>
            <h2 className={cn("font-bold text-2xl md:text-4xl text-center mb-10")}>Our Story: From Humble Beginnings to Industry Leadership</h2>
            <p className={cn("text-gray-700 text-md md:text-lg mb-5")}>Blog App was founded in 2020 with a simple mission: to empower voices. We believed that everyone has a story to tell, insights to share, or knowledge to impart. Our platform was built from the ground up to be intuitive, accessible, and a joy to use, allowing creators from all walks of life to connect with their audience.</p>
            <p className={cn("text-gray-700 text-md md:text-lg mb-5")}>Starting as a small team of passionate developers and content strategists, we quickly grew, fueled by the positive feedback and incredible stories shared by our early users. We continuously refined our tools, introduced innovative features, and fostered a vibrant community that thrives on creativity and collaboration.</p>
            <p className={cn("text-gray-700 text-md md:text-lg")}>Today, Blog App stands as a leading platform for content creation and discovery. We pride ourselves on our commitment to user privacy, our robust publishing tools, and our dedication to helping ideas flourish. Our journey is a testament to the power of shared knowledge and the endless possibilities of digital expression.</p>
        </div>
      </div>
    </main>
  )
}