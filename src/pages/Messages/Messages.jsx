import React from 'react'
import LeftSideMessage from '../components/LeftSideMessage';
import RightSideMessage from '../components/RightSideMessage';


const Messages = ( ) =>{
    return(
        <div className="messages">
            <div className="messagesleftside">
                <LeftSideMessage/>
            </div>
            <div className="messagesrightside">
            <RightSideMessage/>
            </div>
        </div>
    )
}

export default Messages;