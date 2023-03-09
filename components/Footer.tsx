import Link from 'next/link';


const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link className="text-gray-500 hover:text-gray-600 transition" href="/">
            Home
          </Link>
          <Link className="text-gray-500 hover:text-gray-600 transition" href="/gallery">
              Gallery
          </Link>
          <Link className="text-gray-500 hover:text-gray-600 transition" href="/blog">
              Blog
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          
        </div>
        <div className="flex flex-col space-y-4">
         
        </div>
      </div>
      <p className="text-gray-500">
          © {new Date().getFullYear()} Ye Olde Bike Shoppe
      </p>
      <p className="text-gray-500">
       Created with <Link href="https://nextjs.org/">Next.js</Link> with design inspired by <Link className='text-blue-600 dark:text-blue-400' href="https://rishicollins.23/">Rishi Collins '23</Link>.
      </p>
    </footer>
  );
}


