import React from 'react'
import styled from 'styled-components'
import {IoLocationSharp} from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Hot = () => {
  return (
    <>
        <Con>
            <Hott>Hot Properties</Hott>

            <BoxWrap>
                <Box1>
                    <Pic>
                        <See>See More</See>
                    </Pic>
                    <Hold>
                        <A>A-1 Samehr</A>
                        <Icon><IoLocationSharp/><span>location</span></Icon>
                        <Share>Shared Room Apartment</Share>
                        <Hold2>
                            <But1>
                                <div>rest room</div>
                                <H1>Classic Room</H1>
                            </But1>

                            <But2>
                            <div>rest room</div>
                                <H1>Unique foam</H1>
                            </But2>
                        </Hold2>
                    </Hold>
                    
                    <But>
                        <Butt to='/room'>Enter</Butt>
                    </But>
                </Box1>
                <Box2>
                <Pic1>
                        <See>See More</See>
                    </Pic1>
                    <Hold>
                        <A>A-1 Buildings</A>
                        <Icon><IoLocationSharp/><span>location</span></Icon>
                        <Share>Exquisite Buildings</Share>
                        <Hold2>
                            <But1>
                                <div>unique</div>
                                <H1>Building's</H1>
                            </But1>
                            <But2>
                            <div>rest room</div>
                                <H1>Unique foam</H1>
                            </But2>
                        </Hold2>
                    </Hold>
                    
                    <But>
                        <Butt to='/sitting'>Enter</Butt>
                    </But>
                </Box2>

                <Box3>
                <Pic2>
                        <See>See More</See>
                    </Pic2>
                    <Hold>
                        <A>A-1 Buildings</A>
                        <Icon><IoLocationSharp/><span>location</span></Icon>
                        <Share>Rent or Buildings</Share>
                        <Hold2>
                            <But1>
                                <div>Unique</div>
                                <H1>House</H1>
                            </But1>
                            <But2>
                            <div>Classic</div>
                                <H1>Rooms</H1>
                            </But2>
                        </Hold2>
                    </Hold>
                    
                    <But>
                        <Butt to='/build'>See Datails</Butt>
                    </But>
                </Box3>
            </BoxWrap>
        </Con>
    </>
  )
}


export  default Hot
const See = styled.button`
  height: 40px;
        width: 100px;
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 2px;
        font-size:12px;
        font-family: poppins;
        background-color:orange;
        color: white;
        margin-left:20px;
        margin-top: 20px;
`

const Con = styled.div`
  width: 100%;
    height: 100%;
    /* background-color: red; */
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 40px;
    padding-bottom: 60px;
`
const Hott = styled.div`
   font-size:27px;
        font-family: poppins;
        font-weight: 500;
        color: black;
        /* margin-top: 120px; */
        cursor: pointer;

`

const BoxWrap = styled.div`
    width: 88%;
    height: auto;
    /* background: red; */
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    padding-top: 20px;
    padding-bottom: 20px;

    @media screen and (max-width: 800px){
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 90%;
    }
`

const Box1 = styled.div`
    height: 480px;
    width: 33%;
    /* background: pink; */
    border-radius: 3px;
    cursor: pointer;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-bottom: 30px;
    @media screen and (max-width: 800px){
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 90%;
    }

    
    /* @media screen and (max-width: 800px){
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
        
    } */

`

const Box2 = styled.div`
 height: 480px;
    width: 33%;
    /* background: pink; */
    border-radius: 3px;
    cursor: pointer;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    margin-bottom: 30px;
    @media screen and (max-width: 800px){
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 90%;
    }
`

const Box3 = styled.div`
 height: 480px;
    width: 33%;
    /* background: pink; */
    border-radius: 3px;
    cursor: pointer;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    /* margin-bottom: 20px; */
    @media screen and (max-width: 800px){
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 90%;
    }
`
const Pic = styled.div`
height: 200px;
width: 100%;
background-image: url("/Assets/b2.jpg");
background-position:center;
background-repeat:no-repeat;
background-size:cover;


`
const Pic1 = styled.div`
height: 200px;
width: 100%;
background-image: url("/Assets/p4.jpg");
background-position:center;
background-repeat:no-repeat;
background-size:cover;


`
const Pic2 = styled.div`
height: 200px;
width: 100%;
background-image: url("/Assets/h3.jpg");
background-position:center;
background-repeat:no-repeat;
background-size:cover;


`
const Hold = styled.div`
    height: 210px;
width: 100%;
/* background-color: blue; */
/* padding-top:10px;
padding-left:10px; */
display: flex;
justify-content:center;
flex-direction: column;

`
// const Hold2 = styled.div``
const But = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;

 
 

`
const Butt = styled(Link)`
    height: 50px;
        width: 150px;
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 2px;
        font-size:15px;
        font-family: poppins;
        background-color:orange;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;

        :hover{
    color: orange;
    border: solid 3px orange;
    background-color:white;
        }
`

const A = styled.div`
    font-family: poppins;
    margin-top:10px;
    margin-left:15px;

    :hover{
    color: orange;
}

@media screen and (max-width: 800px){
     font-size: 20px;
        
    } 
`
const Share = styled.div`
    font-size: 18px;
    font-family: poppins;
    opacity: 0.7;
    margin-top:5px;
    margin-left:2px;
    margin-left:15px;

    :hover{
    color: orange;
}
`
const Icon = styled.div`
    display: flex;
    align-items: center;
    margin-top:5px;
    margin-right:5px;
    /* background: red; */
    margin-left:15px;


    span{
        margin-left:10px;
        font-size:15px;
        font-weight: 500;
        :hover{
    color: orange;

}
@media screen and (max-width: 800px){
        font-size:18px;
        
    } 

    }
`
const Hold2 = styled.div`
    width: 100%;
    /* background:red; */
    height: 60px;
    display: flex;
    margin-top:20px;
    justify-content:center;
    align-items: center;
    
`
const But1 = styled.div`
    width: 40%;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    border-bottom:solid 2px black;
    color: black;
    height: 100%;

  
    
`
const H1 = styled.div`
   /* font-size:1px; */
   font-weight: 500;
   color: black;
   opacity: 0.7;
    /* font-family: poppins; */
    :hover{
    color: orange;
}

@media screen and (max-width: 800px){
      font-size:20px;
      font-family:poppins;
        
    } 

    @media screen and (max-width: 500px){
      font-size:17px;
      font-family:poppins;
        
    } 
    @media screen and (max-width: 320px){
      font-size:14px;
      font-family:poppins;
        
    } 


`
const But2 = styled.div`
   width: 40%;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    border-bottom:solid 2px black;
    border-left: solid 2px black;
    height: 100%;
`
// const Con = styled.div``
// const Con = styled.div``
// const Con = styled.div``
// const Con = styled.div``
// const Con = styled.div``
// const Con = styled.div``

