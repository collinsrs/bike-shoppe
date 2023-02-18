import { gql } from "@apollo/client";

const DeleteUser = gql`
   mutation Mutation($deleteUserId: String) {
    deleteUser(id: $deleteUserId) {
    name
  }
}
`;

const UpdateUser = gql`
    mutation Mutation($name: String, $updateUserId: String, $email: String) {
  updateUser(name: $name, id: $updateUserId, email: $email) {
    id
    name
    email
  }
}
`;

export { DeleteUser, UpdateUser };