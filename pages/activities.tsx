import Container from '../components/Container'
import Link from 'next/link'
import { signIn, getSession } from 'next-auth/react'


export default function Activities(props) {
    const session = props.session;
    var isUser = props.isUser;
    return (
        <Container
            title="Activities – Rishi Collins"
            description="A list of activities I do in my free time."
        >
           {}
        
        {isUser === true ? (
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    Activities
                </h1>
                <div className='mb-8 prose dark:prose-dark leading-6'>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    This page serves as a list of activities that I take pride in doing, inside and out of school. 
                    This serves as an extenstion to the Common App, as I believe that I have more to describe to each activity than 150 characters.
                </p>
               <h3 id='programming'>Programming</h3>
                <p>
                Having been around technology for most of my life, computers have long been my passion. 
                I have been fixing my technology and those around me along with advice for almost as long as I have been able to count to ten. 
                I started programming as a sophomore in high school, taking a course from my cousin in Python. 
                Since then, I have continued my passion for programming, expanding into the world of mobile and web applications, and have received no further training besides what I have found online. 
                I am now a full, self-taught programmer capable of developing full-scale applications. I intend to further this passion in higher education to enter the professional tech industry.
                </p>
                <h3 id='travelers-job-shadowing'>Developer Job Shadowing</h3>
                <p>
                Over the summer, I got to spend a few days job shadowing software developers working for Travelers Insurance, where my dad works for. 
                I met with multiple individuals and came into the office, working with AI, Frontend, Architecture, and Mobile engineers. 
                I got to see some of their tech stack, best practices, and how they leverage the power of technology at Travelers and in the Insurance Industry. 
                The developers were very impressed with my previous work and general programming knowledge for my age relative to the amount of time I have been coding. 
                Potential internships down the line were also discussed, and I struck them as an individual who would be a good fit for such an opportunity.
                </p>
                <h3 id='soccer'>Soccer</h3>
                <p>
                    I have had a passion for soccer, more properly called football, since an early age. My father grew up near Manchester and supported Manchester United his entire life, and I watched games with him even when I was a baby. 
                Around the age of six, I started playing on club teams. After a season, my dad started to coach the team; he got very involved with the program. 
                I always wanted to be by his side and play on his team at the house level. Everyone loved him, and I enjoyed being around him and with my friends at the same time. 
                I withdrew from the academy program and stuck to the house program with my dad in second grade. 
                I have played on Middle School teams for three years and JV soccer teams for three years in High School.
                </p>
                <h3 id='french'>French</h3>
                <p>
                I started learning French in first grade at the mere age of five. 
                I took French all through eighth grade at my K-8 school and subsequently took French for four more years in high school, totaling twelve years. 
                Since then, it has become my closest to a second language. I can speak and write it well and can read it almost fluently. 
                I have visited France twice and enjoyed speaking in French with the locals, who were very patient with me and were very impressed by the amount of French I could speak and understand, especially as a foreigner. 
                Most of my French education has been in a classroom setting, with most of my teachers being French natives.
                </p>
                <h3 id='camp-counselor'>Summer Camp Counseling</h3> 
                <p>
                Over this past summer, I worked at a local day camp as a counselor and was subsequently promoted to a specialist position. 
                I learned many new leadership skills in these roles, including working with children, counselors my age and liaising with management regarding daily activities and schedules. 
                As a specialist, I was responsible for the Adventure course, which included zip lines and ropes courses. 
                My job included ensuring campers were adequately secured, belaying them up the rope, intaking them at the bottom of the zipline, and facilitating the ropes course. 
                I grew greatly in this 8-week position and am proud of my achievements. For more information about this specific activity, you can visit 
                <Link className='text-blue-800 dark:text-blue-500' href='/experience#jcc'>This page</Link>.
                </p>
                <h3 id='exchange-hosting'>Foreign Exchange Hosting</h3>
                <p>
                In February 2020, I hosted an exchange student from France as part of a program at my previous school, King. 
                We had a partner school located in Provence, Southern France, and had students come and stay with us. 
                My exchange student, Clement, was a good student from a good family who was coming for the first time to the United States. 
                When he was not in classes at school, he spent time with my family and friends, some of whom also hosted other students. 
                On his birthday, my parents and I took him to a Knicks game at Madison Square Garden, knowing he was a basketball fan. 
                I took him to New York with my friends, and we all showed our exchanges around the city and what life in America was like. 
                Unfortunately, due to COVID, I could not visit him in France that summer as originally planned. 
                </p>
                </div>
                </div>
        ) : (
            <div className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16'>
                <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
                    Activities
                </h1>
                <div className='mb-8 prose dark:prose-dark leading-6'>
                <h2 className='font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white'>
                    Sign-in Required
                </h2>
                <h5>To view this page, you must be logged in. Login below using your Google or GitHub account.</h5>  
                <h5>If you do not have an account already, one will automatically be created for you when you sign in.</h5>
                <div className='border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque'>
                    <h5 className='text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100'>
                    <Link
                        href="/api/auth/signin"
                        className="flex items-center justify-center my-4 font-bold h-8 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 mr-2 rounded w-28"
                         onClick={(e) => {
                             e.preventDefault();
                              signIn();
                        }}
                       >
                       Sign In
                    </Link>
                    </h5>
                    </div>
                    <h3>Why do I need to sign in?</h3>
                    <p>
                        Signing in allows me to indentify who is viewing this information. Because this page is intended for college admissions officers, and not the general public. 
                        Therefore, by logging in you help me by ensuring that only the right people have a hold of this content. 
                        When you login using your social account, I receive your name and associated email. These are transmitted securely over HTTPS/SSL. 
                        Your information is securely stored in a database pursuant to this site's <Link className='text-blue-800 dark:text-blue-500' href='/privacy-terms'>Privacy Policy</Link>.
                        This information is for my sole use only, and will not be shared with any additional third parties.
                    </p>
                </div>
            </div>
        )}
        </Container>

    )
}

export async function getServerSideProps() {
    const session = await getSession();
    var isUser: boolean;
    if (session) {
        isUser = true;
    } else if (!session) {
        isUser = false;
    }
    return {
        props: {
            isUser,
            session
        }
    }
}