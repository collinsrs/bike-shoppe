import Container from 'components/Container';
import { PrismaClient } from '@prisma/client';
import { useEffect } from 'react';

export default function PrivacyPolicy (props) {
    useEffect(() => {
        fetch ('/api/logging?ref=privacy-terms', {
          method: 'POST',
          headers: {
            'Authorization': '492ef020-f8f9-11ea-9fa5-0242ac130003-2390fkv3k05svc'
          } 
      })
      }
      , [])
    //privacy policy
    return (
        <Container title='Privacy/Terms - Rishi Collins'>
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">Privacy And Terms</h1>
            <div className="mb-8 prose dark:prose-dark leading-6">
            <p>
                This policy has been created to establish a clear understanding of how your data is accessed on this website. This policy applies to all visitors, users, and others who access this website. In some jurisdictions, this policy is required to be present and accessible on this website at all times by law.
            </p>
            <h2>
                What personal information is collected when you visit this website?
            </h2>
            <p>
                When you visit <a href="https://rishicollins.com">rishicollins.com</a>, which is referred as the "Site" in this document, receives information about your device, browser, operating system, and your relative location based off of your Internet Protocol ("IP") address, along with any requests you make to this site, may be logged and retained on our servers for security purposes.
            </p>
            <p>
                Additionally, when you choose to take further action on the Site, specifically by utilizing the contact feature, the Site receives your name and email address, along with your message content. This information is used to respond to your message, and to contact you regarding your inquiry.
            </p>
            <h2>
                How do we protect your information?
            </h2>
            <p>
                Your information is securely stored in the Site's database, and is encrypted. Additionally, this website uses HTTPS/SSL to protect your information when sending information to our servers. To ensure that you have the best possible protection using HTTPS/SSL, ensure that you see a "https://" link at the beginning of this URL, and/or a lock symbol in the upper left of the address or bookmark bar.
            </p>
            <h2>
                Is my information shared with or sold to third parties?
            </h2>
            <p>
                Absolutely not. All of the information collected on this website is used to provide the services you have requested, and is not used for any additional purposes.
            </p>
            <h2 id='gdpr'>European Union (EU) General Data Protection Regulation (GDPR) Information</h2>
            <p>
                Under the laws of the European Union, and the United Kingdom under the UK GDPR, we are subject to the General Data Protection Regulation (GDPR). This means that we are required to provide certain information to the European Union's data protection authorities.
            </p>
            <p>
                We are a data controller for the purposes of the GDPR. We are responsible for the information we collect and use, and we are responsible for the security of your information.
            </p>
            <h2>
                Your Rights under the GDPR
            </h2>
            <p>
                Under the regulations of the GDPR, you are entitled to request a copy of your data, and for it to be removed permanently from our systems. You can request this at any time by contacting <a href="mailto:gdpr-compliance@rishicollins.com">gdpr-compliance@rishicollins.com</a>
            </p>
            <h2>Cookies

            </h2>
            <p>
                At this point in time, there are no cookies being used on this website. This policy will be updated with a detailed explanation regarding of how said cookies would be used, if implemented on the Site in the future.
            </p>
            <h4>Last Updated: August 1, 2022</h4>
            </div>
            </div>
        </Container>
    );
}

