import styled from 'styled-components'
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
        Wow
      </PageWrapper>
  )
}

export default Success