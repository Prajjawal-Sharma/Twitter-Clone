import React from 'react'

export default function Post() {
  return (
    <div className='mb-8'>
    <div className='Postsection mt-12 ml-8 border-b'>                
    <div className="flex items-center space-x-2 mt-8 ">
      <img
        className="inline-block h-12 w-12 rounded-full"
        src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
        alt="Dan_Abromov"
      />
      <span className="flex">
        <span className="text-sm font-medium text-gray-500">@dan_abromov</span>
      </span>
    </div>
        <div className='ml-16 mt-2 mb-8'>
            <p className='text-white'>Description</p>
            </div>
            <img src="https://pbs.twimg.com/media/F57e6RVXAAEcCb-?format=webp&name=small" className='ml-16 mb-8'/>
            
        </div>
    </div>
  )
}
