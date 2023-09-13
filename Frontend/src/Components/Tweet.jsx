import React from 'react'
import { Image,FileVideo  } from 'lucide-react'

export default function Tweet() {
  return (
    <div className='border-b'>
    <div className='ml-8 bg-slate-800 mt-12 h-56 rounded-2xl border mb-8'>
        
        <textarea
          name="tweet"
          id="tweet"
        //   value={tweetCaption}
          cols="80"
          rows="5"
          maxlength="400"
          placeholder="What's happening?"
          className=" bg-slate-800  mt-4 text-white p-3 focus:ring-blue-500 outline-none overflow-hidden"
          onChange={(e)=>setTweetCaption(e.target.value)}
        />
        <div className='flex'>
        <Image stroke='white' className='ml-4 mt-4'/>
        <FileVideo stroke='white' className='ml-4 mt-4' />
        <button className='rounded-3xl w-32 bg-blue-500 cursor-pointer hover:bg-blue-300 h-10 text-lg font-bold text-white ml-auto mr-4'>
            Post
        </button>
        </div>
        </div>
    </div>
  )
}
