import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Tech Squerel - Digital Services for imerging Startups',
  description: 'Tech Squerel Providing web developement, website design and creation, Digital Marketing, SEO and all kind of Digital Services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <body className={cn(`${inter.className} prose-h1:scroll-m-20 prose-h1:text-4xl prose-h1:font-extrabold prose-h1:tracking-tight prose-h1:lg:text-6xl prose-p:leading-7 prose-p:[&:not(:first-child)]:mt-6 prose-h2:mt-10 prose-h2:scroll-m-20  prose-h2:pb-2 prose-h2:text-3xl prose-h2:font-semibold prose-h2:tracking-tight prose-h2:transition-colors prose-h2:first:mt-0 prose-blockquote:mt-6 prose-blockquote:border-l-2 prose-blockquote:pl-6 prose-blockquote:italic prose-h3:mt-8 prose-h3:scroll-m-20 prose-h3:text-2xl prose-h3:font-semibold prose-h3:tracking-tight prose-ul:my-6 prose-ul:ml-6 prose-ul:list-disc prose-ul:[&>li]:mt-2 prose-h4:scroll-m-20 prose-h4:text-xl prose-h4:font-semibold prose-h4:tracking-tight`)}> <Navbar />{children}<Footer/></body>
    </html>
  )
}
