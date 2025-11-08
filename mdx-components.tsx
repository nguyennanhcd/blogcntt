// mdx-components.tsx   (place next to app/ or in src/)
import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import { ImageProps } from 'next/image'

const components = {
  img: (props) => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      {...(props as ImageProps)}
      sizes='(max-width: 768px) 100vw, 768px'
      style={{ width: '100%', height: 'auto' }}
      className='rounded-lg'
    />
  )
  // you can add h1, h2, code, etc. here later
} satisfies MDXComponents

export function useMDXComponents(): MDXComponents {
  return components
}
