import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
  const [userName,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const navigator=useNavigate()
  const LoginData=()=>{
    fetch("http://localhost:5000/api/auth/login",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        userName:userName,
        password:password
      })
    }).then(res=>res.json())
    .then(data=>{
      console.log(data)
    if(!data.error){
      localStorage.setItem('user_data',JSON.stringify(data.userData))
      document.cookie = `token=${data.token}; path=/;`;
      navigator('/')
      }
      else{
          console.log(data.error)
      }
     
    })
    .catch(err=>console.log(err))
}
  return (
    <section className='bg-black h-[100vh]'>
      
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="m-auto mt-32 fill-white r-1nao33i r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"
          height={300}
        
          >
          <g>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </g>
          </svg>
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md mt-20">
          
        <h1 className='text-white text-5xl text-center font-black'>Happening Now</h1>
          
          <h2 className="text-center text-2xl font-bold leading-tight text-white mt-24">
            Sign in to your account
          </h2>
          
          
            <div className="space-y-5">
              <div>
                <label htmlFor="" className="text-base font-medium text-white">
                  {' '}
                   Username{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border text-white border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="username"
                    placeholder="Username"
                    onChange={(e)=>setUserName(e.target.value)}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="text-base font-medium text-white">
                    {' '}
                    Password{' '}
                  </label>
                  
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full text-white rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    onChange={(e)=>setPassword(e.target.value)}
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-white k px-3.5 py-2.5 font-semibold leading-7 text-black hover:bg-white/80"
                  onClick={LoginData}
                  >
                  Sign In <ArrowRight className="ml-2" size={16} />
                </button>
                <p className="mt-2 text-center text-sm text-white">
            Don&apos;t have an account?{' '}
            <Link to='/signup' className='hover:underline'>
            Create a free account
              </Link>
             
            </p>
              </div>
            </div>
         
        </div>
      </div>
    </section>
  )
}

    
