import { Avatar, IconButton } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import SidebarChat from './SidebarChat';
import './Sidebar.css';
import SearchIcon from '@material-ui/icons/Search';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import db, { auth } from './firebase';
import { Dock } from '@material-ui/icons';

function Sidebar() {
  const user = useSelector(selectUser);
  const [chats, setChats] = useState([]);

  const addChat = () => {
    const chatName = prompt('Please Enter a Chat Name');

    if (chatName) {
      db.collection('chats').add({
        chatName: chatName,
      });
    }
  };

  useEffect(() => {
    db.collection('chats').onSnapshot((snapshot) =>
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <div className='sidebar'>
      <div className='sidebar_header'>
        <Avatar
          onClick={() => auth.signOut()}
          src={user.photo}
          className='sidebar_avatar'
        />
        <div className='sidebar_input'>
          <SearchIcon />
          <input placeholder='Search' />
        </div>
        <IconButton variant='outlined' className='sidebar_inputButton'>
          <RateReviewOutlinedIcon onClick={addChat} />
        </IconButton>
      </div>

      <div className='sidebar_chats'>
        {chats.map(({ id, data: { chatName } }) => (
          <SidebarChat key={id} id={id} chatName={chatName} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
