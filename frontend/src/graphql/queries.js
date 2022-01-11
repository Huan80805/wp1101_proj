import { gql } from "@apollo/client";

export const USER_QUERY = gql`
  query user($userName: String!, $password: String!) {
    user(userName:$userName, password:$password) {
        status
        userData{
          userName
          clubs
        }
    }
  }
`;

export const CLUBS_QUERY = gql`
  query clubs{
    clubs{
      name
      host
      members{
        user{
          userName
        }
      }
      time
      invitation
    }
  }
`;

export const CLUB_QUERY = gql`
  query club($name: String!){
    club(name:$name){
      name
      host
      members{
        user{
          userName
        }
          identity
      }
      time
      events{
        name
        time
      }
    }
  }
`;


