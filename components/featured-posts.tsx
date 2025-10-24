import { ArrowRight } from 'lucide-react'

const featuredPosts = [
  {
    id: 1,
    title: 'Building Accessible Interfaces',
    excerpt:
      'How to create digital experiences that work for everyone, with practical techniques and real-world examples.',
    category: 'Design',
    date: 'Oct 20, 2024',
    readTime: '8 min read'
  },
  {
    id: 2,
    title: 'React Performance Optimization',
    excerpt:
      'Deep dive into rendering optimization, memoization strategies, and profiling tools to make your apps faster.',
    category: 'Development',
    date: 'Oct 18, 2024',
    readTime: '12 min read'
  }
]

export function FeaturedPosts() {
  return (
    <section className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <h2 className='text-3xl font-bold text-foreground mb-12'>
        Featured Articles
      </h2>
      <div className='grid md:grid-cols-2 gap-8'>
        {featuredPosts.map((post) => (
          <article key={post.id} className='group cursor-pointer'>
            <div className='bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors h-full flex flex-col justify-between'>
              <div>
                <div className='flex items-center gap-3 mb-4'>
                  <span className='text-sm font-medium text-accent'>
                    {post.category}
                  </span>
                  <span className='text-sm text-muted-foreground'>•</span>
                  <span className='text-sm text-muted-foreground'>
                    {post.date}
                  </span>
                </div>
                <h3 className='text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors'>
                  {post.title}
                </h3>
                <p className='text-muted-foreground leading-relaxed mb-4'>
                  {post.excerpt}
                </p>
              </div>
              <div className='flex items-center justify-between pt-4 border-t border-border'>
                <span className='text-sm text-muted-foreground'>
                  {post.readTime}
                </span>
                <ArrowRight
                  size={20}
                  className='text-accent group-hover:translate-x-1 transition-transform'
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
