import {useState} from 'react'
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components';
import {API_URL,EMAIL_REGEX} from '../constants'
import {
  PageWrapper,
  FullScreenFlex,
  ContentFlex,
  Heading,
  ImageWrapper,
  SubHeading,
  NavBar,
} from '../components';


//import kate from '../public/giphy.gif'
const FormWrapper=styled.div`
background-color:rgba(255,255,255,0.03);
height:420px;
width:75%;
border-radius:12px;
`;
const RegisterForm=styled.form`
height:100%;
display:flex;
flex-direction:column;
gap:32px;
margin:3rem 6rem;
@media only screen and (max-width: 768px) {
  margin:1.5rem 3rem;
  height:unset;
}
`;
const MessageContainer=styled.div`
color:#f44336;
`;
const SubmitButton=styled.input`
background-color:rgba(255,255,255,0.08);
color:#fffc;
border:none;
font-size:18px;
padding:1.5rem;
border-radius:8px;
@media only screen and (max-width: 768px) {
  padding:0.75rem;
    }
:hover{
background-color:rgb(255, 130, 0);
cursor: pointer;
color:black;
}
`;
const Input=styled.input`
height:45px;
    font-size:24px;
    background-color:rgba(255,255,255,0.06);
    border:${props => props.error? "1px #f44336 solid" :"none"};
    color:#ffe;
    padding:1rem 1.2rem;
    border-radius:8px;
    &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out,font-size 9999s ease-out";
    -webkit-transition-delay: 9999s;

  }`;
function Register(props) {
    const router = useRouter()
    const [error, setError] = useState({})
const submitVals=async (param)=>{
    try {
        param.preventDefault();
    const {name,email,codechefid}=param.target;
    if(!(name.value.length || email.value.length || codechefid.value.length)){
        setError({
            name:true,
            email:true,
            codechefId:true,
            message:"Kindly Fill Required Fields"
        }) 
        return null;
    }
    else if(!(EMAIL_REGEX.test(String(email.value).toLowerCase()))){
        setError({
            email:true,
            message:"Kindly Fill a valid E-mail"
        }) 
        return null; 
    }
    setError({})
    const payload={
            "name": name.value,
            "email": email.value,
            "codechefId": codechefid.value
    }
    const res= await axios.post(API_URL,payload)
    router.push('/success')
    console.log(res);
    console.log(payload);
    } catch (error) {
        setError({
            "codechefId":true,
            message:"Coder Already Registered"
        })

    }
    
}
  return (
    <PageWrapper>
      <NavBar />
      <Head>
        <title>Come Join the Byte Side!</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <main>
        <FullScreenFlex>
        <ContentFlex width={"50%"}>
          <ImageWrapper src={'/hellokate.gif'}/>
          </ContentFlex>
          <ContentFlex width={"50%"} gap={"1rem"}>
            <SubHeading>You Decided To Join Us! Awwwwwesome!</SubHeading>
            <FormWrapper>
            <RegisterForm method={"post"} onSubmit={submitVals}>
                <Input onChange={()=>setError({...error,name:null})} error={error.name} name="name" placeholder="Full Name" type="text"/>
                <Input onChange={()=>setError({...error,email:null})} error={error.email} name="email" placeholder="E-mail" type="text"/>
                <Input onChange={()=>setError({...error,codechefId:null})} error={error.codechefId} name="codechefid" placeholder="Codechef Id" type="text"/>
                <SubmitButton type="submit" value="Submit"/>
                {error?<MessageContainer>
                {error.message}
            </MessageContainer>:null}
            </RegisterForm>
         
            </FormWrapper>
          </ContentFlex>

        </FullScreenFlex>
       </main>
    </PageWrapper>
  )
}

export default Register