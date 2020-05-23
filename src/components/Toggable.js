import React, {useState, useImperativeHandle} from 'react'

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
                <button onClick={toggleVisibility}>{props.label}</button>
            </div>
            <div style={show}>
                {props.children}
                <button onClick={toggleVisibility}>cancel</button>
            </div>
        </div>
    )
})

export default Toggable
