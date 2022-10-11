import {NextApiRequest, NextApiResponse} from 'next'
import {WebClient} from '@slack/web-api'


const token = process.env.SLACK_TOKEN || 'xoxb-4207575086675-4201104538870-vJOSISLWCoVEyDcpipCoyt8Q';
const channelId = process.env.SLACK_CHANNEL_ID || 'C04663B2C12'
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
        blocks: [
            {
                type: 'section',
                text: {
                    type: 'plain_text',
                    text: `New Site Request for ${slug}`,
                }
            },
            {
                type: 'section',
                fields: [
                    {
                        type: 'mrkdwn',
                        text: `*IP Address:*\n${ip}`
                    },
                    {
                        type: 'mrkdwn',
                        text: `*City:*\n${city}`
                    },
                    {
                        type: 'mrkdwn',
                        text: `*Region:*\n${region}`
                    },
                    {
                        type: 'mrkdwn',
                        text: `*Country:*\n${country}`
                    },
                    {
                        type: 'mrkdwn',
                        text: `*Timestamp:*\n${timestampAsString}`
                    }
                ]
            }
        ]
    })

    res.status(201).json(
        [
            'statusCode', '201',
            'requestMethod', 'post',
            'requestStatus', '201 Created',
            'timestamp', new Date(),

        ]
    )
} else {
    res.status(405).json({error: 'Method not allowed'})
    }
}

