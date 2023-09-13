import React from 'react'
import Sidenav from './Sidenav'
import Tweet from './Tweet'
import Post from './Post'
export default function Home() {
  return (
    <>
    <div className="flex bg-black">
    <Sidenav/>
    <div className='ml-64'>
    <h1 className='text-white text-2xl font-bold ml-12 mt-8'>Home</h1>
    <Tweet/>
    <Post/>
    </div>
    

    </div>
    </>
  )
}
