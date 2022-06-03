import React from 'react'
import styled from 'styled-components'
import {IoLocationSharp} from 'react-icons/io5'
import ma from '../logins/ma.json'
import Header from '../Header/Header'
const Rooms = () => {
  return (
    <div>
        <Header/>
        <Container >
        <Descrip>Exquite Suites For Official's</Descrip>
            <Wrapper>
            
                {ma?.map((props)=>{
                    return(
            <Box1 key={props.id}>
            <Pic>
               <Pics src={props.pic}/>
            </Pic>
            <Hold>
                <A>{props.amount}</A>
                <Icon><IoLocationSharp/><span>{props.locate}</span></Icon>
                <Share>{props.kind}</Share>
               
                <But>
                <Butt>Book Now</Butt>
            </But>
            </Hold>
            
          
        </Box1>
                    )
                })}

            </Wrapper>
        </Container>

    </div>
  )
}

export default Rooms

const Pics = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: red; */
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    padding-top: 160px;
    
`

const Wrapper = styled.div`
    width: 85%;
    /* height: 500px; */
    /* background-color: blue; */
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (max-width: 800px){
        display: flex;
        align-items: center;
       justify-content:center;
    }
   
`


const Box1 = styled.div`
    height: 415px;
    width: 33%;
    border-radius: 10px;
    /* background: coral; */
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

const Descrip = styled.div`
    font-family: poppins;
    font-size: 35px;
    margin-bottom: 40px;
    cursor: pointer;
   
    :hover{
        color: orange;
  }

  @media screen and (max-width: 800px){
  
  text-align: center;
}  
`

const Pic = styled.div`
height: 200px;
width: 100%;
background-image: url("/Assets/h6.jpg");
background-position:center;
background-repeat:no-repeat;
background-size:cover;


`
const Hold = styled.div`
    height: 210px;
width: 100%;
display: flex;
/* justify-content:center; */
flex-direction: column;
align-items: center;
/* background-color :pink; */
`
// const Hold2 = styled.div``
const But = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;

 
 

`
const Butt = styled.div`
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
        margin-top: 30px;

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