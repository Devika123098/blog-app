import React from 'react'
import { cn } from "../lib/utils"
import Link from 'next/link'

export default function Contact() {
  return (
    <section className={cn("w-full py-15")}>
      <div className={cn("max-w-3xl mx-auto px-4")}>
        <div className={cn(
          "rounded-2xl border border-gray-200 bg-white/90 backdrop-blur",
          "shadow-lg p-8 md:p-10 text-center"
        )}>
          <h4 className={cn("text-xl font-bold text-gray-900 mb-3")}>
            Ready to Start Your Blogging Journey?
          </h4>
          <p className={cn("text-sm text-gray-700 mb-6")}>
            Join thousands of creators who trust Blog App for their online presence. It's time to share your story with the world.
          </p>
          <div className={cn("flex justify-center")}>
            <Link
              href="mailto:example@gmail.com"
              className={cn(
                "inline-flex items-center justify-center",
                "text-gray-900 bg-white px-6 py-2 rounded-full text-sm font-semibold",
                "border border-gray-200 shadow-sm",
                "hover:shadow-md hover:-translate-y-0.5 hover:scale-105",
                "transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
              )}
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}