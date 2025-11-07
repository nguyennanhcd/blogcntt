import { FeaturedPosts } from '@/components/HomePage/featured-posts'
import { Footer } from '@/components/HomePage/footer'
import { Header } from '@/components/HomePage/header'
import { Hero } from '@/components/HomePage/hero'
import { PostGrid } from '@/components/HomePage/post-grid'

export default function Home() {
  return (
    <main className='min-h-screen bg-background'>
      <Header />
      <Hero />
      <FeaturedPosts />
      <PostGrid />
      <Footer />
    </main>
  )
}
