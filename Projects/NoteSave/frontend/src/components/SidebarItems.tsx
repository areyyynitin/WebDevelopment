import type { ReactElement } from "react"

export const SidebarItems = ({text,icon} : {text:string,icon:ReactElement}) => {
  return (
    <div className="flex text-gray-700 py-2 cursor-pointer" >
        <div className="pr-2"> {icon}</div>
        <div className=""> {text}</div>
      
    </div>
  )
}
