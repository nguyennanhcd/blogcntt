import Link from 'next/link'

export default async function PostPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const { default: Post } = await import(`@/content/${id}.mdx`)

  if (!Post) {
    return (
      <div className='min-h-screen bg-background flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-foreground mb-4'>
            Post Not Found
          </h1>
          <p className='text-muted-foreground mb-8'>
            The article you&lsquo;re looking for doesn&lsquo;t exist.
          </p>
          <Link href='/' className='text-accent hover:underline'>
            Back to Articles
          </Link>
        </div>
      </div>
    )
  }

  return <Post />
}
