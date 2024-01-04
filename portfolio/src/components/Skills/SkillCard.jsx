import React from 'react'
import styled from 'styled-components';

const SkillCard = (props) => {
  const {img,name} = props.item;
  return (
    <Container>
      <div className='box_name'>
        <h3>{name}</h3>
        <Box>
          <ImageWrapper>
              <img src={img} alt="skill" />
          </ImageWrapper>
        </Box>
      </div>
    </Container>
  )
}

export default SkillCard;

const Container = styled.div`
  max-width: 100%; /* Utilisation de 100% de la largeur disponible */
  margin: 0 auto;
  padding: 3rem 2rem; /* Ajout de padding pour les côtés */
  flex-wrap: wrap; /* Permet aux éléments enfants de passer à la ligne si l'espace est insuffisant */
  justify-content: center; /* Centrer les éléments enfants horizontalement */
  align-items: center; /* Centrer les éléments enfants verticalement */

  @media (max-width: 840px) {
    padding: 3rem 0.5rem; /* Réduire davantage le padding pour les appareils mobiles */
    width: 30%;
  }

  .box_name {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3 {
    margin-bottom: 1rem;
  }
`;

const ImageWrapper = styled.div`

  max-width: 100px;
  max-height: 100px;
  width: 100%;
  height: auto;
  margin: 0.5rem;
  text-align: center;


  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    transition: transform 0.3s ease, opacity 0.3s ease; /* Transition pour l'effet de survol */
  }

  &:hover img {
    transform: scale(1.1);
    opacity: 0.7;
  }


`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;