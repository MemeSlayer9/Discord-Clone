import React from 'react'
import "./ChatHeader.css";
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';


function Chatheader( {channelName}) {
    return (
        <div className="chatheader">
            <div className="chatHeader_left">
                    <h3>
                        <span className="chatHeader_hash">
                            #
                        </span>
                        {channelName}
                        </h3>
            </div>
            <div className="chatHeader_right">
                        <NotificationsIcon/>
                        <EditLocationIcon />
                        <PeopleAltIcon />

                        <div className="chatHeader_search">
                                <input placeholder="Search" />
                            <SearchIcon/>
                            <HelpIcon/>
                        </div>
            </div>
        </div>
    )
}

export default Chatheader
