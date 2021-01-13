import styled from 'styled-components'
import Head from 'next/head'
import {useEffect} from 'react'
import { useRouter } from 'next/router'
const PageWrapper=styled.div`
height:100vh;
background:url('/wow.gif');
background-size: cover;
`;
function Success(props) {
    const router= useRouter()
useEffect(() => {
    setTimeout(() => {
        router.push('/')
    }, 1200);

}, [])
  return (
    <PageWrapper>
            <Head>
        <title>OHHH MAHHH GOHHHH</title>
        <link rel="icon" href="/icon.png" />
      </Head>
        {" "}
      </PageWrapper>
  )
}

export default Success