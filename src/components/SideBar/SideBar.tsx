import { url } from 'inspector';
import React from 'react';
import { 
    TwitterDeets, TelegramDeets,
    EmailDeets, PhoneDeets,
    LocationDeets, GithubDeets 
  } from './ListItems';
import { isProd, gitAddressPrefix } from '../../config/constants';
import CVjson from '../../config/cvfields/cv.json';

export const SideBar=()=>{
  return (
    <aside className="w-72">
      <div className="py-4 pl-7 pr-3 h-full 
      bg-gray-100 rounded dark:bg-gray-800">
        
        <div className="w-56 h-60 mt-1 mb-2 
          overflow-hidden
          border-2 border-gray-100/25
          rounded-3xl
          ">
          <img className="" src={`${isProd ? gitAddressPrefix : ''}/img/hatsumedev.jpg`}/>
          </div>
        <ul className="">
          
          {/* CONTACTS */}
          <li className="font-bold text-lg my-2 mt-5">
            <div className='ml-0.5'>CONTACT</div>
            <ul className="font-normal flex flex-col mt-1">
              <TwitterDeets alinkclass="underline text-blue-700 hover:text-blue-300" link="https://twitter.com/0xhatsume" linktext="twitter.com/0xhatsume"/>
              <TelegramDeets alinkclass="underline text-blue-700 hover:text-blue-300" link="https://t.me/oxHatsume" linktext="t.me/oxHatsume"/>
              <GithubDeets alinkclass="underline text-blue-700 hover:text-blue-300" 
                link="https://github.com/0xhatsume" linktext="github.com/0xhatsume"/>
              <EmailDeets linktext="0xhatsume@gmail.com"/>
              {/* <PhoneDeets linktext={"(upon request)"}/> */}
              <LocationDeets linktext="Singapore"/>
              
            </ul>
            </li>

          <hr className='my-3 h-px bg-gray-300 drop-shadow border-0'/>

          {/* SKILL/STACK */}
          <li>
            <div className='font-bold text-lg mt-4'>
            SKILLS/STACK
              </div> 
            <div className='font-normal text-base pt-3
              flex-wrap flex justify-start 
            '>
              <div className='w-fit mr-1
              text-base px-1 py-0.5 text-white 
              bg-gradient-to-b from-orange-700 to-orange-400 
              border border-gray-500 rounded-lg drop-shadow-sm'>
                Rust</div>
                <div className='w-fit mr-1
                text-base px-1 py-0.5 text-white 
              bg-gray-600 border border-gray-500 rounded-lg drop-shadow-sm'>
                Solidity</div>
                <div className='w-fit mr-1 
              text-base px-1 py-0.5 text-white 
              bg-gradient-to-b from-blue-900 via-blue-600 to-yellow-400 
              border border-gray-500 rounded-lg drop-shadow-sm'>
                Python</div>
                
                <div className='my-2 w-fit'>
                  <span className='
                  text-base px-1 py-0.5 pb-1 
                  bg-yellow-300  
                  border border-gray-500 rounded-l-lg drop-shadow-sm'>
                  Javascript</span>
                  <span className='
                  text-base px-1 py-0.5 pb-1 
                  bg-blue-500 text-white
                  border border-gray-500 rounded-r-lg drop-shadow-sm'>
                  Typescript</span>
                </div>
            </div>

            <hr className='my-3 h-px bg-gray-300 drop-shadow border-0'/>
            
            <div className='flex flex-wrap'>
              {   CVjson.stack.map((w, i)=>{
                    return (
                      <div key={`stack${i}`}
                        className="
                        w-fit text-xs mr-0.5 mb-1
                        px-1 py-0.5 
                        bg-white 
                        border border-gray-500 rounded-lg">
                        {w}
                      </div>
                    )
              })}
            </div>
            <hr className='my-3 h-px bg-gray-300 drop-shadow border-0'/>
            </li>
          
          {/* EDUCATION */}
          <li className="font-bold text-lg mt-4">
            <div className=''>EDUCATION</div>
            <ul className="font-normal text-base">
              
              <ul className='text-sm mt-1.5'>
                <li >Masters of Science</li>
                <li>Business Analytics</li>
                <li >National University of Singapore</li>
                <li className='text-xs'>2013 - 2014 (Singapore)</li>
              </ul>

              <ul className='text-sm mt-2'>
                <li >Bachelor of Engineering</li>
                <li>Mechanical Engineering</li>
                <li>Nanyang Technological University</li>
                <li className='text-xs'>2003-2007 (Singapore)</li>
              </ul>

            </ul>
            </li>
          <hr className='my-3 h-px bg-gray-300 drop-shadow border-0'/>
        </ul>
      </div>
    </aside>
    
  )
}
