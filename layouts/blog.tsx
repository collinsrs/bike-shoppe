import Image from 'next/image';
import { parseISO, format } from 'date-fns/fp';
import { PropsWithChildren, Suspense } from 'react';

import Container from 'components/Container';
import { Post } from 'lib/types';
import { urlForImage } from 'lib/sanity';



export default function BlogLayout({
  children,
  post
}
: PropsWithChildren<{ post: Post }>) {
  const standardizedDate = format(
    'MMMM dd, yyyy',
    parseISO(post.date)
  );
  return (
    <Container
      title={`${post.title} – Rishi Collins`}
      description={post.excerpt}
      image={urlForImage(post.coverImage).url()}
      date={new Date(post.date).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="Rishi Collins"
              height={24}
              width={24}
              sizes="20vw"
              src="/avatar.jpg"
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {'by Rishi Collins | '}
              {standardizedDate}
            </p>
          </div>
    
        </div>
        <Suspense fallback={null}>
          <div className="w-full mt-4 prose dark:prose-dark max-w-none">
            {children}
          </div>
          <div className="mt-8">
          </div>
          <div className="text-sm text-blue-800 dark:text-blue-400 font-bold">
            <a
              href={`https://mobile.twitter.com/compose/tweet?text=${encodeURIComponent(
                `https://rishicollins.com/blog/${post.slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {'Share to a Tweet'}
            </a>
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300">
            <h6 className='font-semibold'>Date Last Updated: {standardizedDate}</h6>
          </div>
        </Suspense>
      </article>
    </Container>
  );
}
