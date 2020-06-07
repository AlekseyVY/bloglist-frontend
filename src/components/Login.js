import React, {useEffect} from "react";
import {passwordX, user, usernameX} from "../reducers/usersReducer";
import blogService from "../services/blogs";
import loginService from "../services/login";
import {notify} from "../reducers/notificationReducer";
import {useDispatch, useSelector} from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const Login = () => {
    const dispatch = useDispatch()
    const username = useSelector(state => state.users.username)
    const password = useSelector(state => state.users.password)

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if (loggedUserJSON) {
            const userLogged = JSON.parse(loggedUserJSON)
            dispatch(user(userLogged))
            blogService.setToken(userLogged.token)
        }
    }, [dispatch])


    const handleLogin = async (event) => {
        event.preventDefault()
        setTimeout(async () => {
            try {
                const userLogin = await loginService.login({username, password})
                window.localStorage.setItem('loggedUser', JSON.stringify(userLogin))
                blogService.setToken(userLogin.token)
                dispatch(user(userLogin))
                dispatch(notify((`User: ${username} successfuly logged in`), 5))
                dispatch(usernameX(''))
                dispatch(passwordX(''))
            } catch (exception) {
                dispatch(notify((`UserName or Password are Incorrect. Access denied!`), 5))
            }
        }, 0)
    }
    const style = {
        display: 'inline',
        margin: 20
    }

//login form for logging in user with username and password
    return (
        <form onSubmit={handleLogin} style={style}>
            <>
                <TextField label={'username'} style={{marginRight: 10}} id={'username'} type={'text'} name={'usernames'} onChange={({target}) => {
                dispatch(usernameX(target.value))
            }}/>
            </>
            <>
                <TextField label={'password'}  id={'password'} type={'text'} name={'passwords'} onChange={({target}) => {
                dispatch(passwordX(target.value))
            }}/>
            </>
            <Button variant={'contained'} color={'primary'} style={{marginLeft: 20}} id={'login_button'} type={'submit'}>login</Button>
        </form>
    )
}


export default Login
