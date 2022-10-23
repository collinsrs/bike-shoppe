import {NextApiRequest, NextApiResponse} from 'next'
import {WebClient} from '@slack/web-api'
import { UAParser } from 'ua-parser-js';

const token = process.env.SLACK_TOKEN || 'xoxb-4207575086675-4201104538870-vJOSISLWCoVEyDcpipCoyt8Q';
const channelId = process.env.SLACK_CHANNEL_ID || 'C04663B2C12';
const web = new WebClient(token)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
   const slug = req.query.slug;
   const ip = req.headers['x-forwarded-for'] || 'Unknown';
   const city = req.headers['x-vercel-ip-city'] || 'Unknown';
   const country = req.headers['x-vercel-ip-country'] || 'Unknown';
   //const region = req.headers['x-vercel-ip-region'] || 'Unknown';
   const ua = req.headers['user-agent'] || 'Unknown';
   const parser = new UAParser(ua);
   const browser = parser.getBrowser().name;
   const deviceModel = parser.getDevice().model;
   const deviceType = parser.getDevice().type;
   const deviceVendor = parser.getDevice().vendor;
   const os = parser.getOS().name;
   var isp;
   var org;
   var regionCode;
   var regionName;
   const ipInfo = await fetch(`http://ip-api.com/json/${ip}`, {
    method: 'GET',
   }).then(res => res.json());
    if (ipInfo) {
        isp = ipInfo.isp;
        org = ipInfo.org;
        regionCode = ipInfo.region;
        regionName = ipInfo.regionName;
    } else {
        isp = 'Unknown';
        org = 'Unknown';
        regionCode = 'Unknown';
        regionName = 'Unknown';
    }
   const timestampAsString = new Date().toLocaleString();
   const formattedNotificationStamp = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
    const result = await web.chat.postMessage({
        channel: channelId,
        text: `rishicollins.com - New site request at ${formattedNotificationStamp} from ${ip} (${city}, ${country})`,
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
                        text: `*ISP:*\n${isp}`
                    },
                    {
                        type: 'mrkdwn',
                        text: `*Organization:*\n${org}`
                    },
                    {
                        type: 'mrkdwn',
                        text: `*City:*\n${city}`
                    },
                    {
                        type: 'mrkdwn',
                        text: `*Region:*\n${regionName}`
                    },
                    {
                        type: 'mrkdwn',
                        text: `*Region Code:*\n${regionCode}`
                    },
                    {
                        type: 'mrkdwn',
                        text: `*Country:*\n${country}`
                    },
                    {
                        type: 'mrkdwn',
                        text: `*Timestamp:*\n${timestampAsString}`
                    },
                    {
                        type: 'mrkdwn',
                        text: `*User Agent:*\n${ua}`
                    },
                    {
                        type: 'mrkdwn',
                        text: `*Device Type:*\n${deviceType}`
                    },
                    {
                        type: 'mrkdwn',
                        text: `*Device Model:*\n${deviceModel}`
                    },
                    {
                        type: 'mrkdwn',
                        text: `*Device Vendor:*\n${deviceVendor}`
                    },
                    {
                        type: 'mrkdwn',
                        text: `*Browser:*\n${browser}`
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

