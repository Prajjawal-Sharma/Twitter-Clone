import React,{useEffect} from 'react'
import Sidenav from './Sidenav'
import Tweet from './Tweet'
import Post from './Post'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigator=useNavigate()
  useEffect(()=>{
    if(!document.cookie.split('=')[1]){
      navigator('/signin')
    }
  },[])
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
