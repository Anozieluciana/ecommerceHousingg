import React,{useState} from 'react'
import styled from 'styled-components'
import {GoThreeBars} from 'react-icons/go'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {AiOutlineMenuFold,AiOutlineMenuUnfold} from 'react-icons/ai'

import { Link } from 'react-router-dom'



 const Header = () => {
    const [changer, setChanger] = useState(true)

    const Toggle = () =>{
        setChanger(!changer)
    }

  return (
 
        <Con>
            <Wrapper>
                <Icon to='/'>Lucia<span>..</span></Icon>
                <Hold1>
                    <S><span>Select City </span><RiArrowDropDownLine/></S>

                    <Country><span>Select Country </span><RiArrowDropDownLine/></Country>
                </Hold1>

                <ButHold onClick={Toggle} changer={changer}>
                    <But1>Become a Owner</But1>
                    <But to='/schedule'>Schedule Visit</But>
                    <But2 to='/signup'>Register</But2>
                </ButHold>
                <GoHold>
                <GoThreeBars size='30px'/>
                </GoHold>
              
                <HoldToggle onClick={Toggle}>
                    { changer ? (<AiOutlineMenuUnfold size='30px'/> ): (<AiOutlineMenuFold size='30px'/>) }
                </HoldToggle>
            </Wrapper>
        </Con>
    
  )
}

export default Header
const HoldToggle = styled.div`
display: none;

@media screen and (max-width: 800px){
    display:flex;
    
}


`
const GoHold = styled.div`
@media screen and (max-width: 800px){
    display:none;
}

`

const Con = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    background:rgba(90,40,5,40%);
    align-items: center;
    position: fixed;
    top: 0;
    color: white;
    z-index:200;
    backdrop-filter: blur(10px);
`

const Wrapper = styled.div`
        height: 90%;
        width: 85%;
        /* background-color: pink; */
        display: flex;
        justify-content: space-between;
        align-items: center;
`
const Icon = styled(Link)`
    font-size: 35px;
    font-family: poppins;
    font-weight: 900;
    cursor: pointer;
    color: orange;
    text-decoration: none;
    span{
        color: white;
        font-size: 50px;
    font-family: popping;
    font-weight: 900;
    }
`
const ButHold = styled.div`
    display: flex;
    width: 390px;
    /* background-color: red; */
    align-items: center;
    justify-content: space-between;
 
    @media screen and (max-width: 800px){
    display:flex;
    flex-direction:column;
    position: absolute;
    height: 40vh;
    width: 50%;
    top: 95px;
    justify-content:space-evenly;
    left: ${({changer})=> (changer? '-100%' : 0)};
        background-color: #123456;
        color: white;
        border-radius: 0px 10px 10px 0px;
        transition: all 900ms;
}
    
`
const Hold1 = styled.div`
    display: flex;
    width: 260px;
    /* background-color:red; */
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    @media screen and (max-width: 800px){
    display:flex;
    width: 95px;
}

`
const S = styled.div`
    /* font-size: 15px; */
    /* background-color:blue; */
    width: 95px;
    justify-content: space-between;
    align-items: center;
    display: flex;
    :hover{
        transition: all 550ms;
transform: scale(1.20);
         color:orange;
      }
    @media screen and (max-width: 800px){
    display:flex;
    
}
`
const Country = styled.div`
     /* background-color:blue; */
    width: 140px;
    justify-content: space-between;
    align-items: center;
    display: flex;
    :hover{
        transition: all 550ms;
transform: scale(1.20);
        color:orange;
      }
    @media screen and (max-width: 800px){
    display:none;
}
`
const But = styled(Link)`
   height: 50px;
        /* background-color:lightblue; */
        width: 150px;
         border: none;
         outline: none;
         border-radius: 2px;
         font-size: 14px;
         font-weight:400;
         font-family: poppins;
            display: flex;
            align-items: center;
            justify-content:center;
            cursor: pointer;
            transform: scale(1);
            transition: all 950ms;
            text-decoration: none;
            color: white;
         :hover{
            transform: scale(1.01);
            background:rgba(255,165,0,40%);
         }
`
const But1 = styled.div`
   height: 50px;
        /* background-color:lightblue; */
        width: 150px;
         border: none;
         outline: none;
         border-radius: 2px;
         font-size: 14px;
         font-weight:400;
         font-family: poppins;
            display: flex;
            align-items: center;
            justify-content:center;
            cursor: pointer;
            transform: scale(1);
            transition: all 950ms;
         :hover{
            transform: scale(1.01);
            background:rgba(255,165,0,40%);
         } 
`
const But2 = styled(Link)`
   height: 50px;
        /* background-color:lightblue; */
        text-decoration: none;
        width: 150px;
        color: inherit;
         border: none;
         outline: none;
         border-radius: 2px;
         /* margin-left: 5px; */
         font-size: 14px;
         font-weight:400;
         font-family: poppins;
            display: flex;
            align-items: center;
            justify-content:center;
            cursor: pointer;
            transform: scale(1);
            transition: all 950ms;
         :hover{
            transform: scale(1.01);
            background:rgba(255,165,0,40%);
         } 
`
// const Con = styled.div``
// const Con = styled.div``
// const Con = styled.div``
// const Con = styled.div``
// const Con = styled.div``
// const Con = styled.div``
// const Con = styled.div``
// const Con = styled.div``
// const Con = styled.div``
// const Con = styled.div``
// const Con = styled.div``
// const Con = styled.div``
// const Con = styled.div``
// const Con = styled.div``
// const Con = styled.div``
