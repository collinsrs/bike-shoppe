import { gql } from "@apollo/client";

const GetUsers = gql`
 query AllUsers {
  allUsers {
    id
    name
    email
    emailVerified
    Role
  }
}
`;

const GetRequests = gql`
  query AllRequests {
    allRequests {
      id
      url
      requestMethod
      remoteUser
      statusCode
      timestamp
      userAgent
    }

  }
`;

const GetUser = gql`
   query AllUsers($userId: String) {
    user(id: $userId) {
    id
    name
    email
    emailVerified
    Role
    adminAccessToken
    image
  }
}
`;



export { GetUsers, GetUser, GetRequests };