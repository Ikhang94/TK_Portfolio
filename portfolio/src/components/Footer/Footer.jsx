import React, { Profiler } from 'react'
import styled from 'styled-components';
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook, BsSlack } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";

const Footer = () => {

    return (
        <Container>
            <Profile>
                <h1>Portfolio</h1>
                <div className='address'>
                   <h1>Address</h1>
                   <p>48 rue Garibaldi, Saint-maur des fossés, 94100</p> 
                </div>
                <div className='links'>
                    <h1>Contact me directly</h1>
                    <div>
                        <span><FiPhoneCall/></span>
                        <a href="tel:+3352233508">+33 52 23 35 08</a>
                    </div>
                    <div>
                        <span><FiMail/></span>
                        <a href="mailto:cao.thien.khang.pro@gmail.com">cao.thien.khang.pro@gmail.com</a>
                    </div>
                </div>
                <div className='profile'>
                    <h1>Check my profile</h1>
                    <div className='icons'>
                    <span><a href='#'><AiFillGithub/></a></span>
                    <span><a href='#'><AiFillLinkedin/></a></span>

                    </div>
                </div>
                <ArrowUp><AiOutlineArrowUp/></ArrowUp>
            </Profile>
            <Form></Form>
        </Container>
        
    )

}

export default Footer;
const Container = styled.div`
    margin-top: 2rem;
    position: relative;
    padding: 2rem 0;
    width: 80%;
    maw-width: 1280px;
    margin: 0 auto;
    @media(max-width:840px){
        width: 80%;
    }
`

const Profile = styled.div`
    .address{
        padding: 1rem 0;
        h1{
            font-size: 1.2rem;
        }

        p{
            width: 60%;
            padding-top: 0.5rem;
        }

    }

    .links{
        h1{
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
        }

        div{

            display: flex;
            align-item: center;
            gap: 0.5rem;
            a{
                text-decoration: none;
                color: lightgray;
                &:hover{
                    color: orange;
                }
            }
        }
    }  

    .profile{
        h1{
            font-size: 1.2rem;
            padding: 1rem 0;
        }
        .icons{
            display : flex;
            align-items: center;

            span{
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #000;
                width: 2rem;
                height: 2rem;
                margin-right: 0.5rem;
                border-radius: 50px;

                &:hover{
                    background-color: orange;
                }

                a{
                    margin-top: 1.2rem
                    color: #fff;
                }
            }
        }
    } 
`

const Form = styled.div``

const ArrowUp = styled.div`
width: 2rem;
height: 2rem;
background-color: #01be96;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
font-size: 1.3rem;
font-weight: 700;
margin-top: 2rem;

`