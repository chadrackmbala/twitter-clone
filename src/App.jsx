
/*import Layout from "./components/layout.jsx";

import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout />
  );
};*/


import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from "./pages/home";
import Explore from './components/explore';
import Notifications from './components/notifications';
import Messages from './components/messages';
import Bookmarks from './components/bookmarks';
import Lists from './components/liste';              
import Profile from './components/profile';
import More from './components/more';
import UserProfile from './pages/user-profile';
import Login from './pages/login';

export default function App() {

  const [pseudo, setPsuedo] = useState(null);

  const handleLoginSubmit = (userName) => {
    setPsuedo(userName);
  }
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element ={<Home />} />
          <Route path="/explore" element ={<Explore />} />
          <Route path="/notifications" element ={<Notifications />} />
          <Route path="/messages" element ={<Messages />} />
          <Route path="/bookmarks" element ={<Bookmarks />} />
          <Route path="/lists" element ={<Lists />} />
          <Route path="/profile" element ={<Profile />} />
          <Route path="/more" element ={<More />} />
          <Route path=":tweetTitle" element ={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

//<Route path="/" element ={<Login onLoginSubmit={handleLoginSubmit} />} />