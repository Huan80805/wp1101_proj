import { gql } from "@apollo/client";
export const CLUB_SUBSCRIPTION = gql`
  subscription club($name: String!) {
    club(name:$name){
      name
      host
      introduction
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
        chatRoom{
          sender{
            nickname
            userName
          }
          body
        }
      }
      invitation
      chatRoom{
        sender{
          nickname
          userName
        }
        body
      }
    }
  }
`;