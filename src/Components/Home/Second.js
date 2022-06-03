import React from 'react'
import styled from 'styled-components'
import {FiSearch} from 'react-icons/fi'

const Second = () => {
  return (
    <div>
       <Con>
            <SearchBox>
                <input placeholder='Enter Location/Landmark'/>
                <S><FiSearch/><span>Search</span></S>
            </SearchBox>

            <Service>Services Offered</Service>

            <BoxWrap>
                <Box1>
                    <Num>01 <span><Line/></span></Num>
                    <Share>Shared Apartment</Share>

                    <Tend>Tend flying on a showering booking<br/> wellness currency housing<br/> guide hospitality uncharted<br/> package saling motel</Tend>
                </Box1>
                    
                <Box2>
                <Num>02 <span><Line/></span></Num>
                    <Share>Private Room</Share>

                    <Tend>Tend flying on a showering booking<br/> wellness currency housing<br/> guide hospitality uncharted<br/> package saling motel</Tend>
                </Box2>


                <Box3>
                <Num>03 <span><Line/></span></Num>
                    <Share>House Rental</Share>

                    <Tend>Tend flying on a showering booking<br/> wellness currency housing<br/> guide hospitality uncharted<br/> package saling motel</Tend>
                </Box3>
            </BoxWrap>
       </Con>
    </div>
  )
}

export  default Second

const Service = styled.div`
        font-size:27px;
        font-family: poppins;
        font-weight: 500;
        color: black;
        margin-top: 90px;
        cursor: pointer;
`

const BoxWrap = styled.div`
    width: 85%;
    /* height: 500px; */
    /* background: white; */
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    /* padding-top: 10px; */
    /* padding-bottom: 20px; */

    @media screen and (max-width: 800px){
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`


const Con = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: red; */
    display: flex;
    align-items: center;
    flex-direction: column;
`


const SearchBox = styled.div`
    width: 85%;
    height: 70px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
   position: absolute;
   bottom: 100px;


    input{
        height: 30px;
        width: 80%;
        padding-left: 5px;
        cursor: pointer;
        outline: none;
        :focus{
            border: solid 1px orange;
        }

        @media screen and (max-width:500px){
        
            width: 70%;
          
        }
    }


    @media screen and (max-width:768px){
            bottom: 190px;
        }
        @media screen and (max-width:500px){
            bottom: 10px;
            width: 90%;
         
        }
        @media screen and (max-width: 1200px){
            top: 480px;
            height: 62px;
    }

    @media screen and (max-width:400px){
            top: 420px;
            width: 90%;
         
        }
    @media screen and (max-width:320px){
            top: 380px;
            width: 90%;
         
        }
 

`
const S = styled.div`
    width: 70px;
    background-color: orange;
    height: 38px;
    display: flex;
    align-items: center;
    padding-left: 5px;
    padding-right: 5px;
    color: white;
    justify-content: space-between;
    cursor: pointer;
    
    @media screen and (max-width:500px) {
            width: 60px;
         
        }
        @media screen and (max-width: 330px){
            font-size: 13px;
            width: 50px;
    }
`
const Box1 = styled.div`
    height: 270px;
    width: 32%;
    /* background: pink; */
    border-radius: 3px;
    cursor: pointer;

    :hover{
        background-color:orange;
        color: white;
    }

    @media screen and (max-width: 800px){
        width: 50%;
        margin-bottom: 20px;
        
    }

    @media screen and (max-width: 500px){
        width: 70%;
        margin-bottom: 20px;
        
    }

    @media screen and (max-width: 500px){
        width: 85%;
        margin-bottom: 20px;
        
    }

`
const Box2 = styled.div`
   height: 270px;
    width: 32%;
    /* background: pink; */
    border-radius: 3px;
    cursor: pointer;

    :hover{
        background-color:orange;
        color: white;
    }
    
    @media screen and (max-width: 800px){
        width: 50%;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 500px){
        width: 70%;
        margin-bottom: 20px;
        
    }

    @media screen and (max-width: 500px){
        width: 85%;
        margin-bottom: 20px;
        
    }
`
const Box3 = styled.div`
 height: 270px;
    width: 32%;
    /* background: pink; */
    border-radius: 3px;
    cursor: pointer;

    :hover{
        background-color:orange;
        color: white;
    }
    @media screen and (max-width: 800px){
        width: 50%;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 500px){
        width: 70%;
        margin-bottom: 20px;
        
    }
    
    @media screen and (max-width: 500px){
        width: 85%;
        margin-bottom: 20px;
        
    }
`
const Num = styled.div`
    width: 80%;
    height: 30px;
    /* background-color: red; */
    padding-left:20px;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-family: poppins;
    padding-top:10px;
   

    @media screen and (max-width: 800px){
        display: flex;
        justify-content:center;
    }

    @media screen and (max-width: 500px){
        display: flex;
        justify-content:center;
    }
    
    @media screen and (max-width: 500px){
        display: flex;
        justify-content:center;
        
    }
   
`
const Share = styled.div`
   padding-left:20px;
   margin-top:40px;
   font-size: 20px;
   font-family: poppins;
   font-weight: 500;

   @media screen and (max-width: 800px){
        display: flex;
        justify-content:center;
    }

    @media screen and (max-width: 500px){
        display: flex;
        justify-content:center;
    }
    
    @media screen and (max-width: 500px){
        display: flex;
        justify-content:center;
        
    }
  
`
const Tend = styled.div`
     padding-left:20px;
     font-size: 16px;
   font-weight: 500;
   opacity: 0.6;
   margin-top:10px;

   @media screen and (max-width: 800px){
        display: flex;
        justify-content:center;
        text-align:center;
    }

    @media screen and (max-width: 500px){
        display: flex;
        justify-content:center;
        text-align:center;
    }
    
    @media screen and (max-width: 500px){
        display: flex;
        justify-content:center;
        text-align:center;
        
    }
   
`
const Line = styled.div`
    height: 3px;
    width: 30px;
    background-color:black;
    margin-left:20px;

  
        background-color: white;

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