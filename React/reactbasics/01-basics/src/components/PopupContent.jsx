import React from 'react'
import {createPortal} from "react-dom"
export const PopupContent = ({copied}) => {
  return createPortal(
    <div>
        {copied && (
        <p>Copied to clipboard</p> 
        )}
    </div>,
    document.querySelector("#popup-content")
  )
}
