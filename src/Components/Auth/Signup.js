import React from 'react'
import {FaTimes} from 'react-icons/fa'
import {IoPersonOutline} from 'react-icons/io5'
import {VscBriefcase} from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

 const SignIn = () => {
  return (
    <>
        <Con>
            <Wrap>
                <Descrip>
                    <Login>Create a free Lucia<span>..</span> account</Login>
                 <Link to='/'> <G></G></Link>  
                </Descrip>
              
               <InputHold>
                <Tag>Email <span>*</span></Tag>
                <input placeholder='Email'/>
               </InputHold>
               <InputHold>
                <Tag>Password <span>*</span></Tag>
                <input placeholder='Password'/>
               </InputHold>
               <InputHold>
                <Tag>Comfirm Password <span>*</span></Tag>
                <input placeholder='Comfirm Password'/>
               </InputHold>
               
               <Checker>
                   <input type='checkbox'/>
                   <Terms>You accept our Terms and Conditions and Privacy Policy</Terms>
               </Checker>

               <Reg>Register</Reg>

               <AL>
                   <Login1>Already have an accout?<Link to='/login'><span>Login</span></Link> </Login1>
               </AL>
            </Wrap>
        </Con>
    </>
  )
}

export default SignIn

const Login1 = styled.div`
    margin-top: 20px;
    font-size: 13px;

    span{
        color: darkorange;
    }
`

const Reg = styled.div`
    width: 100%;
    background-color: orange;
    display: flex;
    justify-content:center ;
    align-items: center;
    margin-top: 50px;
    font-size: 10px;
    height: 38px;
    border-radius: 5px;
    /* font-family: poppins; */
    font-size: 13px;
    font-weight: 500;
    color: #fff;

    :hover{
        background-color: darkorange;
    }

`

const AL = styled.div`
    display: flex;
    justify-content:center ;
    align-items: center;
`

const Checker = styled.div`
margin-top: 10px;
display: flex;

input{
    /* background-color: green;  */
}
`

const Terms = styled.div`
    font-size: 10px;

`
const InputHold = styled.div`
    margin-top: 20px;

input{
    margin-top: 5px;
    border-radius: 5px;
    padding-left: 20px;
    font-size: 10px;
    width: 92%;
    height: 35px;
    outline: none;
    border: none;
    background-color:#F0F5F7;

    :focus{
        border:solid 1px orange;
    }
}
`

const Tag = styled.div`
    font-size: 12px;
   
    span{
        color: red;
    }
`



const G = styled(FaTimes)``
const Con = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
`

const Wrap = styled.div`
    height: 450px;
    width: 400px;
    /* background-color: pink; */
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 30px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`

const Descrip = styled.div`
    display: flex;
    justify-content: space-between;
`

const Login = styled.div`
font-size: 15px;

span{
    color: orange;
    font-family: poppins;
}

`

const HoldDescrip = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
`
const But1 = styled.div`
    width: 170px;
    background-color: #E1F2E5;
    color: green;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    height:45px;

   :hover{
       background: green;
       color: #fff;
   }

   @media screen and (max-width: 400px){
    width: 150px;
}
@media screen and (max-width: 320px){
    width: 135px;
}
`

const Icon = styled(IoPersonOutline)`
    margin-right: 5px;
`
const Icondescrip = styled.div`
 font-size: 13px;
`

const Icon2 = styled(VscBriefcase)`
    margin-right: 5px;
`
const But2 = styled.div`
    width: 170px;
    background-color: #E1F2E5;
    color: green;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    height:45px;
    

   
    :hover{
       background: green;
       color: #fff;
   }
   @media screen and (max-width: 400px){
    width: 150px;
}
@media screen and (max-width: 320px){
    width: 135px;
}
`