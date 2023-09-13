import React from 'react'
import { Home, User2, LogOut,Twitter} from 'lucide-react'

export default function Sidenav() {
      return (
        <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-black px-5 py-8">
          <a href="#">
          <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="m-auto fill-white r-1nao33i r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"
        height={50}
        
          >
          <g>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </g>
          </svg>
          </a>
          <div className="mt-6 flex flex-1 flex-col justify-between">
            <nav className="-mx-3 space-y-24">
              <div className="space-y-12 mx-8 mt-24">
                <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
                  href="#"
                >
                  <Home className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-xl font-medium">Home</span>
                </a>
                <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  href="#"
                >
                  <User2 className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-xl font-medium">Profile</span>
                </a>
                <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  href="#"
                >
                  <LogOut className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-xl font-medium">Logout</span>
                </a>
              </div>
              <button className='bg-blue-500 rounded-3xl w-52 cursor-pointer hover:bg-blue-300 h-12 text-2xl font-bold text-white mx-4'>
              
                Tweet
                <Twitter className='ml-8 -mt-6'/>
              </button>
            </nav>
          </div>
        </aside>
      )
}
    

