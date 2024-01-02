import React from 'react'
import styled from 'styled-components';

const SkillCard = (props) => {
  const {img,name} = props.item;
  return (
    <Container>
        <Box>
            <h3>{name}</h3>
            <ImageWrapper>
                <img src={img} alt="skill" />
            </ImageWrapper>
        </Box>
    </Container>
  )
}

export default SkillCard;

const Container = styled.div`

max-width: 1280px;
margin: 0 auto;
padding: 3rem 0;
display: flex;
flex-direction: column;
align-items: center;

@media (max-width: 840px) {
  width: 90%;
}

`

const ImageWrapper = styled.div`
  max-width: 100px; /* Largeur maximale de l'image */
  max-height: 100px; /* Hauteur maximale de l'image */
  img {
    width: 100%;
    height: auto;
    object-fit: cover; /* Pour conserver les proportions de l'image et la recadrer si nécessaire */
  }
`;

const Box = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  padding: 1rem; /* Espacement entre chaque boîte */
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;