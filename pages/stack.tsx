import Container from 'components/Container';
import Image from 'next/future/image';
import { useEffect } from 'react';

export default function Uses() {
  useEffect(() => {
    fetch ('/api/logging?ref=stack', {
      method: 'POST',
      headers: {
        'Authorization': '492ef020-f8f9-11ea-9fa5-0242ac130003-2390fkv3k05svc'
      } 
  })
  }
  , [])
  return (
    <Container
      title="Techstack – Rishi Collins"
      description="Here's what technology I like to use the most for programming and for my everyday use. This includes languages, frameworks, libraries, tools, and hardware."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          My Stack
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          Here's what technology I like to use the most for programming and for my everyday use. This includes languages, frameworks, libraries, tools, and hardware.
        </p>
        <div className="prose dark:prose-dark w-full">
          <h3 id="computer-office">Programming Languages</h3>
          <ul>
            <li>Node.js/JavaScript</li>
            <li>TypeScript</li>
            <li>HTML/CSS</li>
            <li>C#</li>
            <li>Swift</li>
            <li>Python</li>
          </ul>
          <h3 id="audio-video">Sofware &amp; Frameworks</h3>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>AWS</li>
            <li>GitHub</li>
            <li>Visual Stuio Code</li>
            </ul>
          <h3 id="software">Hardware</h3>
          <ul>
            <li>Custom-Built PC with AMD Ryzen processor</li>
            <li>16-Inch MacBook Pro</li>
            <li>iPhone 13 Pro Max</li>
            <li>Samsung Galaxy for development</li>
          </ul>
        </div>
      </article>
    </Container>
  );
}
