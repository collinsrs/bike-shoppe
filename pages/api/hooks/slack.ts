import {NextApiRequest, NextApiResponse} from 'next'
import {WebClient} from '@slack/web-api'


const token = process.env.SLACK_TOKEN
const channelId = process.env.SLACK_CHANNEL_ID
const web = new WebClient(token)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
   const slug = req.query.slug;
   const ip = req.headers['x-forwarded-for'] || 'Unknown';
   const city = req.headers['x-vercel-ip-city'] || 'Unknown';
   const country = req.headers['x-vercel-ip-country'] || 'Unknown';
   const region = req.headers['x-vercel-ip-region'] || 'Unknown';
   const timestampAsString = new Date().toLocaleString();
    const result = await web.chat.postMessage({
        channel: channelId,
        text: `*New request for ${slug} from ${ip} in ${city}, ${region}, ${country} at ${timestampAsString}*`,
    })

    res.status(200).json(result)
} else {
    res.status(405).json({error: 'Method not allowed'})
    }
}

