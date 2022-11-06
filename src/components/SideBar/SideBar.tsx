import React from 'react';
import { 
    EmailDeets, PhoneDeets,
    LocationDeets, GithubDeets 
  } from './ListItems';

export const SideBar=()=>{
  return (
    <aside className="w-72 h-screen">
      <div className="py-4 pl-7 pr-3 h-full
      bg-gray-50 rounded dark:bg-gray-800">
        
        
        <ul className="">

          <li className="font-bold text-lg my-2">CONTACT
            <ul className="font-normal flex flex-col mt-1 pl-1">
              <EmailDeets linktext="0xhatsume@gmail.com"/>
              <PhoneDeets linktext={"(upon request)"}/>
              <LocationDeets linktext="Singapore"/>
              <GithubDeets link="https://github.com/0xhatsume" linktext="github.com/0xhatsume"/>
            </ul>
          </li>

          <li className='mt-7'>
            <div className='font-bold text-lg mt-7'>
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
              <div className="
                w-fit text-xs mr-0.5 mb-1
                px-1 py-0.5 
                bg-white 
                border border-gray-500 rounded-lg">
                EVM
              </div>
              <div className="
                w-fit text-xs mr-0.5 mb-1
                px-1 py-0.5 
                bg-white 
                border border-gray-500 rounded-lg">
                Solana-Stack
              </div>
              <div className="
                w-fit text-xs mr-0.5 mb-1
                px-1 py-0.5 
                bg-white 
                border border-gray-500 rounded-lg">
                Next.Js / React
              </div>
              <div className="
                w-fit text-xs mr-0.5 mb-1
                px-1 py-0.5 
                bg-white 
                border border-gray-500 rounded-lg">
                Hardhat
              </div>
              <div className="
                w-fit text-xs mr-0.5 mb-1
                px-1 py-0.5 
                bg-white 
                border border-gray-500 rounded-lg">
                Metaplex
              </div>
              <div className="
                w-fit text-xs mr-0.5 mb-1
                px-1 py-0.5 
                bg-white 
                border border-gray-500 rounded-lg">
                Tensorflow
              </div>
              <div className="
                w-fit text-xs mr-0.5 mb-1
                px-1 py-0.5 
                bg-white 
                border border-gray-500 rounded-lg">
                Pytorch
              </div>
              <div className="
                w-fit text-xs mr-0.5 mb-1
                px-1 py-0.5 
                bg-white 
                border border-gray-500 rounded-lg">
                Streamlit
              </div>
              <div className="
                w-fit text-xs mr-0.5 mb-1
                px-1 py-0.5 
                bg-white 
                border border-gray-500 rounded-lg">
                FastApi
              </div>
              <div className="
                w-fit text-xs mr-0.5 mb-1
                px-1 py-0.5 
                bg-white 
                border border-gray-500 rounded-lg">
                Airflow
              </div>
              <div className="
                w-fit text-xs mr-0.5 mb-1
                px-1 py-0.5 
                bg-white 
                border border-gray-500 rounded-lg">
                NLP
              </div>
              <div className="
                w-fit text-xs mr-0.5 mb-1
                px-1 py-0.5 
                bg-white 
                border border-gray-500 rounded-lg">
                MLflow
              </div>
              <div className="
                w-fit text-xs mr-0.5 mb-1
                px-1 py-0.5 
                bg-white 
                border border-gray-500 rounded-lg">
                Docker
              </div>
              <div className="
                w-fit text-xs mr-0.5 mb-1
                px-1 py-0.5 
                bg-white 
                border border-gray-500 rounded-lg">
                Elasticsearch Stack
              </div>
              <div className="
                w-fit text-xs mr-0.5 mb-1
                px-1 py-0.5 
                bg-white 
                border border-gray-500 rounded-lg">
                PostgreSQL
              </div>
              <div className="
                w-fit text-xs mr-0.5 mb-1
                px-1 py-0.5 
                bg-white 
                border border-gray-500 rounded-lg">
                MongoDB
              </div>
              <div className="
                w-fit text-xs mr-0.5 mb-1
                px-1 py-0.5 
                bg-white 
                border border-gray-500 rounded-lg">
                Neo4J/Cypher
              </div>
              <div className="
                w-fit text-xs mr-0.5 mb-1
                px-1 py-0.5 
                bg-white 
                border border-gray-500 rounded-lg">
                Kubernetes
              </div>
            </div>

          </li>

          <li className="font-bold text-lg mt-7">EDUCATION
            <ul className="font-normal text-base">
              
              <ul className='my-2'>
                <li >Masters of Science</li>
                <li>Business Analytics</li>
                <li >National University of Singapore</li>
                <li className='text-xs'>2013 - 2014 (Singapore)</li>
              </ul>

              <ul className='my-3'>
                <li >Bachelor of Engineering</li>
                <li>Mechanical Engineering</li>
                <li>Nanyang Technological University</li>
                <li className='text-xs'>2003-2007 (Singapore)</li>
              </ul>

            </ul>
            </li>

        </ul>
      </div>
    </aside>
    
  )
}
