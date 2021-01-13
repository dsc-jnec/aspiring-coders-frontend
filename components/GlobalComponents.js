import styled from 'styled-components';

export const PageWrapper=styled.div`
`;
export const FullScreenFlex=styled.div`
height:100vh;
display:flex;
position:relative;
@media only screen and (max-width: 768px) {
    flex-direction:column;
    height:unset;
    padding-top:120px;
}
`
export const ContentFlex=styled.div`
height:100%;
display:flex;
align-items:center;
justify-content:center;
justify-items:center;
width:${props => props.width || "100%"};
flex-direction:column;
@media only screen and (max-width: 768px) {
    width:100%;
    height:50%;
}
`;
export const Heading=styled.h1`
font-weight:900;
font-size:3rem;
@media only screen and (max-width: 768px) {
    font-size:1.5rem;
}
`;
export const SubHeading= styled.h3`
font-weight:700;
font-size:2rem;
@media only screen and (max-width: 768px) {
    font-size:1rem;
}
`;
export const ImageWrapper=styled.img``;