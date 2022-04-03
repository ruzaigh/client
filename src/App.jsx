
import './App.css';
import React from 'react';
import { Stream, StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer, Auth } from './components';


const apiKey = 'f75n5bnktzmz';
const client = StreamChat.getInstance(apiKey);
const authToken = false;

 // rafce function below as well as most of these components  

function App() {

  if(!authToken) return <Auth/>

  return (
    <div className='app__wrapper'>
      <Chat client={client} theme="team dark">
        {/* components */}
        <ChannelListContainer>

        </ChannelListContainer>

        <ChannelContainer>

        </ChannelContainer>
      </Chat>
    </div>
  );
}

export default App;
