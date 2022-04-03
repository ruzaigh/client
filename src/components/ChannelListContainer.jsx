import React from 'react'
import { ChannelList, userChatContext } from 'stream-chat-react'
import Cookies from 'universal-cookie';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';

import HospitalIcon from '../assets/hospital.png'
import LogoutIcon from '../assets/logout.png'

// component
const SideBar = () =>(
    <div className='channel-list__sidebar'>
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={HospitalIcon} alt="Hospital" width="30"></img>
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner">
                <img src={LogoutIcon} alt="Logout" width="30"></img>
            </div>
        </div>
    </div>
);
// component
 const CompanyHeader = () => (
     <div className="channel-list__header">
         <p className='channel-list__header__text'>
             Medical Pager
         </p>
     </div>
 )

const ChannelListContainer = () => {
  return (
    <>
        <SideBar></SideBar>
        <div className="channel-list__list__wrapper">
            <CompanyHeader/>
            <ChannelSearch/>
            
            {/* for group chats  */}
            <ChannelList
            // filters is an object that will allow us to filter some messages 
            filters={{}}
            // function we can call based on that we can also pass in filters
            channelRenderFilterFn={() =>{}}
            // we are going to render a custome list
            List={(listProps) =>(
                <TeamChannelList
                {...listProps}
                type="team"
                />
            )}
            Preview={(previewProps) => (
                <TeamChannelPreview
                    {...previewProps}
                    type="team"
                />
            )}

            />

            {/* for single chat */}
            <ChannelList
            // filters is an object that will allow us to filter some messages 
            filters={{}}
            // function we can call based on that we can also pass in filters
            channelRenderFilterFn={() =>{}}
            // we are going to render a custome list
            List={(listProps) =>(
                <TeamChannelList
                {...listProps}  
                type="messaging"
                />
            )}
            Preview={(previewProps) => (
                <TeamChannelPreview
                    {...previewProps}
                    type="messaging"
                />
            )}

            />
            
        </div>
    </>

  );
}

export default ChannelListContainer;