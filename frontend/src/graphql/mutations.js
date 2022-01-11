import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
    mutation createUser($userName: String!, $password: String!,
     $nickname:String!, $email:String!){
        createUser(userName: $userName, password: $password, 
            nickname:$nickname, email:$email){
            status
            userData{
                userName
                password
            }
        }
            
    }
`;

export const CREATE_CLUB_MUTATION = gql`
    mutation createClub($name:String!, $host:String!, $invitation:String!,
    $introduction:String!, $time:String!){
        createClub(name:$name, host:$host, invitation:$invitation,
        introduction:$introduction, time:$time){
            status
            clubData{
                name
                host
                members{
                    user{
                        userName
                      }
                }
            }
        }
    }
`;
export const CREATE_EVENT_MUTATION = gql`
    mutation createEvent($clubName:String!, $name:String!, 
    $time:String!, $location:String!, $introduction:String!,
    $host:String!, $active: Boolean!){
        createEvent(clubName:$clubName, name:$name, 
    time:$time, location:$location, introduction:$introduction,
    host:$host, active: $active){
        status
        eventData{
          name
          location
          host
          active
        }
    }
    }
`;