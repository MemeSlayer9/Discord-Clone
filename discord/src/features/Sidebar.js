import React, { useLayoutEffect, useState } from 'react';
import "./Sidebar.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import AddIcon from '@material-ui/icons/Add';
import SlidebarChannel from './SlidebarChannel';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import { selectUser } from './userSlice';
import { useSelector } from 'react-redux';
import db, { auth } from '../firebase';


function Sidebar() {

const user = useSelector(selectUser); 
const [channels, setChannels] = useState([]);

useLayoutEffect(() =>{
    db.collection('channels').onSnapshot((snapshot) => (
       setChannels(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    channel: doc.data(),
                }))
        
    ))
    );
}, []);

const handleAddChannel = () =>{
    const channelName = prompt("Enter New Channel Name");
    if (channelName){
        db.collection("channels").add({
            channelName: channelName,
        });
    }
}

    return (
        <div className="sidebar">
            
           

           <div className="sidebar_top">
            <h3>Cliche</h3>
            <ExpandMoreIcon/>
           </div>

        <div className="sidebar_channels">
                <div className="sidebar_channelsHeader">
                    <div className="sidebar_header">
                    <ExpandMoreIcon/>
                    <h4>Text_Channels</h4>
                    </div>

                    <AddIcon onClick={handleAddChannel} className="sidebar_addChannel"/>
                </div>
                <div className="sidebar_channelList">
                    {channels.map(({id, channel}) => (
                            <SlidebarChannel
                             key={id} 
                            id={id} 
                            channelName={channel.channelName}
                             />

                    ))}
             
            </div>    
         <div className="sidebar_voice">
            <SignalCellularAltIcon className="sidebar_voiceIcon" fontSize="large"/>
         <div className="sidebar_voiceInfo">
            <h3>Voice Connected</h3>
            <p>Stream</p>
        </div>
        <div className="sidebar_voiceIcons">
            <InfoOutlinedIcon/>
            <CallIcon/>
        </div>
        
    </div>
    <div className="sidebar_profile">
        <Avatar  onClick={() => auth.signOut()} src={user.photo}/>
        <div className="sidebar_profileInfo">
        <h3>{user.displayName}</h3>
        <p>#{user.uid.substring(0, 5)}</p>
                  </div>
                 <div className="sidebar_profileIcons">
                        <MicIcon/>
                        <HeadsetIcon/>
                        <SettingsIcon/>
                 </div>
          </div>
    </div>
 </div>
    );
}

export default Sidebar
