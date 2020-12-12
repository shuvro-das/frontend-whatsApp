import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SidebarChat.css"


function SidebarChat() {
    return (
        <div className="sidebarChat">
          <Avatar src="https://cdn3.iconfinder.com/data/icons/generic-avatars/128/avatar_portrait_man_male_3-512.png" yey/> 
          <diV className="sidebarChat__info">
            <h2>Room name</h2>
            <p>THis is the last Message</p>
          </diV> 
        </div>
    )
}

export default SidebarChat
