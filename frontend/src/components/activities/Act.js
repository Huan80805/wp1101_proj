import React, { useState} from 'react';
import 'antd/dist/antd.min.css'
import { Button } from 'antd';

const Act = ({userName, club, backToLoby})=>{


    return(
        <>
            <p>Act</p>
            <Button conClick={backToLoby}>backToLoby</Button>
        </>
    )
}

export default Act;