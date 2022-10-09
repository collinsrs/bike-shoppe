import prisma from '../../../lib/prisma';
import {uuid} from 'uuidv4';
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function logRemote(req: NextApiRequest, res: NextApiResponse) {
    const requestId = uuid();
    const remoteIP: string | any = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const remoteCity: string | any = req.headers['x-vercel-ip-city'] || 'Unknown';
    const remoteCountry: string | any = req.headers['x-vercel-ip-country'] || 'Unknown';
    const remoteRegion: string | any = req.headers['x-vercel-ip-region'] || 'Unknown';
    const clientKey: string = '492ef020-f8f9-11ea-9fa5-0242ac130003-2390fkv3k05svc';
    if (req.headers.authorization !== clientKey) {
        res.status(401).json({
            error: 'You are not authorized to access this resource.'
        });
    } else {   
    res.setHeader('ssc-request-id', requestId);
    const refererSlug: any = req.query.ref;
    const result = await prisma.request.create({
        data: {
            slug: refererSlug,
            requestMethod: 'get',
            remoteUser: remoteIP,
            ipCity: remoteCity,
            ipCountry: remoteCountry,
            ipRegion: remoteRegion,
            statusCode: 200,
            userAgent: req.headers['user-agent'],
            timestamp: new Date(),
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
}

type Country = {
    string
};
type City = {
    name: string;
    code: string;
};
type TimeZone = {
    name: string;
    code: string;
};
