import React,{useState,useEffect} from 'react'
import Sidenav from './Sidenav'
import { Link } from 'react-router-dom';

export default function MyFollowing() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/api/users/myfollowing/post", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + document.cookie.split('=')[1]
            },
        }).then(res => res.json())
            .then(result => {
                console.log(result);
                setData(result.getTweets)

            })
            .catch(err => console.log(err))
},[])
  return (
    <>
     <div className='flex bg-black '>
    <Sidenav/>
   <div className='ml-80 mt-8 min-h-screen'>
    <h1 className='text-2xl text-bold text-white'>MY FOLLOWING</h1>
    
    <div className='mb-8'>
      {data?.length>0?
        data?.map(posts=>(
          <div className='Postsection mt-12 ml-8 '>                
    <div className="flex items-center space-x-2 mt-8 ">
    <img
        className="inline-block h-14 w-14 rounded-full"
        src={JSON.parse(localStorage.getItem('user_data'))?.profilePic}
        alt="Dan_Abromov"
      />
      <span className="flex">
      <Link to={`profile/${posts.postedBy._id}`}>
        <span className="text-xl font-medium text-white">{posts.postedBy.userName}</span>
        </Link>
      </span>
    </div>
        <div className='ml-16 mt-2 mb-8'>
            <p className='text-white'>{posts.tweetCaption}</p>
            </div>
            <img src={posts?.photo} width={400} className='ml-16 mb-8'/>
            {posts?.video && <video src={posts.video} controls width='640' height='320' id="vid" className='w-[24rem]'>

            </video>}
            
        </div>
        ))
        :
    <h1 className='text-white text-xl mt-8'>Currently you are not following anyone!</h1>
      }
      
    
    </div>
    

    </div>

    </div>
    </>
    
  )
}
