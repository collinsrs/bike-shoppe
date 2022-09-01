import Link from 'next/link';
import { useEffect } from 'react';

import Container from 'components/Container';

export default function NotFound() {
  useEffect(() => {
    fetch ('/api/logging?ref=404page', {
      method: 'POST',
      headers: {
        'Authorization': '492ef020-f8f9-11ea-9fa5-0242ac130003-2390fkv3k05svc'
      } 
  })
  }
  , [])
  return (
    <Container title="404 – Rishi Collins">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          404 – Page Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          I've looked long, hard, and clear, but I still can't find the page you're looking for using the requested URL. Are you sure you got it Right? Maybe check the spelling?
          If you're positive that you got it right, maybe it might have been taken down. 
        </p>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
