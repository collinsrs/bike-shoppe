import { gql } from "apollo-server-micro";

export const typeDefs = gql`

type User {
    id: String
    name: String
    email: String
    emailVerified: String
    image: String
    Role: String
    adminAccessToken: String
    sessions: [Session]
}

type Session {
    id: String
    sessionToken: String
    userId: String
    expires: String
    user: User
}

type Guestbook {
    id: Int
    email: String
    body: String
    created_by: String
    created_at: String
    updated_at: String
}

type Request {
   id: String 
  slug: String 
  requestMethod: String
  remoteUser: String
  statusCode: Int
  timestamp: String
  userId: String?
  user: String?
  userAgent: String
}


type Query {
    allUsers: [User]
    user(id: String): User
    allSessions: [Session]
    session(id: String): Session
    allMessages: [Guestbook]
    message(email: String): Guestbook
}

type Mutation {
    createUser(name: String, email: String, image: String, Role: String, adminAccessToken: String): User
    updateUser(id: String, name: String, email: String, image: String, Role: String, adminAccessToken: String): User
    updateAdminUser(id: String, adminAccessToken: String): User
    deleteUser(id: String): User
    createSession(sessionToken: String, userId: String, expires: String): Session
    updateSession(id: String, sessionToken: String, userId: String, expires: String): Session
    deleteSession(id: String): Session
    createMessage(email: String, body: String, created_by: String): Guestbook
    updateMessage(id: Int, email: String, body: String, created_by: String): Guestbook
    deleteMessage(id: Int): Guestbook
}
`;

export default typeDefs;