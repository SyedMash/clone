import React from 'react'

interface Props{
    title?: string
    backgroundColor?: string
}

const Button = (props:Props) => {
  return (
    <button className=' text-2xl border border-white px-16 py-3 text-white font-semibold' style={{backgroundColor: `${props.backgroundColor}`}}>
        {props.title}
    </button>
  )
}

export default Button