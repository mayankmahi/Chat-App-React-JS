import React from 'react';
import {ChatEngine } from  'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import  './App.css';


const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height="100vh"
            projectID="a1a35b77-3da6-4473-a4dd-385fe592cbf0"
            userName="Mahi"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
        />
    );
}

export default App;
    