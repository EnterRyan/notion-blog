"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode, useState } from "react"

type QueryProviderType={
  children : ReactNode
}

export default function ReactQueryProvider({children}:QueryProviderType){
  const [queryClient] = useState(()=>new QueryClient())
  return(
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}