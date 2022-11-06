import React from 'react';
import { SideListTag } from './SideListTag';

export const EmailDeets= ({linktext})=> {
    return (

    <SideListTag 
        paths={
            <>
            <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
            </>
        }
        spanprops={linktext}
    />
    )
}