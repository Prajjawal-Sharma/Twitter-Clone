import React,{useState} from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../App.css'
export default function Signup() {
  const [userName,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const [loading,setLoading]=useState(false)
    const navigator=useNavigate()
  const registerUser=async()=>{
    const response=await fetch("https://twitter-clone-production-451a.up.railway.app/api/auth/register",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            userName:userName,
            password:password
        })
    })
    const data=await response.json()
    if(!data.error){
      navigator('/signin')
      setLoading(false)
    } 

    
}
  return (
    <section className='bg-black h-[100vh]'>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="m-auto fill-white r-1nao33i r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"
        height={300}
        
          >
          <g>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </g>
          </svg>
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md mt-20">
          
        <h1 className='text-white text-5xl text-center font-black'>Happening Now</h1>

          <h2 className="text-center text-2xl font-bold leading-tight text-white mt-24">
            Sign up to create account
          </h2>
         
          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
            
              <div>
                <label htmlFor="username" className="text-base font-medium text-white mt-24">
                  {' '}
                  Username{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex text-white h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="username"
                    placeholder="Username"
                    id="username"
                    onChange={(e)=>setUserName(e.target.value)}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-base font-medium text-white">
                    {' '}
                    Password{' '}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex text-white h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    id="password"
                    onChange={(e)=>setPassword(e.target.value)}
                  ></input>
                </div>
              </div>
              <div>
                
                {!loading?
                  <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-white px-3.5 py-2.5 font-semibold leading-7 text-black hover:bg-white/80"
                  onClick={()=>{
                    setLoading(true)
                    registerUser();
                  }}                
                >

                  Create Account <ArrowRight className="ml-2" size={16} />
                </button>
                :
                <div className="loader m-auto">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
                <div class="bar4"></div>
                <div class="bar5"></div>
                <div class="bar6"></div>
                <div class="bar7"></div>
                <div class="bar8"></div>
                <div class="bar9"></div>
                <div class="bar10"></div>
                <div class="bar11"></div>
                <div class="bar12"></div>
            </div>
                }
                <p className="mt-2 text-center text-base text-white">
            Already have an account?{' '}
            <Link to='/signin' className='hover:underline hover:text-blue-500'>
              Sign In
              </Link>
            
          </p>
              </div>
            </div>
          </form>
          
        </div>
      </div>
    </section>
  )
}


