import React, { useState, useRef} from 'react';
import AuthPage from './AuthPage';
import ClubPlatform from './ClubPlatform';
import { useLazyQuery } from '@apollo/client';
import { USER_QUERY } from '../graphql';

const SocialPlatform = ()=>{

    const [runQuery, { loading, error, data }] = useLazyQuery(USER_QUERY)    
    
    const [isLogin, setLogin] = useState(false)
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    if(loading) return "Loading...";
    if(error) return <pre>{error.message}</pre>
    

    // async await problem
    const loginCheck =  ()=>{
         runQuery({
            variables:{
                userName:userName,
                password:password
            }
        })
        if(!loading){
            if(data.user.status === 'SUCCESS'){
            setLogin(()=> true)
            }
            else{
            alert(data.user.status)
            }
        }
    }
    // need async await
     const  logOut =  ()=>{
        setUserName(()=>'')
        setPassword(()=>'')
        setLogin(()=> false)
    }

    return(
        <div>
            {isLogin
                ?<ClubPlatform logOut = {logOut} userName={userName} data={data}/>
                :<AuthPage loginCheck = {loginCheck} setUserName={setUserName}
                 setPassword={setPassword}/>
            }
        </div>
    )
}

export default SocialPlatform;   