import React,{useState,useEffect} from 'react'
import Sidenav from './Sidenav'
import { Pencil,Trash2} from 'lucide-react'
import EditPost from './editPost';


export default function Profile() {
  const[posts,setPosts]=useState([]);
  const[user,setUser]=useState("");
  const [open, setOpen] = useState(false)

  useEffect(()=>{
    fetch(`http://localhost:5000/api/users/${JSON.parse(localStorage.getItem('user_data'))?._id}`,{
      headers:{
        'Content-Type':'application/json',
        'Authorization':"Bearer "+document.cookie.split('=')[1]
      }
    })
    .then(res=>res.json())
    .then((result)=>{
      // setPic(result.post)
      setUser(result.getUser)
      // console.log(pic)
      console.log(result)
      // setPosts(result.)
    })
  },[])

  useEffect(() => {
    // fetching all the posts
    fetch("http://localhost:5000/api/tweets/displayAllTweets", {
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
},[posts])
const DeletePost=(posts)=>{
  if(window.confirm('Do you really want to delete this post?')){
  fetch(`http://localhost:5000/api/tweets/delete/${posts}`,{
    method:'DELETE',
    headers:{
      'Content-Type':'application/json',
      'Authorization':'Bearer '+document.cookie.split('=')[1]
    }
  })
  .then(res=>res.json())
  .then(data=>console.log(data))
  .catch(err=>console.log(err))
}
}
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
        <div className='mt-24 ml-8'>
            <h2 className='text-white text-xl'>@{user.userName}</h2>
            <h3 className='text-white text-lg'>{posts?.filter((post) => post?.postedBy?.userName === user?.userName)
            ?.map((userPost) => userPost).length }{" "} Tweets</h3>
            </div>
            </div>
            <div className='flex text-white text-xl mt-8 border-b'>
                <h2 className='mr-8'><span className='font-bold'>{user.followers?user.followers.length:"0"} </span>Followers</h2>
                <h2 className='mr-4'><span className='font-bold '>{user.following?user.following.length:"0"}</span>Following</h2>
            </div>
            { posts?.filter(post=>post?.postedBy?.userName===JSON.parse(localStorage.getItem('user_data'))?.userName)?.map(userPost=>(
            <div className='Postsection mt-12 ml-8 '>                
    <div className="flex items-center space-x-2 mt-8 ">
    <img
        className="inline-block h-14 w-14 rounded-full"
        src={user.profilePic}
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
            <div className='flex justify-evenly mb-8'>
              <button className='text-white' onClick={()=>{setOpen(true)}}> Edit Post
              
              </button>
              
            {/* <Pencil stroke='white' onClick={()=>{setOpen(true)}}/> */}
            <Trash2 stroke='white'onClick={()=>{
            DeletePost(userPost._id);
            navigate('/');
          }}/>
            </div>
        </div>
            ))}
    </div>
    </div>
    <EditPost  open={open} setOpen={setOpen}/>
    </>
  )
}
