import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
import { useEffect } from 'react';
import VideoPlayer from 'components/VideoPlayer';
import VideoCard from 'components/VideoCard';


export default function Home({fallbackData}) {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Ye Olde Bike Shoppe
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                Students {' '}
                <span className="font-semibold">Repairing Bikes.</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
               For our Project : Pomfret group, we took the initiative to collect bikes from community members, repairing them. Keep reading to learn more about our adventures!
              </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt="Bike Shoppe Logo"
                height={176}
                width={176}
                src="/avatar.png"
                sizes="30vw"
                priority
                className="filter "
              />
            </div>
          </div>
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Image Gallery
          </h3>
          <Link className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white" href="/gallery">
            View Photos
         </Link>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Featured Videos
          </h3>
          <div className="flex gap-6 flex-col md:flex-row">
            <Suspense fallback={null}>
           <VideoPlayer />
            </Suspense>
          </div>
          <span className="h-16" />
        </div>
      </Container>
    </Suspense>
  );
}

