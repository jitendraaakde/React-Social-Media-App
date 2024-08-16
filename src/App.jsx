import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

import { useState } from 'react'
import PostListProvider from './store/post-list-store'
import { Outlet } from 'react-router-dom'
PostListProvider
function App() {
  const [selectedTab, setSelectedTab] = useState('Home')

  return <PostListProvider>
    <div className='app-container'>
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
      <div className='content'>
        <Header ></Header>
        {/* {selectedTab === 'Home' ? <PostList></PostList>
          : <CreatePost></CreatePost>} */}
        <Outlet />
        <Footer></Footer>
      </div>
    </div>
  </PostListProvider>
}

export default App
