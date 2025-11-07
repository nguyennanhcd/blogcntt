import { Calendar, Clock } from 'lucide-react'

const allPosts = [
  {
    id: 3,
    title: 'CSS Grid Layouts Explained',
    excerpt:
      'Master modern CSS Grid with practical examples and common patterns.',
    category: 'CSS',
    date: 'Oct 15, 2024',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'TypeScript Best Practices',
    excerpt:
      'Write safer, more maintainable code with TypeScript advanced features.',
    category: 'TypeScript',
    date: 'Oct 12, 2024',
    readTime: '10 min read'
  },
  {
    id: 5,
    title: 'Web Performance Metrics',
    excerpt:
      'Understanding Core Web Vitals and how to measure real user experience.',
    category: 'Performance',
    date: 'Oct 10, 2024',
    readTime: '7 min read'
  },
  {
    id: 6,
    title: 'Design Systems at Scale',
    excerpt: 'Building and maintaining design systems for large organizations.',
    category: 'Design',
    date: 'Oct 8, 2024',
    readTime: '9 min read'
  },
  {
    id: 7,
    title: 'API Design Principles',
    excerpt:
      'Creating intuitive and scalable APIs that developers love to use.',
    category: 'Backend',
    date: 'Oct 5, 2024',
    readTime: '11 min read'
  },
  {
    id: 8,
    title: 'Testing Strategies',
    excerpt:
      'Unit, integration, and E2E testing approaches for robust applications.',
    category: 'Testing',
    date: 'Oct 1, 2024',
    readTime: '8 min read'
  }
]

export function PostGrid() {
  return (
    <section className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <h2 className='text-3xl font-bold text-foreground mb-12'>All Articles</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {allPosts.map((post) => (
          <article
            key={post.id}
            className='group cursor-pointer bg-card border border-border rounded-lg p-6 hover:border-accent transition-all hover:shadow-lg'
          >
            <div className='flex items-center gap-2 mb-3'>
              <span className='inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full'>
                {post.category}
              </span>
            </div>
            <h3 className='text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2'>
              {post.title}
            </h3>
            <p className='text-sm text-muted-foreground mb-4 line-clamp-2'>
              {post.excerpt}
            </p>
            <div className='flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border'>
              <div className='flex items-center gap-1'>
                <Calendar size={14} />
                {post.date}
              </div>
              <div className='flex items-center gap-1'>
                <Clock size={14} />
                {post.readTime}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
