import prisma from "lib/prisma"
import * as bcrypt from "bcrypt"

export const resolvers = {
    Query: {
        allUsers: async (_:any, _args: any) => {
            return await prisma.user.findMany();
        },
        user: async (_:any, args: any) => {
            return await prisma.user.findUnique({
                where: {
                    id: args.id
                }
            });
        },
        allSessions: async (_: any, _args: any) => {
            return await prisma.session.findMany()
        },
        session: async (_: any, args: any) => {
            return await prisma.session.findUnique({
                where: {
                    id: args.id
                }
            })
        },
        allMessages: async () => {
            return await prisma.guestbook.findMany()
        },
        message: async (_: any, args: any) => {
            return await prisma.guestbook.findUnique({
                where: {
                    id: args.id
                }
            })
        },
        allRequests: async () => {
            return await prisma.request.findMany()
        }
    },
    Mutation: {
        createUser: async (_: any, args: any) => {
            return await prisma.user.create({
                data: {
                    name: args.name,
                    email: args.email,
                    image: args.image,
                    Role: args.Role
                }
            })
        },
        updateUser: async (_: any, args: any) => {
            return await prisma.user.update({
                where: {
                    id: args.id
                },
                data: {
                    name: args.name,
                    email: args.email,
                    image: args.image,
                    Role: args.Role
                }
            })
        },
        deleteUser: async (_: any, args: any) => {
            return await prisma.user.delete({
                where: {
                    id: args.id
                }
            })
        },
        createSession: async (_: any, args: any) => {
            return await prisma.session.create({
                data: {
                    sessionToken: args.sessionToken,
                    userId: args.userId,
                    expires: args.expires
                }
            })
        },
        updateSession: async (_: any, args: any) => {
            return await prisma.session.update({
                where: {
                    id: args.id
                },
                data: {
                    sessionToken: args.sessionToken,
                    userId: args.userId,
                    expires: args.expires
                }
            })
        },
        deleteSession: async(_: any, args: any) => {
            return await prisma.session.delete({
                where: {
                    id: args.id
                }
            })
        },
    }
}

export default resolvers;