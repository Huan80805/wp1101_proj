import React, { useState, useRef} from 'react';
import AuthPage from './AuthPage';
import ClubLoby from './ClubLoby';

const SocialPlatform = ()=>{

    const [isLogin, setLogin] = useState(false)

    // temp
    const loginCheck = ()=>{
        setLogin(()=> true)
    }

    return(
        <div>
            {isLogin
                ?<ClubLoby/>
                :<AuthPage loginCheck = {loginCheck}/>
            }
        </div>
    )
}

export default SocialPlatform;   