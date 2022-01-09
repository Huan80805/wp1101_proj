import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
    mutation createUser($userName: userName!, $password: password, 
        $nickname:nickname!, $email:email){
            status
            userData{
                userName
                password
            }
        }
`;

