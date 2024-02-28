import Link from 'next/link'
import React from 'react'

const LinkButton = ({icon, text, link, solid, color, disable}) => {
  return (
    <Link href={link && link || "/"} aria-disabled={disable} className={`py-2 px-2 md:px-5 flex items-center justify-between w-fit text-bold text-md lg:text-lg rounded ${disable && "bg-red-100 text-red-800 pointer-events-none cursor-not-allowed"} ${solid && `bg-[${solid}]` || "bg-blue-100"} ${color ? `text-[${color}] border-2 border-[${color}]`: "text-blue-800"} `}>
        {icon && icon}
        <span className={`${icon && "ml-2 lg:ml-3"}`}>{text && text || "Link button"}</span>
    </Link>
  )
}

export default LinkButton