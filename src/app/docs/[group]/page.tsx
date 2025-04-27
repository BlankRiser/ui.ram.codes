"use client"

import { getComponentGroup } from "@/config/components-list"
import { useParams } from "next/navigation"

// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function ComponentGroupPage() {

  const { group } = useParams()

  const componentGroup = getComponentGroup(group as string)
  if (!componentGroup) {
    return (
      <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
        <h1 className="text-2xl font-bold">Group not found</h1>
        <p className="text-muted-foreground">
          The group you are looking for does not exist.
        </p>
      </div>
    )
  }


  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      groups page : {group}
    </div>
  )
}
