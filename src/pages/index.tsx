import type { NextPage } from 'next';
import { SideBar } from '../components';

const Home: NextPage=()=>{
  return (
    <div className="flex flex-row justify-center">
      <div className="w-3/5 flex flex-row 
          border border-x-gray-700/50
          ">
        <SideBar/>
        <div className="w-full">
          <div className="h-40 bg-gray-800
              flex flex-row justify-center align-middle items-center
              ">
              <div className="text-white text-center my-2">
                <div className="font-bold text-5xl mb-3">0xHATSUME</div>
                <div className='text-lg'>EVM/Rust Crypto Developer</div>
                <div className='text-base'>Machine Learning Engineer</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}


export default Home
