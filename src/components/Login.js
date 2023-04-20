import React from 'react'
import styled from 'styled-components';

export default function Login() {

  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/assests/images/cta-logo-one.svg" alt="" />
          <SignUp>Get All There</SignUp>
          <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Description>
          <CTALogoTwo src="/assests/images/cta-logo-two.png" alt=''></CTALogoTwo>

        </CTA>

        <BgImage />

      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow:hidden;
  dispaly:flex;
  flex-direction:column;
  text-align:center;
  height:100vh;
`;
const Content = styled.div`
  margin-bottom:10vw;
  width:100%
  positon:relative;
  min-height:100vh;
  box-sizing: border-box;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  padding: 80px 40px;
  height:100%;
`;
const BgImage = styled.div`
  height:100%;
  background-positon:top;
  backgroud-size:cover;
  background-repeat:no-repeat;
  background-image:url("/assests/images/login-background.jpg");
  position:absolute;
  top:0;
  right:0;
  left:0;
  z-index:-1;
`;
const CTA = styled.div`
  max-width:650px;
  width:100%;
  disply:flex;
  flex-direction:column;
`;
const CTALogoOne = styled.img`
  margin-bottom:12px;
  max-width:600px;
  min-height:1px;
  display:block;
  width:100%;
`;
const SignUp = styled.a`
  
  font-weight:bold;
  color: #f9f9f9;
  background-color:#0063e5;
  margin-bottom:12px;
  width:100%;
  letter-spacing:1.5px;
  font-size:18px;
  padding: 16.5px 0;
  border:1px solid transparent;
  border-radius:4px;

  &:hover{
    background-color:#6493ce;
  }

`;
const Description = styled.p`
  color: hsla(0,0%,93.5%,1);
  font-size:11px;
  margin:0 0 24px;
  line-height:1.5;
  letter-spacing:1.5px;
`;
const CTALogoTwo = styled.img`
  max-width:600px;
  margin-bottom:20px;
  display:inline-block;
  verticle-align:bottom;
  width:100%;
`;
