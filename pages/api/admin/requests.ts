import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req });
    if (req.method === 'GET') {
        if (!session) {
            res.status(401).json({
                status: '401 Unauthorized',
                error: 'You are not authorized to access this resource.'
            });
        } else if (session) {
            res.status(403).json({
                status: '403 Forbidden',
                error: 'You are not authorized to access this resource.'
            });
        } else if (session.user.role === 'admin') {
            const requests = await prisma.request.findMany({
                where: {
                    statusCode: 200,
                }
            })
            res.status(200).json(requests);
        } else {
            res.status(500).json ({
                status: '500 Internal Server Error',
                error: 'An error occurred while processing your request.'
            });
        }
    } else if (req.method === 'DELETE') {
        if (!session) {
            res.status(401).json({
                status: '401 Unauthorized',
                error: 'You are not authorized to access this resource.'
            });
        } else if (session) {
            res.status(403).json({
                status: '403 Forbidden',
                error: 'You are not authorized to access this resource.'
            });
        } else if (session.user.role === 'admin') {
            const requests = await prisma.request.deleteMany({
                where: {
                    id: req.body.id,
                }
            })
            res.status(200).json(requests);
        } else {
            res.status(500).json ({
                status: '500 Internal Server Error',
                error: 'An error occurred while processing your request.'
            });
        }
    } else {
        res.status(405).json({
            status: '405 Method Not Allowed',
            error: 'The method is not allowed for the requested URL.'
        });
    }
}
