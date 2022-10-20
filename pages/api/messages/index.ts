import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import prisma from 'lib/prisma';
import {WebClient} from '@slack/web-api'

const token = process.env.SLACK_TOKEN;
const channelId = process.env.SLACK_MSG_CHANNEL_ID;
const web = new WebClient(token)


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const entries = await prisma.guestbook.findMany({
      orderBy: {
        updated_at: 'desc'
      }
    });

    return res.json(
      entries.map((entry) => ({
        id: entry.id.toString(),
        body: entry.body,
        created_by: entry.created_by,
        updated_at: entry.updated_at
      }))
    );
  }

  const session = await getSession({ req });
  const { email, name } = session.user;

  if (!session) {
    return res.status(403).send('You are not authorized to access this resource. Please make sure that you are logged in.');
  }

  if (req.method === 'POST') {
    const newEntry = await prisma.guestbook.create({
      data: {
        email,
        body: (req.body.body || '').slice(0, 500),
        created_by: name
      }
    });

    await PostSlack(newEntry.id, newEntry.body, newEntry.created_by, session.user.id, session.user.email);

    return res.status(200).json({
      id: newEntry.id.toString(),
      body: newEntry.body,
      created_by: newEntry.created_by,
      updated_at: newEntry.updated_at
    });
  }

  return res.send('Method not allowed.');
}

async function PostSlack(args: any, body: any, creator: any, creatorId: any, email: any) {
  const result = await web.chat.postMessage({
    channel: channelId,
    blocks: [
        {
            type: 'section',
            text: {
                type: 'plain_text',
                text: `New Contact message!`,
            }
        },
        {
            type: 'section',
            fields: [
                {
                    type: 'mrkdwn',
                    text: `*User:*\n${creator}`
                },
                {
                    type: 'mrkdwn',
                    text: `*Message ID:*\n${args}`
                },
                {
                    type: 'mrkdwn',
                    text: `*User ID:*\n${creatorId}`
                },
                {
                  type: 'mrkdwn',
                  text: `*Contact Email:*\n${email}`
              },
                {
                    type: 'mrkdwn',
                    text: `*Message Content:*\n${body}`
                }
            ]
        }
    ]
})

}

