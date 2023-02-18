import prisma from "lib/prisma";

export default async function handle(req, res) {
    const token = req.query.token;
    const data = await prisma.adminTokens.findUnique({
        where: {
            id: token
        }
    })
    if (data) {
        res.status(200).json(data)
    }
    else {
        res.status(404).json({message: "Token not found"})
    }
}