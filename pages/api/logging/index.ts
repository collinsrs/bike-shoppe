import prisma from '../../../lib/prisma';
import { uuid } from 'uuidv4';
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function logRemote(req: NextApiRequest, res: NextApiResponse) {
    const remoteIP: any = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.setHeader('ssc-request-id', uuid());
    const refererSlug: any = req.query.ref;
    const result = await prisma.request.create({
        data: {
            slug: refererSlug,
            requestMethod: 'get',
            remoteUser: remoteIP,
            statusCode: 200,
            userAgent: req.headers['user-agent'],
            timestamp: new Date()
        }
    });
    const jsonData = {
        data: [
            'statusCode', '201',
            'requestMethod', 'post',
            'requestStatus', '201 Created',
            'timestamp', new Date(),
        ]
    }
    res.status(201).json(jsonData);
}
