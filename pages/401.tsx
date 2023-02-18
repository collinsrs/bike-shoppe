import Link from 'next/link';
import { useEffect } from 'react';

import Container from 'components/Container';
import type { NextApiRequest } from 'next';

export default function NotFound(props) {
    const error = props.setError;
    const path = props.setPath;
  useEffect(() => {
    fetch ('/api/logging?ref=404page', {
      method: 'POST',
      headers: {
        'Authorization': '492ef020-f8f9-11ea-9fa5-0242ac130003-2390fkv3k05svc'
      }
    })
    fetch ('api/hooks/slack?slug=401', {
      method: 'POST',
    })
  }, [])
  
  return (
    <Container title="401 Unauthorized – Rishi Collins">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Error - 401 Access Unauthorized
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          You have been redirected to this page as you have attempted to access a restricted resource.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
            Error: {error}
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
            URL Path: {path}
        </p>
        <Link legacyBehavior href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  );
}

export async function getServerSideProps({req}) {
    if (req.query.referer === 'gql') {
        const setError = 'You are not authorized to access this resource.'
        const setPath = '/api/graphql'
        return {
            props: {
                setError,
                setPath
            }
        }
    } else {
        const setError = 'No referring URL was included with this request.'
        const setPath = '/'
        return {
            props: {
                setError,
                setPath
            }
        }
    }
}