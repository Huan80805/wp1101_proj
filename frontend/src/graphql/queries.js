import { gql } from "@apollo/client";

export const GET_CLUBMENU_QUERY = gql`
  query GetClubQuery {
    club {
        name
        meetingTime
        abstract
    }
  }
`;