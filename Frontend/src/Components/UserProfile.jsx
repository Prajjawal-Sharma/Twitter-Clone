import React,{useState,useEffect} from 'react'
import Sidenav from './Sidenav'
import { Pencil,Trash2} from 'lucide-react'
import EditPost from './editPost'
import { useNavigate,useParams } from 'react-router-dom'


export default function UserProfile() {
    
    const navigate = useNavigate();
  const { userId } = useParams()

//   console.log(userid)
  const [isFollow, setIsFollow] = useState(false);
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);

  // to follow user
  const followUser = (userId) => {
    fetch("https://twitter-clone-production-451a.up.railway.app/api/users/follow", {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer " + document.cookie.split('=')[1]
      },
      body: JSON.stringify({
        userId
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsFollow(true)
      })
  }


  // to unfollow user
  const unfollowUser = (userId) => {
    fetch("https://twitter-clone-production-451a.up.railway.app/api/users/unfollow", {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + document.cookie.split('=')[1]
      },
      body: JSON.stringify({
        userId
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setIsFollow(false)
      })
  }


  useEffect(() => {
    fetch(`https://twitter-clone-production-451a.up.railway.app/api/users/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + document.cookie.split('=')[1]
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setUser(result.getUser)
        // setPosts(result.post)
        if (result.getUser.followers.includes(JSON.parse(localStorage.getItem("user_data"))._id)) {
          setIsFollow(true)
        }
      })
},[isFollow])

useEffect(() => {
    // fetching all the posts
    fetch("https://twitter-clone-production-451a.up.railway.app/api/tweets/displayAllTweets", {
        headers: {
            'Content-Type':'application/json',
            "Authorization": "Bearer " + document.cookie.split('=')[1]
        },
    }).then(res => res.json())
        .then(result =>{ 
            setPosts(result.allTweets);
            console.log(result);
        })
        .catch(err => console.log(err))
    },[])
    
  return (
    <>
    <div className='flex bg-black '>
    <Sidenav/>
    <div className='ml-72 mb-20'>
        <div className='flex'>
        <div>
        <img
        className="inline-block rounded-full h-48 w-48 mt-12"
        src={user.profilePic}
        alt="Dan_Abromov"
      />
        </div>
        <div className='mt-24 ml-16'>
            <h2 className='text-white text-2xl'>@ {user.userName}
            </h2>
            <h3 className='text-white text-xl'>
            {posts?.filter((post) => post?.postedBy?.userName === user?.userName)
            ?.map((userPost) => userPost).length }{" "}
                 Tweets</h3>
                 <button className='border w-32 h-8 mt-8 bg-white rounded-2xl justify-between' onClick={() => {
            if (isFollow) {
              unfollowUser(userId)
            }
            else {
              followUser(userId)
            }
          }}><span className='text-black'>{isFollow ? "Unfollow" : "Follow"}</span></button>
            </div>
            </div>
           
            <div className='flex text-white text-xl mt-8 border-b'>
                <h2 className='mr-8'><span className='font-bold'>
                    {user.followers?user.followers.length:"0"} 
                    </span>Followers</h2>
                <h2 className='mr-4'><span className='font-bold '>
                    {user.following?user.following.length:"0"}
                    </span>Following</h2>
               
            </div>
            
           {posts?.filter(post => post?.postedBy?._id === userId)?.map(userPost => (
            <div className='Postsection mt-12 ml-8 border-b'>                
    <div className="flex items-center space-x-2 mt-8 ">
    <img
        className="inline-block h-14 w-14 rounded-full"
        src={JSON.parse(localStorage.getItem('user_data'))?.profilePic}
        alt="Dan_Abromov"
      />
      <span className="flex">
        <span className="text-sm font-medium text-gray-500">@{userPost.postedBy.userName}</span>
      </span>
    </div>
        <div className='ml-16 mt-2 mb-8'>
            <p className='text-white'>{userPost.tweetCaption}</p>
            </div>
            <img src={userPost?.photo} width={400} className='ml-16 mb-8'/>
            {userPost?.video && <video src={userPost.video} controls width='640' height='320' id="vid" className='w-[24rem]'>

            </video>}
            
        </div>
           ))} 
    </div>
    </div>
    
    </>
  )
}
