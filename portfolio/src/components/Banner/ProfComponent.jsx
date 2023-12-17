import React from 'react'
import styled from 'styled-components';
import { FaLinkedinIn } from "react-icons/fa";

const ProfComponent = () => {

    return (

        <Container>
            <Texts>
            <h4>
                Hello <span className="green">I'am</span>
            </h4>
            <h1 className="green">CAO Thien-Khang</h1>
            <h3>Developer</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
                iusto. Adipisci in qui officia provident tenetur sequi, deserunt
                corporis quos?
            </p>
            <button>Let's talk</button>
            <Social>
                <p>Check out my</p>
                <div className="social-icons">
                <span>
                    <a href="/">
                    <FaLinkedinIn />
                    </a>
                </span>
                </div>
            </Social>
            </Texts>
            <Profile>
                {/*  problème pour charger l'image*/}
               <img src="portfolio/public/CTK_portrait.jpg" alt="profile" />
            </Profile>
        </Container>

    )
    

}

export default ProfComponent;

const Container = styled.div`

    display: flex;
    gap: 2rem;
    padding: 3rem;
    width: 1200px;
    max-width: 1280px;
    margin: 0 auto;

`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;

const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  p{
    font-size : 0.9rem;
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`

  img{
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9551);
    transition: transform 400ms ease-in-out;

  }
  :hover img{
    transform: translateY(-10px);
  }

`;

