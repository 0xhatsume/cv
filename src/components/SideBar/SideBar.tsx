import React from 'react';
import { GithubDeets } from './ListItems';

export const SideBar=()=>{
  return (
    <aside className="w-64">
      <div className="py-4 px-3 
      bg-gray-50 rounded dark:bg-gray-800">
        
        
        <ul className="space-y-2">
          <li className="font-bold"> CONTACT 
            <ul className="font-normal">
              <li>0xhatsume@gmail.com</li>
              <li>{"<dm for value>"}</li>
              <li>Singapore</li>
              <GithubDeets textclass="grow" github="github.com/0xhatsume"/>
            </ul>
          </li>
          <li> Placeholder 1</li>

        </ul>
      </div>
    </aside>
    
  )
}
