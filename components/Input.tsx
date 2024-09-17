import React from 'react'

interface Props{
    placeText?: string
}

const Input = (props:Props) => {
  return (
    <input className='border p-3 bg-[#E0E0E0] text-black placeholder:text-black placeholder:font-semibold' type="text" placeholder={props.placeText} />
  )
}

export default Input