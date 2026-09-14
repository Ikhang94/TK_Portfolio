import React, { useState } from 'react'
import styled from 'styled-components';
import { MdOutlineWeb, MdMenu, MdClose } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
        <Logo>
            <span className='green'><MdOutlineWeb/></span>
            <h1>Portfolio</h1>
        </Logo>
        <Nav isOpen={menuOpen}>
            <span><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></span>
            <span><a href="#skills" onClick={() => setMenuOpen(false)}>Compétences</a></span>
            <span><a href="#project" onClick={() => setMenuOpen(false)}>Projets</a></span>
            <span><a href="#hobby" onClick={() => setMenuOpen(false)}>Hobby</a></span>
            <span><a href="#footer" onClick={() => setMenuOpen(false)}>Contact</a></span>
        </Nav>
        <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <MdClose/> : <MdMenu/>}
        </MenuButton>
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
    z-index: 10000;
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
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        flex-direction: column;
        position: absolute;
        top: 100%;
        right: 0;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        min-width: 200px;
        padding: 1rem;
        border-radius: 5px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        z-index: 9999;
        span{
            margin-left: 0;
            padding: 0.8rem 0;
        }
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
const MenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    color: #fff;
    font-size: 1.8rem;
    cursor: pointer;
    @media(max-width: 840px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
