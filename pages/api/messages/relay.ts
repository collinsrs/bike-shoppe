import {SparkPost} from 'sparkpost';
import { getSession } from 'next-auth/react';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handle (req: NextApiRequest, res: NextApiResponse) {
 const sender = req.body.sdn;
 const senderId = req.query.usd;
 const {data} = req.body.data;
 const session = await getSession({ req });
 const collectedId = session.user.id;

const client = new SparkPost(process.env.SPARKPOST_API_KEY);


if (req.method === 'POST') {
    if (session) {
        if (senderId === collectedId) {
        const transmission = await client.transmissions.send({
            content: {
                from: 'contact-relay@mail.rishicollins.com',
                subject: `New message from ${sender}`,
                html: `<html><body>
                <h2>You have received a new message from ${sender} on rishicollins.com</h2>
                <p>${data}</p>
                <strong>User ID: ${senderId}</strong>
                </body></html>`
            },
            recipients: [
                {address: 'proxy@rishicollins.com'}
            ]
        }).then(data => {
            res.status(200).json({message: 'Message sent successfully'});
        }
        ).catch(err => {
            res.status(500).json({error: err});
        }
        );
    } else if (senderId !== collectedId) {
        res.status(403).json({error: 'Forbidden.'});
    }
    } else if (!session) {
        res.status(401).json({error: 'You are not authorized to access this resource. Please make sure that you are logged in.'});
    } else {
        res.status(500).json({error: 'An internal error has occured. Please try again.'});
    }
} else if (req.method === 'GET') {
    res.status(405).json({message: 'The requested HTTP method is not accessible on this endpoint'});
} else {
    res.status(400).json({message: 'Bad request'});
}
}
