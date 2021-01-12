import React from 'react'
import styled from 'styled-components';
import {ImageWrapper} from "./index";
import Link from 'next/link'
const NavWrapper=styled.div`
position:fixed;
top:0;
width:100%;
height:5rem;
border-radius:0 0 1rem 1rem;
background-color:white;
display:flex;
padding:0 15px;
z-index:100;
`;
export const NavBar = () => {
    return (
        <NavWrapper>
            <Link href={'/'}>
            <ImageWrapper style={{cursor:"pointer"}} height={80} width={320} src={"/logo.svg"} />
            </Link>
        </NavWrapper>
    )
}

