import Link from 'next/link';
import NowPlaying from './NowPlaying';


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
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <NowPlaying />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link className="text-gray-500 hover:text-gray-600 transition" href="/">
            Home
          </Link>
          <Link className="text-gray-500 hover:text-gray-600 transition" href="/about">
              About
          </Link>
          <Link className="text-gray-500 hover:text-gray-600 transition" href="/blog">
              Blog
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/rishicollins">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/collinsrs">GitHub</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/rishicollins/">
            LinkedIn
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link className="text-gray-500 hover:text-gray-600 transition" href="/experience">
              Experience
          </Link>
          <Link className="text-gray-500 hover:text-gray-600 transition" href="/stack">
            Stack
          </Link>
          <Link className="text-gray-500 hover:text-gray-600 transition" href="/privacy-terms">
              Privacy &amp; Terms
          </Link>
        </div>
      </div>
      <p className="text-gray-500">
          © {new Date().getFullYear()} Rishi Collins. All rights reserved.
      </p>
      <p className="text-gray-500">
       Built with <Link href="https://nextjs.org/">Next.js</Link> with design inspired by <Link href="https://www.leerob.io/">Lee Robinson</Link>.
      </p>
    </footer>
  );
}


