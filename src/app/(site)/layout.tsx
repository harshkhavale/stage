import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'
import { dark } from '@clerk/themes'
import Navigation from '@/components/site/navigation'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <Navigation/>
    {children}</div>
  )
}

export default HomeLayout
