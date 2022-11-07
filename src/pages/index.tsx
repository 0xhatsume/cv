import type { NextPage } from 'next';
import { SideBar } from '../components';
import { isProd, gitAddressPrefix } from '../config/constants';

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
              <div className='font-bold text-black text-2xl my-2'>
                About
              </div>

              <div className='pl-5'>
                <ul className='list-disc text-base'>
                  <li>I really LOVE building things since young.</li>
                  <li>Data Scientist/ML Engineer for 7+ years. Active organizer of local DS meetups.</li>
                  <li>{`Crypto in 2017, active Crypto-Twitter Anon in 2021 :)`}</li>
                  <li>{`Building on EVM chains and Solana currently! Wagmi`}</li>
                </ul>
              </div>
            </div>
            
            <hr className='my-2 h-px bg-gray-300 drop-shadow border-0'/>

            {/* Projects Section */}
            <div className='mt-5'>
              <div className='font-bold text-black text-2xl my-4'>
                Projects <span className="font-normal text-base">(Crypto)</span>
              </div>

              {/* PlateDao */}
              <div className='my-4 mt-5'>
                <div className='font-bold mb-2'>PlateDAO</div>
                <div className="flex flex-row justify-center items-center
                space-x-1 px-2
                w-full
                ">
                  <img className="w-1/3" src={`${isProd ? gitAddressPrefix : ''}/img/platedao1.PNG`}></img>
                  <img className="w-1/3" src={`${isProd ? gitAddressPrefix : ''}/img/platedao2.PNG`}></img>
                  <img className="w-1/3" src={`${isProd ? gitAddressPrefix : ''}/img/platedao3.PNG`}></img>
                </div>
                <ul className='list-disc text-base px-5'>
                  <li>Index Fund Contract (fork/modified Pie DAO)</li>
                  <li>
                    <a className="text-blue-700 hover:text-blue-400"
                      target={"_blank"} 
                      href="https://d31pgfdb08zpg3.cloudfront.net/">
                      [DEMO here]</a> 
                      (request for password)
                    </li>
                </ul>
              </div>

              <div className='my-4'>
                <div className='font-bold mb-2'>Dutch Auction Contract</div>
                <ul className='list-disc text-base px-5'>
                  <li>Coded, verified dutch auction contract for UMAMI token distribution plans.</li>
                  </ul>
              </div>
              
              <div className='my-4'>
                <div className='font-bold mb-2'>Private Artist Creator Contract</div>
                <ul className='list-disc text-base px-5'>
                  <li>Designed/built private contract for Crypto Artist  
                    <span><a className="ml-2 text-blue-700 hover:text-blue-400" href="https://twitter.com/AizawaShizuka" target={"_blank"}>
                      [Aizawa Shizuka]</a>
                      </span>
                  </li>
                  </ul>
              </div>
            </div>

            <hr className='my-2 h-px bg-gray-300 drop-shadow border-0'/>

            {/* Work Experiences */}
            <div className='mt-5'>
              <div className='font-bold text-black text-2xl my-2'>
                Work Experiences <span className="font-normal text-base">(Request to reveal company name.)</span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}


export default Home
