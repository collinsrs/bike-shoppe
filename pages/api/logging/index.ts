import prisma from '../../../lib/prisma';
import {uuid} from 'uuidv4';
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function logRemote(req: NextApiRequest, res: NextApiResponse) {
    const requestId = uuid();
    const remoteIP: any = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const remoteCity: any = req.headers['x-vercel-ip-city'] || 'Unknown or Development';
    const remoteLocale: any = req.headers['x-vercel-ip-country-region'] || 'Unknown or Development';
    const remoteCountry: any = req.headers['x-vercel-ip-country'] || 'Unknown or Development';
    const remoteTimeZone: any = req.headers['x-vercel-ip-timezone'] || 'Unknown or Development';
    res.setHeader('ssc-request-id', requestId);
    const refererSlug: any = req.query.ref;
    const result = await prisma.request.create({
        data: {
            slug: refererSlug,
            requestMethod: 'get',
            remoteUser: remoteIP,
            remoteLocale: remoteLocale,
            remoteCountry: remoteCountry,
            remoteCity: remoteCity,
            statusCode: 200,
            userAgent: req.headers['user-agent'],
            timestamp: new Date(),
            timeZone: remoteTimeZone
        }
    });
    const jsonData = {
        data: [
            'statusCode', '201',
            'requestMethod', 'post',
            'requestStatus', '201 Created',
            'timestamp', new Date(),
            'requestId', requestId,
        ]
    }
    res.status(201).json(jsonData);
}
