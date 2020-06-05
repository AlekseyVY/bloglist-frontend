import {useSelector} from "react-redux";
import React from "react";


const Notification = () => {

    const notification = useSelector(state => state.notification)

    return (
        <div className={'notification'}>
            {notification !== '' && <h2>{notification}</h2>}
        </div>
    )
}

export default Notification
