import Link from 'next/link'
import React from 'react'

const LinkButton = ({icon, text, link}) => {
  return (
    <Link href={link && link || "/"} className='py-2 px-2 md:px-5 flex items-center justify-between w-fit bg-blue-100 text-blue-800 text-bold text-md lg:text-lg rounded'>
        {icon && icon}
        <span className='ml-2 lg:ml-3'>{text && text || "Link button"}</span>
    </Link>
  )
}

export default LinkButton