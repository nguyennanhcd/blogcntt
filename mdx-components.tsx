// mdx-components.tsx
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className='text-5xl md:text-6xl font-display font-bold mt-16 mb-8 text-foreground leading-tight'>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className='text-3xl md:text-4xl font-display font-semibold mt-12 mb-6 text-foreground'>
        {children}
      </h2>
    ),
    p: ({ children }) => (
      <p className='font-sans text-lg leading-relaxed text-muted-foreground my-5'>
        {children}
      </p>
    ),
    pre: ({ children }) => (
      <pre className='not-prose font-mono bg-gray-900 text-gray-100 p-5 rounded-xl overflow-x-auto text-sm my-8'>
        {children}
      </pre>
    )
    // ... các phần khác
  }
}
