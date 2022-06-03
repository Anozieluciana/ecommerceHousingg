import React,{useState} from 'react'
import styled from 'styled-components'
import Header from '../Header/Header'
import {FaGreaterThan} from 'react-icons/fa'

const Hero = () => {
  const Slider=[
    "/Assets/f1.jpg",
    "/Assets/h1.jpg",
    "/Assets/h2.jpg",
    "/Assets/f2.jpg"
  ]

  const [change, setChange] = useState(0)

  const addcount = ()=>{
    setChange(change + 1)
  }

  return (

    <>
        <Con bg={Slider[change%Slider.length]}>
        <Header/>
        <Wrap>
          <Hold>
            <Find>Find Your Sweet <br/> House.</Find>
            <p>World's Largest Theme Based Apartments.</p>
            <button>Start Now</button>
            </Hold>
            <Tag onClick={addcount}>
              <FaGreaterThan size='20px'/>
            </Tag>
        </Wrap>
        </Con>
        <Over/>
    </>

  )
}

export  default Hero
const Over = styled.div`
height: 500px;
width: 100%;
background:black;
opacity: 50%;
position: relative;

@media screen and (max-width: 400px){
        height:450px;
    }
    @media screen and (max-width: 330px){
        height:400px;
    }
`

const Con = styled.div`
width: 100%;
height: 500px;
background-image: url(${({bg})=>bg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
display: flex;
position: absolute;

@media screen and (max-width: 400px){
        height:450px;
    }
@media screen and (max-width: 330px){
        height:400px;
    }

`

const Wrap =styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`

const Find = styled.div`
  font-size:50px ;
  font-family: poppins;
  font-weight: 500;
  color: white;
  cursor: pointer;
  @media screen and (max-width: 500px){
   font-size: 40px;
   text-align: center;
  font-family  :poppins ;
 
}


`

const Hold = styled.div`
  
    @media screen and (max-width: 500px){
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
    
}

    


p{
  color:white;
  font-size: 14px;
  font-family: poppins;
  cursor: pointer;
}

button{
  background-color: orange;
  width: 150px;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 2px;
  color: white;
  margin-top: 30px;
  font-size: 14px;
  font-family: poppins;
  cursor: pointer;

  @media screen and (max-width:500px) {
            width: 120px;
            /* font-size: 15px; */
        }
}

`

const Tag = styled.div`
margin-left: 200px;
height: 40px;
width:40px;
border-radius:100%;
display: flex;
align-items: center;
justify-content: center;
background-color:orange;
color: white;
transition: all 350ms;
transform: scale(0.70);
cursor: pointer;
:hover{
  transform: scale(1);
  background-color:white;
color: orange;
}
@media screen and (max-width: 500px){
  display: none;
}
`