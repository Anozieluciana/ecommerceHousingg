import React from 'react'
import styled from 'styled-components'
import {ImCheckboxUnchecked} from 'react-icons/im'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'


const Signup = () => {
  return (
    <div>
        <Con>
            <First>
                <H2 to='/'>Lucia<span>..</span></H2>
                <Box>
                    <Hold1>
                    <Join>Schedule A Visit</Join>
                  
                
                    </Hold1>
                    <Hold2>
                    <Input>
                                <Label>Full name</Label>
                                <input placeholder='Enter your full name' type='name'/>
                            </Input>
                            <Input>
                                <Label>Email Address</Label>
                                <input placeholder='Enter your email' type='email'/>
                            </Input>
                            <Input>
                                <Label>Contact</Label>
                                <input placeholder='Enter phone number' type='password'/>
                            </Input>
                            <Input>
                                <Label>Interest</Label>
                                <input placeholder='your interest e.g i need a house' type='comfirm'/>
                            </Input>
                          
                            <But>Summit</But>
                            
                    </Hold2>
                </Box>
            </First>
            <Second>
                <Pic src='./Assets/undraw.svg'/>
            </Second>
        </Con>
    </div>
  )
}


export  default Signup
const Pic = styled.img`
    height: 90%;
    width: 95%;
    object-fit: contain;
`

const But = styled.button`
width:90%;
background:orange;
padding:13px 2px;
// height:50px;
display:flex;
justify-content:center;
align-items:center;
font-size:17px;
font-weight:300;
border-radius:5px;
transform:scale (0.8);
margin-top:10px;
border:none;
color: white;
cursor: pointer;
`



const Hold2 = styled.div`
// background:red;
margin-top:20px;

`


const Input = styled.div`
width:90%;

    margin-top:5px;

    input{
        padding:13px 2px;
        border:none;
        outline:1px solid rgba(0,0,0,0.5);
        border-radius:5px;
        box-shadow:0 0 2px rbga (0, 0, 0, 0.3);
        margin-top:5px;
        cursor: pointer;
        width:100%;
        :focus{
            outline:1px solid rgba(0,0,0,0.9)
        }
    }

    
`

const Label = styled.div`
    font-size:17px;
    color:black;
    font-weight:600;
`

const Hold1 = styled.div`
    justify-content:space-between;
    display:flex;
    flex-direction:column;
    align-items:center;
    // background:red;
    // flex:0.4;
`

const Join = styled.div`
    color:black;
    font-size:25px;
    font-weight:700;
   font-family: poppins;
`




const H2 = styled(Link)`
    font-size:35px;
    font-weight:800;
    font-family: poppins;
    cursor: pointer;
    text-decoration: none;
    color: black;
    span{
        font-size:35px;
    font-weight:800;
    font-family: poppins;
    color :orange ;
    }
`

const Box = styled.div`
width:60%;
height:75%;
 background: lightgrey;
color:white;
padding-left: 20px;
padding-top: 10px;
// display:flex;
// justify-content:space-between;
// align-items:center;
// flex-direction:column;
border-radius:5px;
`

const Con = styled.div`
width:100%;
// background-color:pink;
display:flex;
height:100%;
min-height:100vh;
`

const First = styled.div`
flex:0.4;
display:flex;
align-items:center;
justify-content:space-around;
flex-direction:column;
// background:white;
padding:10px 20px;

@media screen and (max-width: 800px){
    /* display: flex; */
    /* justify-content: center; */
    align-items: center;
    flex-direction:column;
    /* background-color: red; */
   flex: 1;
}
`

const Second = styled.div`
flex:0.6;
display:flex;
align-items:center;
justify-content:center;
background:darkorange;

@media screen and (max-width: 800px){
    display: none;
   
}
`

