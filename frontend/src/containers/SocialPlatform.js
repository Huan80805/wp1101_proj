import React, { useState, useRef} from 'react';
import AuthPage from './AuthPage';
import ClubPlatform from './ClubPlatform';
const SocialPlatform = ()=>{

    const [isLogin, setLogin] = useState(false)

    // temp
    const loginCheck = ()=>{
        setLogin(()=> true)
    }
    const logOut = ()=>{
        setLogin(()=> false)
    }

    return(
        <div>
            {isLogin
                ?<ClubPlatform logOut = {logOut}/>
                :<AuthPage loginCheck = {loginCheck}/>
            }
        </div>
    )
}

export default SocialPlatform;   