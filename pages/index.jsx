import Head from 'next/head';
import axios from 'axios';
import {API_URL,EXT_API_URL_BASE} from '../constants'
import {
  PageWrapper,
  FullScreenFlex,
  ContentFlex,
  Heading,
  ImageWrapper,
  SubHeading,
  NavBar,
  RankList
} from '../components';
import Link from 'next/link'
import styled from 'styled-components';

//import kate from '../public/giphy.gif'
const NavLink = styled.span`
color:rgb(255, 130, 0);
cursor: pointer;
`;
function Home({coderData}) {

  return (
    <PageWrapper>
      <NavBar />
      <Head>
        <title>Aspiring Coders! - DSC JNEC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <FullScreenFlex>
          <ContentFlex width={"50%"}>
            <Heading>Welcome to Aspiring Coders!</Heading>
            <SubHeading>A community that loves coding</SubHeading>
          </ContentFlex>
          <ContentFlex width={"50%"}>
          <ImageWrapper src={'/giphy.gif'}/>
          </ContentFlex>
        </FullScreenFlex>
        <FullScreenFlex>
        <ContentFlex>
            <Heading>Look at our Rank List</Heading>
            <SubHeading>Wow! These are some amazing Coders!</SubHeading>
            <RankList coderData={coderData} />
          </ContentFlex>
        </FullScreenFlex>
        <FullScreenFlex>
        <ContentFlex>
            <Heading>404?</Heading>
            <SubHeading>Add yourself to our community by clicking <Link href={'/register'}><NavLink>here!</NavLink></Link></SubHeading>
          </ContentFlex>
        </FullScreenFlex>
       </main>
    </PageWrapper>
  )
}
Home.getInitialProps= async(ctx) =>{
  const res= await axios.get(API_URL);
  const coderData=[];
  for(const coder of res.data){
    const profile=await axios.get(`${EXT_API_URL_BASE}${coder.codechefId}`)
    coderData.push(profile.data)
  }
    return {coderData:coderData}

}

export default Home