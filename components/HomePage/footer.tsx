import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className='bg-primary text-primary-foreground mt-20'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid md:grid-cols-4 gap-8 mb-12'>
          <div>
            <h3 className='text-lg font-bold mb-4'>Insights</h3>
            <p className='text-sm opacity-80'>
              Exploring design, development, and digital experiences.
            </p>
          </div>
          <div>
            <h4 className='font-semibold mb-4'>Navigation</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='#'
                  className='opacity-80 hover:opacity-100 transition-opacity'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='opacity-80 hover:opacity-100 transition-opacity'
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='opacity-80 hover:opacity-100 transition-opacity'
                >
                  Categories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-4'>Resources</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='#'
                  className='opacity-80 hover:opacity-100 transition-opacity'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='opacity-80 hover:opacity-100 transition-opacity'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='opacity-80 hover:opacity-100 transition-opacity'
                >
                  RSS Feed
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-4'>Follow</h4>
            <div className='flex gap-4'>
              <Link
                href='#'
                className='opacity-80 hover:opacity-100 transition-opacity'
              >
                <Twitter size={20} />
              </Link>
              <Link
                href='#'
                className='opacity-80 hover:opacity-100 transition-opacity'
              >
                <Github size={20} />
              </Link>
              <Link
                href='#'
                className='opacity-80 hover:opacity-100 transition-opacity'
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className='border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-80'>
          <p>&copy; 2025 Insights. All rights reserved.</p>
          <div className='flex gap-6 mt-4 md:mt-0'>
            <Link href='#' className='hover:opacity-100 transition-opacity'>
              Privacy
            </Link>
            <Link href='#' className='hover:opacity-100 transition-opacity'>
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
