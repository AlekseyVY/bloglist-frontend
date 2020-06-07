import {useSelector} from "react-redux";
import React from "react";
import { Alert } from '@material-ui/lab'


const Notification = () => {

    const notification = useSelector(state => state.notification)

    return (
        <div className={'notification'}>
            {notification !== '' && <Alert severity={'success'}>{notification}</Alert>}
        </div>
    )
}

export default Notification
