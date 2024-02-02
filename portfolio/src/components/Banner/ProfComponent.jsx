import React from 'react'
import styled from 'styled-components';
import { FaLinkedinIn } from "react-icons/fa";
import {Slide} from 'react-awesome-reveal';

const ProfComponent = () => {

    return (

        <Container id="home">
            <Slide direction="left">
              <Texts>
              <h4>
                  Bonjour <span className="green">Je m'appelle</span>
              </h4>
              <h1 className="green">CAO Thien-Khang</h1>
              <h3>Developpeur Web</h3>
              <p>
              Je suis quelqu'un qui s'est passionné pour l'informatique en raison de son côté créatif. 
              Ce domaine offre de nombreuses possibilités pour créer des sites web, des applications ou des logiciels uniques 
              et différents. C'est pourquoi j'ai choisi de me spécialiser dans ce domaine en commençant par un BTS SNIR 
              (Systèmes Numériques Informatiques et Réseaux) où j'ai acquis les bases du développement web, de la programmation orientée objet 
              et des réseaux. Après l'obtention de mon BTS, j'ai décidé de rejoindre l'école Epitech en Pré MSC-Pro, attiré par leur pédagogie axée
               sur "Apprendre à Apprendre", où l'apprentissage se fait principalement par la pratique à travers des projets 
               concrets plutôt que par des cours théoriques.

              Dans le cadre de ce cursus, je suis tenu d'effectuer une alternance, ce qui me permettra d'acquérir de l'expérience 
              dans le monde professionnel. Ainsi, je suis à la recherche d'une opportunité d'alternance dans le domaine du développement, 
              et je suis disponible pour commencer dès que possible.  
              </p>
              <button><a href="#footer">Parlons un peu</a></button>
              <Social>
                  <p>Regarder mes...</p>
                  <div className="social-icons">
                  <span>
                      <a href="https://www.linkedin.com/in/thien-khang-cao/">
                      <FaLinkedinIn />
                      </a>
                  </span>
                  </div>
              </Social>
              </Texts>
            </Slide>
           <Slide>
           <Profile direction="right"> 
                <img src="/CTK_portrait.jpg" alt="profile" /> 
             </Profile>
            </Slide>
        </Container>

    )
    

}

export default ProfComponent;
{/*  problème lorsqu'on laisse la souris sur le bouton*/}
const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
    padding-top: 0;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
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
    line-height: 1.6;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    a{
      text-decoration: none;
      outline: none;
      color: #fff;
    }
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    &:hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
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
      &:hover {
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
  margin-bottom: 1rem;
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  &:hover img {
    transform: translateY(-10px);
  }
`;