import React, {useEffect} from "react";
import {allUsers} from "../reducers/usersReducer";
import {init} from "../reducers/blogsReducer";
import {useDispatch} from "react-redux";


const Init = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(allUsers())
    }, [dispatch])

    useEffect(() => {
        dispatch(init())
    }, [dispatch])
    return (
        <></>
    )
}

export default Init
