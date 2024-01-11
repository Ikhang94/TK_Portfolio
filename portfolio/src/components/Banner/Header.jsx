//import React, { useState } from 'react'
import styled from 'styled-components';
import { MdOutlineWeb } from "react-icons/md";

const Header = () => {

  return (
    <Container>
        <Logo>
            <span className='green'><MdOutlineWeb/></span>
            <h1>Portfolio</h1>
        </Logo>
        <Nav>
            <span><a href="#home">Home</a></span>
            <span><a href="#skills">Compétences</a></span>
            <span><a href="#project">Projets</a></span>
            <span><a href="#hobby">Hobby</a></span>
            <span><a href="#footer">Contact</a></span>
        </Nav>
    </Container>
  )
}

export default Header

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    width: 80%;
    margin: 0 auto;
    padding: 1.5rem 0;
    position: relative;
    animation: header 500ms ease-in-out;
    @media(max-width: 840px){
        width: 90%;
    }
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span{
        font-size: 1.8rem;
    }

    h1{
        font-weight: 600;
        font-size: 1.2rem;
    }
`
const Nav = styled.div`
    @media(max-width: 840px){
        display: none;
        width: 90%;
    }
    span{
        margin-left: 1rem;
        a{
            color: #fff;
            text-decoration: none;
            font-weight: 400;
            position: relative;
            &:before{
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                height: 2px;
                background-color: #fff;
                transform: scale(0);
                transform-origin: right;
                transition: transform 400ms ease-in-out;
            }
            &:hover:before{
                transform: scale(1);
                transform-origin: left;
            }
            &:hover{
                opacity: 0.7;
            }
        }
    }


`