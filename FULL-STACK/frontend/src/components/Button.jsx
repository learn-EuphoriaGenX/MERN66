import React from 'react'

function Button({ icon, text, onClick }) {
    return (

        <button type="button" onClick={onClick} className="text-white  bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l   font-medium flex items-center gap-2 rounded-lg text-sm px-5 py-2.5 text-center">{icon && <img src={icon} className='h-5 invert' />}{text}</button>

    )
}

export default Button