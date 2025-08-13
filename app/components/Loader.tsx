import React from 'react'
import {cn} from "../lib/utils"
export default function Loader() {
  return (
    <div className={cn(" w-full min-h-screen flex items-center justify-center p-6")} role="status" aria-live="polite" aria-busy="true">
  <div className={cn("relative w-12 h-12 animate-spin-pulse")}>
    <span className={cn("absolute top-0 left-0 w-5 h-5 rounded-full bg-[#333]")} />
    <span className={cn("absolute top-0 right-0 w-5 h-5 rounded-full bg-[#333]")} />
    <span className={cn("absolute bottom-0 left-0 w-5 h-5 rounded-full bg-[#333]")} />
    <span className={cn("absolute bottom-0 right-0 w-5 h-5 rounded-full bg-[#333]")} />
  </div>
</div>
  )
}

