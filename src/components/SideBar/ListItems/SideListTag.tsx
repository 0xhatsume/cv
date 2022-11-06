import React from 'react'

export const SideListTag=({paths, spanprops})=>{
    return (
        <li className="mt-0.5 inline-flex justify-start items-center">
            <svg className="h-4 mr-1.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                {paths}
                </svg>
            <span className="grow text-base">
                {spanprops}
            </span>
        </li>
    )
}
