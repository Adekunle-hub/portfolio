import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-[48px] rounded-md border border-white/20 focus:border-accent font-light bg-primary px-4 py-5 text-xs placeholder:text-white/60 outline-none",
        className
      )}
      {...props}
    />
  )
}

export { Input }
