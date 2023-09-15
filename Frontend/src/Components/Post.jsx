import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';

export default function Post() {
  const [data, setData] = useState([]);
  useEffect(() => {
    
    fetch("http://localhost:5000/api/tweets/displayAllTweets", {
        headers: {
            'Content-Type':'application/json',
            "Authorization": "Bearer " + document.cookie.split('=')[1]
        },
    }).then(res => res.json())
        .then(result =>{ 
            setData(result.allTweets);
            console.log(result);
        })
        .catch(err => console.log(err))
    },[data])
    const formatDate = (mongoDate) => {
      const currentDate = new Date();
      const targetDate = new Date(mongoDate);
      const timeDifference = currentDate - targetDate;
      const minute = 60 * 1000;
      const hour = minute * 60;
      const day = hour * 24;
      const week = day * 7;
      const month = day * 30; 
      const year = day * 365; 
      const intervals = [
          { interval: year, label: 'years' },
          { interval: month, label: 'months' },
          { interval: week, label: 'weeks' },
          { interval: day, label: 'days' },
          { interval: hour, label: 'hours' },
          { interval: minute, label: 'minutes' },
      ];

      
      for (const interval of intervals) {
          const value = Math.floor(timeDifference / interval.interval);
          if (value >= 1) {
              return `${value} ${interval.label} ago`;
          }
      }
      return 'just now';
}


  return (
    <div className='mb-8'>
      {
        data?.map(posts=>(
          <div className='Postsection mt-12 ml-8 '>                
    <div className="flex items-center space-x-2 mt-8 ">
    <img
        className="inline-block h-14 w-14 rounded-full"
        src={JSON.parse(localStorage.getItem('user_data'))?.profilePic}
        alt="Dan_Abromov"
      />
      <span className="flex">
      <Link to={JSON.parse(localStorage.getItem("user_data"))._id === posts.postedBy._id ? "/profile" : `/profile/${posts.postedBy._id}`}>
        <span className="text-xl font-medium text-white">{posts.postedBy.userName}</span>
        </Link>
        <span className='time'> {formatDate(posts.createdAt)}</span>
      </span>
    </div>
        <div className='ml-16 mt-2 mb-8'>
            <p className='text-white'>{posts.tweetCaption}</p>
            </div>
            {posts?.photo && <img src={posts?.photo} width={400} className='ml-16 mb-8 w-[24rem]'/>}
            {posts?.video && <video src={posts.video} controls width={400} className='ml-16 mb-8 w-[24rem]'>

            </video>}
        </div>
        ))
      }
    
    </div>
  )
}
