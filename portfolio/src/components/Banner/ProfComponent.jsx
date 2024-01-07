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
                Je suis quelqu'un qui s'est passioné pour l'informatique pour son côté créatif. En effet, ce domaine
                offre de nombreuses possibilités pour créer divers site web, applications ou logiciels uniques et différents.
                C'est pour cela que je m'étais orienté sur ces études en commençant par un BTS SNIR (Système Numérique Informatique et Réseaux)
                où j'avais apris les premières bases dans le développement web, la programation orienté objet et le réseaux. Après avoir
                obtenu mon BTS, j'ai décidé de rejoidnre L'école Epitech en Pré MSC-Pro car j'étais attiré par leur pédagogie qui consistait
                à "Aprendre à Aprendre", ce qui signifie qu'on apprenait en pratiquant, notamment par des projets sans passer par des cours théoriques.
                En rejoignant ce cursus, je dois effectuer une alternance qui me permettrait de gagner de l'expérience dans le monde travail et donc
                je recherche une alternance dans le domaine du développement qui commencera dès que possible.  
              </p>
              <button><a href="#footer">Let's talk</a></button>
              <Social>
                  <p>Check out my</p>
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
    :hover {
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