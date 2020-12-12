import React from 'react'

import "./Sidebar.css"
import { IconButton, Avatar} from '@material-ui/core';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from "./SidebarChat"

 

function Sidebar() {
    return (
        <div className="sidebar">


            <div className="sidebar__header">
               

                    <Avatar src="https://cdn3.iconfinder.com/data/icons/jobs-and-professions/30/archeologist_male-512.png" />
                    <div className="sidebar__headerRight">
                     <IconButton>
                     <DonutLargeIcon />
                     </IconButton>

                     <IconButton>
                         <ChatIcon/>
                     </IconButton>

                     <IconButton>
                         <MoreVertIcon />
                     </IconButton>
                   
                </div>
            </div>

            <diV className="sidebar__search">

             <div className="sidebar__searchContainer">

             <SearchOutlined />
             <input placeholder="Search or start new" type="text" />

             </div>

            </diV>

            <div className="sidebar__chats">
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />

            </div>

        </div>
    )
}

export default Sidebar
