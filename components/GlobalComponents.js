import styled from 'styled-components';

export const PageWrapper=styled.div`
`;
export const FullScreenFlex=styled.div`
height:100vh;
display:flex;
position:relative;
`
export const ContentFlex=styled.div`
height:100%;
display:flex;
align-items:center;
justify-content:center;
justify-items:center;
width:${props => props.width || "100%"};
flex-direction:column;
`;
export const Heading=styled.h1`
font-weight:900;
font-size:3rem;
`;
export const SubHeading= styled.h3`
font-weight:700;
font-size:2rem;
`;
export const ImageWrapper=styled.img``;