import React from 'react'

const Button = ({color, text , onClickAnku}) => {
   
    return (
        <>
            <button
                onClick={onClickAnku} 
                style={{backgroundColor:color}} className="btn">
                {text}
            </button>
        </>
    )
}

export default Button
