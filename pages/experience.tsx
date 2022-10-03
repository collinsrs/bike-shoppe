import Container from 'components/Container';
import { useEffect } from 'react';

export default function ExperienceResume() {
    useEffect(() => {
        fetch ('/api/logging?ref=experience', {
          method: 'POST',
          headers: {
            'Authorization': '492ef020-f8f9-11ea-9fa5-0242ac130003-2390fkv3k05svc'
          } 
      })
      }
      , [])
    return (
        <Container title='My Experience - Rishi Collins' >
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          My Experience 
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>I've had a lot of experience for my age. Read below to learn more.</h2>
          <h3 id='jcc'>Summer Camp Counselor & Specialist</h3>
          <h5 className='text-gray-500'>Stamford JCC | Stamford, CT</h5>
          <h6 className='text-gray-500'>June - August 2022</h6>
          <p>
          During the summer of 2022, I worked at a local day camp, hired as a counselor. Initially, I worked with children primarily ages 3-4 and subsequently ages 7-8. 
          I would oversee the group's management and execution of daily routines and activities. On average, the size of the group was ~17 children. 
          </p>
          <p>
          Due to staffing changes, I was promoted to Specialist three weeks in, specializing in the Adventure Course sector. The adventure course entailed three zip lines and a ropes course. 
          This included working with children of all ages. I was trained for proper zipline safety methods and other techniques such as belaying and intaking. 
          My daily activities consisted of running activities on the ropes course, coordinating with counselors, and assisting with the zipline on zip days. 
          This included, but is not limited to belaying, clipping, harnessing, intaking, and safety checks. 
          </p>
          <p>
          Overall, I grew and learned a lot from this summer experience.
          I honed my leadership skills, and developed new skills such as working with children of all ages, and being in a workplace environment, including liaising with supervisors and managers.
          I am very grateful for this experience and would highly recommend that one apply for a position of this kind.
          </p>
          <h3>Online Store - Creator and Owner</h3>
          <h5 className='text-gray-500'>Self-Employed | Online</h5>
           <h6 className='text-gray-500'>June 2020 - August 2021</h6>
          <p>
          I started this business as a sole proprietor, running three Shopify stores overtime with it. This started mainly as a hobby in late 2019, creating stores with my friends and playing around with them, attempting to make and sell clothes and other small items but never really succeeded
          ; not enough time nor effort was devoted to it, yet from this experience I stayed determined.
          </p> 
          <p>
          Over the pandemic, I wanted to make some money and learned about drop shipping. 
          Since I had some previous experience playing around with Shopify and making websites, it was easy for me to make these sites and get them online and loaded with products. 
          The primary store (based on traffic and revenue) sold two products: two separate variants of Off-White inspired keychains. 
          This store hit its peak during the summer of 2020, and was incredibly successful. 
          I learned marketing skills from this, having to market my products through advertisement platforms such as Facebook Ads, Snapchat Ads, and Google Ad Platform.
          </p>
          <p>
          I stopped running the stores and selling products in early 2021, to focus on schoolwork and other projects I was doing (see below). The business was formally dissolved in August.
          </p>
          <h3>Local Cafe Worker</h3>
          <h5 className='text-gray-500'>Bobo's Cafe | Ridgefield, CT</h5>
          <h6 className='text-gray-500'>June - August 2020</h6>
          <p>
            My first ever job, I worked as a member of staff at a local cafe. I was responsible for making smoothies, bowls, waffles, frozen drinks, and 
            subsequently serving them to customers. I was also responsible for cleaning the workstation, bringing supplies to the workstation, and unloading produce from incoming delivery
            vehicles and storing them in the garage warehouse. 
          </p>
        </div>
      </div>
        </Container>
    )
}
