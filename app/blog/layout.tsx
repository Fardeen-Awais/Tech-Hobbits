import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Blog Page - Tech Hobbit',
  description: 'The Blog page related to the Technology to help buisness that want grow with Tech Hobbit',
}
 
export default function Layout({

    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {children}
      </section>
    )
  }