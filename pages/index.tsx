import { Suspense } from 'react';
import Image from 'next/future/image';
import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import Contact from 'components/Contact';
import { useEffect } from 'react';


export default function Home({fallbackData}) {
  useEffect(() => {
    fetch ('/api/logging?ref=main', {
      method: 'POST',
      headers: {
        'Authorization': '492ef020-f8f9-11ea-9fa5-0242ac130003-2390fkv3k05svc'
      } 
  })
  }
  , [])
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Rishi Collins
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                Student, aspiring{' '}
                <span className="font-semibold">Software Engineer/Developer</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                Experienced High-School student with a strong passion for technology, I am working to fulfill my dreams as a software developer.
              </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt="Rishi Collins"
                height={176}
                width={176}
                src="/avatar.jpg"
                sizes="30vw"
                priority
                className="rounded-full filter grayscale"
              />
            </div>
          </div>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Featured Posts
          </h3>
          <div className="flex gap-6 flex-col md:flex-row">
            <BlogPostCard
              title="My Programming: The Journey and Future"
              slug="journey"
              gradient="from-[#D8B4FE] to-[#818CF8]"
            />
            <BlogPostCard
              title="My First Full-Scale Web Application"
              slug="building-a-full-scale-web-app"
              gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            />
            <BlogPostCard
              title="From HTML to React, to Next,js (aka now.js)"
              slug="html-to-react-to-next"
              gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            />
          </div>
          <Link href="/blog">
            <a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
              Read all posts
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </a>
          </Link>
          <span className="h-16" />
          <Contact fallbackData={fallbackData} props={undefined} />
        </div>
      </Container>
    </Suspense>
  );
}

