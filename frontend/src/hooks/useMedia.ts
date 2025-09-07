import { useQuery } from "@tanstack/react-query"
import { api } from "../lib/api"

// Define TypeScript type (optional, helps with autocompletion)
export type MediaItem = {
  id: string
  title: string
  type: "MOVIE" | "TV"
  year?: number
  genres?: string[]
  rating?: number
  watched: boolean
}

export function useMedia(params?: Record<string, any>) {
  return useQuery({
    queryKey: ["media", params],
    queryFn: async () => {
      const res = await api.get("/media", { params })
      return res.data as { data: MediaItem[]; meta: any }
    },
    keepPreviousData: true,
  })
}
