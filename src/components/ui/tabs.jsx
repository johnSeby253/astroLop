import * as React from "react"
import { cva } from "class-variance-authority"
import { Tabs as TabsPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"

/* ---------------- Root Tabs ---------------- */

function Tabs({ className, orientation = "horizontal", ...props }) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        "group/tabs flex gap-2 data-[orientation=horizontal]:flex-col",
        className
      )}
      {...props}
    />
  )
}

/* ---------------- Tabs List Variants ---------------- */

const tabsListVariants = cva(
  "inline-flex items-center justify-start",
  {
    variants: {
      variant: {
        default:
          "",
        pill:
          "bg-[] rounded-lg p-[3px] gap-1",
        astroTabs:
          "w-fit h-12 px-[5px] bg-white rounded-2xl shadow-[0px_1px_6px_rgba(0,0,0,0.23)] flex items-center gap-5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({ className, variant = "default", ...props }) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

/* ---------------- Tabs Trigger Variants ---------------- */

const tabsTriggerVariants = cva(
  "flex items-center justify-center font-urbanist text-[16px] transition-all",
  {
    variants: {
      variant: {

        /* CURRENT DESIGN (underline style) */
        default:
          "px-10 py-1 border-b-2 border-transparent text-Light-text data-[state=active]:border-b-primary data-[state=active]:text-primary data-[state=active]:font-bold",

        /* SECOND DESIGN (pill style) */
        pill:
          "px-5 py-2 bg-[#EBEBEB] rounded-md text-[#615E65] font-semibold data-[state=active]:bg-[#7D53B3] data-[state=active]:text-white",
        astroTabs:
          "px-4 py-2 rounded-2xl text-neutral-500 font-medium font-inter flex items-center gap-2 " +
          "data-[state=active]:bg-primary data-[state=active]:text-white",

      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsTrigger({ className, variant = "default", ...props }) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(tabsTriggerVariants({ variant }), className)}
      {...props}
    />
  )
}

/* ---------------- Tabs Content ---------------- */

function TabsContent({ className, ...props }) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  tabsListVariants,
  tabsTriggerVariants,
}