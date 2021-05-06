import {gql} from "@apollo/client"

export const GET_ALL_USERS = gql`
  query getAllUsers($name: String!) {
    getAllUsers(name: $name) {
      id
      name
      username
    }
  }
`;