import Link from 'next/link';
import Image from 'next/future/image';

import Container from 'components/Container';
import avatar from 'public/avatar.jpg';
import avatarBW from 'public/avatar-bw.jpg';

export default function About() {
  return (
    <Container title="About Me – Rishi Collins">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Hello! I&#39;m Rishi, I&#39;m a current student with a passion for technology and software development.  </h2>
          <h3>The Basics</h3>
          <p>
          I was born in the north of England, but I moved to America at the age of six, and have lived just outside New York City ever since.
          Ever since I was a kid, I have always been interested in the world of technology. 
          I knew that this was my passion from an early age. 
          </p>
          <h3>A New Beginning</h3>
          <p>
          During my first year of high school, I decided to start coding and making software programs. 
          Initially starting with Python, making simple terminal applications, I was able to grasp the idea of development and “thinking like a programmer”. 
          Following that, I moved onto making Windows applications with C#, picking up the concept of object-oriented programming. 
          For the most part, I&#39;m a self-taught programmer. 
          </p>
          <h3>Creating Dreams</h3>
          <p>
          Following this, I had the dream of making real, usable applications. So I turned to JavaScript and web development. 
          Starting with learning a little bit of HTML and CSS, I moved onto building small API&#39;s with node.js, leveraging the Express framework. 
          In an effort to combine all of this knowledge into one power, I turned to the React framework. 
          I&#39;ve been working with React for over a year now, and have since learned many of the great concepts it has to offer, such as seamless state management. 
          </p>
          <h3>Current Plans and Experiences</h3>
          <p>
            Now, I&#39;m in the process of learning more about Next.js, and its lighting fast pages with Server-Side rendering. Wondered how this website is so quick? Thank Next. 
          </p>
          <p>
          On the backend side, I have significant experience with API&#39;s and databases, which includes connection to a front end application, authentication/authorization, and data management using ORM&#39;s. 
          My next step in API&#39;s is learning GraphQL, and leveraging its power in scalable applications. 
          </p>
          <h3>What Else?</h3>
          <p>
          Outside of programming, I enjoy spending time with my family and friends, driving, playing soccer, and volunteering. 
          </p>
        </div>
      </div>
    </Container>
  );
}
