import React, { useRef } from 'react'
import { useState,useEffect } from 'react'
import { Image,FileVideo  } from 'lucide-react'
import { Navigate, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Tweet() {
  const [description,setDesciption]=useState("")
  const imageRef=useRef();
  const navigate=useNavigate();
  const [image,setImage]=useState("")
  const [url,setUrl] = useState("")
  const [vid,setVidUrl] = useState("")
  const [video, setVideo] = useState("");
  const [videoDisp, setVideoDisp] = useState("")
  const videoRef = useRef()
  const notify = () => toast("Posted Successfully!");
  const createTweet = async () => {
    const response = await fetch(
      "http://localhost:5000/api/tweets/createTweet",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + document.cookie.split("=")[1],
        },
        body: JSON.stringify({
          tweetCaption:description,
          photo:url?url:"",
          video:vid?vid:"",
        }),
      }
    );
    const data=await response.json()
      console.log(data)
      setDesciption("")
      setImage("")
      setVideo("")
}

const loadImage = (e) => {
  let output = document.getElementById("output");
  output.src = URL.createObjectURL(e.target.files[0]);
  output.onload = () => {
    URL.revokeObjectURL(output.src);
  };
};
const sendImageToCloudinary = () => {
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", "Twitter");
  data.append("cloud_name", "prajjawal");
  fetch("https://api.cloudinary.com/v1_1/prajjawal/image/upload", {
    method: "POST",
    body: data,
  })
    .then((res) => res.json())
    .then((data) => {
      setUrl(data.url);
      console.log(data.url);
    })
    .catch((err) => console.log(err));
};
useEffect(()=>{
  if(url){
    createTweet();
  }
},[url])

const sendVideoToCloudinary = () => {
  const data = new FormData();
  data.append("file", video);
  data.append("upload_preset", "mini twitter clone");
  data.append("cloud_name", "twitterclonecloud");
  fetch("https://api.cloudinary.com/v1_1/twitterclonecloud/video/upload", {
    method: "POST",
    body: data,
  })
    .then((res) => res.json())
    .then((data) => {
      setVidUrl(data.url);
      console.log(data.url);
    })
    .catch((err) => console.log(err));
};
useEffect(() => {
  if (url || vid) {
    createTweet();
} 
},[url,vid])
  return (
     <div className="CreateTweet text-white w-fit mt-10 px-10 border-b">
     <textarea
       name="tweet"
       id="tweet"
       value={description}
       cols="80"
       rows="5"
       placeholder="What's happening?"
       className=" bg-slate-800 rounded-2xl mt-4 text-white p-3 focus:ring-blue-500 outline-none mb-4"
       onChange={(e)=>setDesciption(e.target.value)}
     />
   {image?
     <img id='output' height={300} width={300}/>
     :
     <img id='output' height={300} width={300} className="hidden"/>
   }
   {video && <video src={videoDisp} id="vid" controls width='640' height='320'>

</video>}
     <input id="file-upload" name="file-upload" type="file" className="hidden" accept='image/*' ref={imageRef}
     onChange={(e)=>{
       loadImage(e)
       setImage(e.target.files[0])
       setVideo('')
          setVideoDisp('')
       console.log(e.target.files[0])
       
     }}
     />
     <input id="file-upload" name="file-upload" type="file" className="hidden" accept='video/*' ref={videoRef}
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            const videoURL = URL.createObjectURL(file);
            setVideoDisp(videoURL);
          }
          setVideo(e.target.files[0]);
          setImage('')
        }}
      />
     <div className="flex mt-4">
       <div className="add_icons flex mx-4 mt-2">
         <Image className="text-blue-500 mr-4 cursor-pointer" onClick={()=>imageRef.current.click()}/>
         <FileVideo className="text-blue-500 cursor-pointer mx-2" onClick={() => videoRef.current.click()}/>
       </div>
       <div className="flex w-fit ml-auto">

         <button
           className="bg-blue-500 p-3 px-5 font-bold rounded-3xl mb-8"
           onClick={() => {
            if (image) {
              sendImageToCloudinary();
            } else if (video) {
              sendVideoToCloudinary();
            } else {
              createTweet();
              navigate("/");
            }
            notify(); // Call the notify function regardless of the condition
          }}
         >
           Tweet
         </button>   
         <ToastContainer/>   
       </div>
     </div>
    </div>
  )
  

  
}
