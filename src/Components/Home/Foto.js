import React from 'react'
import styled from 'styled-components'
import {BsFacebook} from 'react-icons/bs'
import {ImWhatsapp} from 'react-icons/im'
import {GrInstagram} from 'react-icons/gr'


const Foto = () => {
  return (
   <>
    <Con>

        <Wrap>
            <Box1>
                <Icon>Lucia<span>..</span></Icon>
                <Text>We've recently improved our <br/> Licensing Terms of Service <br/>
                Please review and accept.</Text>
                <span>
                    <C>Our social handle</C>
                <IconHold>
                    
                    <Icon1/>
                    <Icon2/>
                    <Icon3/>
                  
                </IconHold>
                </span>
            </Box1>
            <Box2>
                <Like>Like</Like>
                <P>test</P>
                <P>test</P>
                <P>test</P>
                <P>test</P>
                <P>test</P>
                <P>Blog</P>
            </Box2>
            <Box3>
            <Like>Support</Like>
                <P>test</P>
                <P>test</P>
                <P>test</P>
                <P>test</P>
                <P>test</P>
                <P>Blog</P>
            </Box3>
            <Box4>
            <Co>Contact Us</Co>
                <P>Phone :+234812175</P>
                <P>Email : @lucia.gmail.come</P>
                <P>Location: lagos ipeju lekki</P>
            </Box4>
        </Wrap>
        <p>All right reserved</p>
    </Con>
   </>
  )
}

export  default Foto


const Like = styled.div`
    /* font-family: poppins; */
    font-weight: 500;
    font-size: 17px;
    margin-top: 20px;
`
const Co = styled.div`
    /* font-family: poppins; */
    font-size: 17px;
    margin-top: 20px;
`

const P = styled.div`
    font-size: 16px;
    font-weight: 300;
    margin-top: 10px;
`


const C = styled.div`
margin-top: 20px;

@media screen and (max-width:800px){
  margin-top: 10px;
}
`

const IconHold = styled.div`
margin-top: 10px;
`

const Icon1 = styled(GrInstagram)`
    /* background-color: black; */
    height: 30px;
    width: 30px;
    /* border-radius: 100%; */
    /* color: orange; */

    @media screen and (max-width:800px){
    height: 20px;
    width: 20px;
}

`

const Icon2 = styled(BsFacebook)`
 height: 30px;
    width: 30px;
    margin-left: 20px;

    @media screen and (max-width:800px){
    height: 20px;
    width: 20px;
}
`

const Icon3 = styled(ImWhatsapp)`
 height: 30px;
    width: 30px;
    margin-left: 20px;

    @media screen and (max-width:800px){
    height: 20px;
    width: 20px;
}
`

const Icon = styled.div`
font-size: 30px;
font-family: poppins;
color:black;


span{
    color: orange;
    font-size: 35px;
font-family: poppins;
}

@media screen and (max-width:800px){
    font-size: 32px;
    font-family: poppins;
    /* margin-bottom: 1px; */
}
`

const Text = styled.div`
font-size: 16px;
color:black;
/* margin-top: 15px; */
font-weight: 300;
line-height: 27px;
`

const Box1 = styled.div`
width: 35%;
height: 320px;



@media screen and (max-width:800px){
    width: 40%;
}

@media screen and (max-width:500px){
   width: 50%;
}
`
const Box2 = styled.div`
width: 20%;
height: 300px;
/* background-color: pink; */


@media screen and (max-width:800px){
    display: none;
}



`
const Box3 = styled.div`
width: 20%;
height: 300px;
/* background-color: pink; */

@media screen and (max-width:500px){
    display: none;
}

`
const Box4 = styled.div`
width: 20%;
height: 320px;
/* background-color: pink; */



@media screen and (max-width:800px){
    width: 35%;
}

@media screen and (max-width:500px){
   width: 50%;
}
`

const Con = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
    padding-top: 80px;
    background-color: lightyellow;
    flex-direction: column;
`

const Wrap = styled.div`
    width: 85%;
    /* height: 500px; */
    /* background-color: blue; */
    display: flex;
    justify-content: space-between;


`