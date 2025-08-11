import React from 'react'
import { cn } from "../lib/utils"

function About() {
  return (
    <section id="about" className={cn("mt-15 w-full py-12")}>
      <div className={cn("w-full")}>
        <div className={cn("relative rounded-2xl border border-gray-200 bg-white shadow-md")}>
          <div className={cn("absolute left-0 top-0 h-full w-1.5 bg-gray-900/80 rounded-l-2xl hidden sm:block")} />
          <div className={cn("p-6 md:p-10")}>
            <h2 className={cn("font-bold text-2xl md:text-3xl text-center mb-10 text-gray-900 tracking-tight")}>
              Our Story: From Humble Beginnings to Industry Leadership
            </h2>

            <div className={cn("space-y-5")}>
              <p className={cn("text-gray-700 text-md md:text-lg leading-relaxed")}>
                Blog App was founded in 2020 with a simple mission: to empower voices. We believed that everyone has a story to tell, insights to share, or knowledge to impart. Our platform was built from the ground up to be intuitive, accessible, and a joy to use, allowing creators from all walks of life to connect with their audience.
              </p>

              <div className={cn("rounded-xl border border-gray-200 bg-gray-50 p-4")}>
                <p className={cn("text-gray-700 text-md md:text-lg italic leading-relaxed")}>
                  Building a place where ideas meet readers—reliably, simply, and beautifully.
                </p>
              </div>

              <p className={cn("text-gray-700 text-md md:text-lg leading-relaxed")}>
                Starting as a small team of passionate developers and content strategists, we quickly grew, fueled by the positive feedback and incredible stories shared by our early users. We continuously refined our tools, introduced innovative features, and fostered a vibrant community that thrives on creativity and collaboration.
              </p>

              <p className={cn("text-gray-700 text-md md:text-lg leading-relaxed")}>
                Today, Blog App stands as a leading platform for content creation and discovery. We pride ourselves on our commitment to user privacy, our robust publishing tools, and our dedication to helping ideas flourish. Our journey is a testament to the power of shared knowledge and the endless possibilities of digital expression.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About