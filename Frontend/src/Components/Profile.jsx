import React from 'react'
import Sidenav from './Sidenav'
import { Pencil,Trash2} from 'lucide-react'

export default function Profile() {
  return (
    <div className='flex bg-black '>
    <Sidenav/>
    <div className='ml-72 mb-20'>
        <div className='flex'>
        <div>
        <img
        className="inline-block rounded-full h-48 w-48 mt-12"
        src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
        alt="Dan_Abromov"
      />
        </div>
        <div className='mt-24 ml-8'>
            <h2 className='text-white text-xl'>@Username</h2>
            <h3 className='text-white text-lg'>x Tweets</h3>
            </div>
            </div>
            <div className='flex text-white text-xl mt-8 border-b'>
                <h2 className='mr-8'><span className='font-bold'>10 </span>Followers</h2>
                <h2 className='mr-4'><span className='font-bold'>20000  </span>Following</h2>
            </div>
            <div className='Postsection mt-12 ml-8 border-b'>                
    <div className="flex items-center space-x-2 mt-8 ">
    <img
        className="inline-block h-14 w-14 rounded-full"
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
            <div className='flex justify-evenly mb-8'>
            <Pencil stroke='white'/>
            <Trash2 stroke='white'/>
            </div>
        </div>
        
    </div>
    </div>
  )
}
