import Container from 'components/Container';
import { useEffect } from 'react';
import Image from 'next/image';

export default function PhotoGallery() {
    return (
        <Container title='Gallery - Ye Olde Bike Shoppe' >
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
         Photo Gallery
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>We're so excited to show you what we've been working on..</h2>
          <p className='text-gray-600 dark:text-gray-400'>Here are some photos of our work in progress.</p>
          <Image 
          src='https://aws.syncfind.io/pp/Image_20230308_094852_549.jpeg'
          alt='Ye Olde Bike Shoppe'
          width={500}
          height={500}
          />
          <br />
          <Image
          src='https://aws.syncfind.io/pp/Image_20230308_094852_758.jpeg'
          alt='Ye Olde Bike Shoppe'
          width={500}
          height={500}
          />
          <br />
          <Image
          src='https://aws.syncfind.io/pp/Image_20230308_094852_949.jpeg'
          alt='Ye Olde Bike Shoppe'
          width={500}
          height={500}
          />  
          <br />
         <Image
          src='https://aws.syncfind.io/pp/Image_20230308_094853_290.jpeg'
          alt='Ye Olde Bike Shoppe'
          width={500}
          height={500}
        />   
         <br />
        <Image
          src='https://aws.syncfind.io/pp/Image_20230308_094853_494.jpeg'
          alt='Ye Olde Bike Shoppe'
          width={500}
          height={500}
        />  
                 <br />
        <Image
          src='https://aws.syncfind.io/pp/Image_20230308_094853_729.jpeg'
          alt='Ye Olde Bike Shoppe'
          width={500}
          height={500}
        />  
                 <br />
        <Image
          src='https://aws.syncfind.io/pp/Image_20230308_094853_951.jpeg'
          alt='Ye Olde Bike Shoppe'
          width={500}
          height={500}
        />  
                 <br />
        <Image
          src='https://aws.syncfind.io/pp/Image_20230308_094854_194.jpeg'
          alt='Ye Olde Bike Shoppe'
          width={500}
          height={500}
        />  
                 <br />
        <Image
          src='https://aws.syncfind.io/pp/Image_20230308_094854_668.jpeg'
          alt='Ye Olde Bike Shoppe'
          width={500}
          height={500}
        />  
                 <br />
        <Image
          src='https://aws.syncfind.io/pp/Image_20230308_094854_904.jpeg'
          alt='Ye Olde Bike Shoppe'
          width={500}
          height={500}
        />  
                 <br />
        <Image
          src='https://aws.syncfind.io/pp/Image_20230308_094855_134.jpeg'
          alt='Ye Olde Bike Shoppe'
          width={500}
          height={500}
        />  
                 <br />
        <Image
          src='https://aws.syncfind.io/pp/Image_20230308_094855_348.jpeg'
          alt='Ye Olde Bike Shoppe'
          width={500}
          height={500}
        />  
                 <br />
        <Image
          src='https://aws.syncfind.io/pp/Image_20230308_094855_633.jpeg'
          alt='Ye Olde Bike Shoppe'
          width={500}
          height={500}
        />  
                 <br />
        <Image
          src='https://aws.syncfind.io/pp/Image_20230308_094855_856.jpeg'
          alt='Ye Olde Bike Shoppe'
          width={500}
          height={500}
        />     
                 <br />  
         <Image
          src='https://aws.syncfind.io/pp/Image_20230308_094856_193.jpeg'
          alt='Ye Olde Bike Shoppe'
          width={500}
          height={500}
        />   
                 <br /> 
         <Image
          src='https://aws.syncfind.io/pp/Image_20230308_094856_390.jpeg'
          alt='Ye Olde Bike Shoppe'
          width={500}
          height={500}
        />    
            
        </div>
      </div>
        </Container>
    )
}
