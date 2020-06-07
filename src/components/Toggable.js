import React, {useState, useImperativeHandle} from 'react'
import Button from "@material-ui/core/Button";

const Toggable = React.forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false)
    const hidden = {display: visible ? 'none' : ''}
    const show = {display: visible ? '' : 'none'}

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    useImperativeHandle(ref, () => {
        return {
            toggleVisibility
        }
    })

    return (
        <div>
            <div style={hidden}>
                <Button variant={'contained'} color={'primary'} id={'add_blog'} onClick={toggleVisibility}>{props.label}</Button>
            </div>
            <div style={show}>
                {props.children}
                <Button variant={'contained'} color={'primary'} onClick={toggleVisibility}>cancel</Button>
            </div>
        </div>
    )
})

export default Toggable
