import { Suspense, useState } from 'react';

import Container from 'components/Container';
import BlogPost from 'components/BlogPost';
import { InferGetStaticPropsType } from 'next';
import { indexQuery } from 'lib/queries';
import { getClient } from 'lib/sanity-server';
import { Post } from 'lib/types';

export default function Blog({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Container
      title="Blog – Rishi Collins"
      description="My journey attempting to achieve my dreams."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Blog
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {`Here you can find my thoughts, ranging from anything to programming or my view of the world.
            So far, I've written ${posts.length} articles on this site.
            Use the search below to filter by title.`}
        </p>
        <p className='mb-4 text-gray-600 dark:text-gray-400'>
          Views expressed on this blog are solely my own, and are not representative of any person, business entity, or institution that I may be affiliated with at any given time, unless stated otherwise.
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {!searchValue && (
          <>
            <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
              Most Popular
            </h3>
            <BlogPost
              title="My First Full-Scale Web Application"
              excerpt="What building a full-scale application taught me, the technologies involved, what I built, and how I got there."
              slug="building-a-full-scale-web-app"
            />
            <BlogPost
              title="My Programming: The Journey and Future"
              excerpt="A trip back in time on how I started my journey as a developer from a technological passion."
              slug="journey"
            />
          </>
        )}
        <Suspense fallback={null}>
          <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
            All Posts
          </h3>
          {!filteredBlogPosts.length && (
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              No posts found.
            </p>
          )}
          {filteredBlogPosts.map((post) => (
            <BlogPost
              key={post.title}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
            />
          ))}
        </Suspense>
      </div>
    </Container>
  );
}

export async function getStaticProps({ preview = false }) {
  const posts: Post[] = await getClient(preview).fetch(indexQuery);

  return { props: { posts } };
}
