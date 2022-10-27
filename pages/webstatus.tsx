import Container from "components/Container";
import { useEffect } from "react";
import Link from "next/link";

export default function VitalsPage() {
    useEffect(() => {
        fetch ('/api/logging?ref=checkly', {
          method: 'POST',
          headers: {
            'Authorization': '492ef020-f8f9-11ea-9fa5-0242ac130003-2390fkv3k05svc'
          } 
      })
      fetch ('api/hooks/slack?slug=health-checkly', {
        method: 'POST',
      })
      }
      , [])
    return (
        <Container title='Status Check'>
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
                <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    Status Check
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                    This page has no displayable content, and is being used to monitor the site for status checks. If you are seeing this page, all is up and running.
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <Link href='/'>
                        <a>Return to Home</a>
                    </Link>
                </button>
            </div>
        </Container>
    )
}