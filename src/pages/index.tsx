import type { NextPage } from 'next';
import { SideBar } from '../components';

const Home: NextPage=()=>{
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-row 
          border border-x-gray-700/50
          "
          style={{width:"975px"}}
          >
        <SideBar/>
        <div className="w-full">

          {/* Banner */}
          <div className="h-40 bg-gray-800
              flex flex-row justify-center align-middle items-center
              ">
              {/* Banner Name */}
              <div className="text-white text-center my-2">
                <div className="font-bold text-5xl mb-3">0xHATSUME</div>
                <div className='text-lg'>EVM/Rust Crypto Developer</div>
                <div className='text-base'>Machine Learning Engineer</div>
                </div>
              

            </div>
          
          <div className='px-12 my-5'>

            {/* About Section */}
            <div className='mt-7 mb-5'>
              <div className='font-bold text-black text-lg my-2'>
                About
              </div>

              <div className='pl-5'>
                <ul className='list-disc'>
                  <li>I really LOVE building things since young.</li>
                  <li>Data Scientist/ML Engineer for 7+ years. Active organizer of local DS meetups.</li>
                  <li>{`Crypto in 2017, active Crypto-Twitter Anon in 2021 :)`}</li>
                  <li>{`Building on EVM chains and Solana currently! Wagmi`}</li>
                </ul>
              </div>
            </div>
            
            <hr className='my-2 h-px bg-gray-300 drop-shadow border-0'/>

          </div>
        </div>
      </div>
    </div>
  )
}


export default Home
