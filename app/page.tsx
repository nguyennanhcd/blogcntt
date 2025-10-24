import { FeaturedPosts } from '@/components/featured-posts'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { PostGrid } from '@/components/post-grid'

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
