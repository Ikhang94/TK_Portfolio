import React from 'react'
import styled from 'styled-components';

const Project = (props) => {
  const {title,img,disc, link} = props.item;
  return (
    <Container className='project'>
      
        <img src={img} alt="project" />
        <div className='disc'>
        
            <h1>{title}</h1>

              <p>
                {disc}
              </p>
              <a href={link} className="project-link">plus de détail</a>
        </div>
        
    </Container>
  )
}

export default Project;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #4e5156;
  margin: 0 0.5rem;
  padding: 0 0.5rem;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  img {
    margin-left: 1.2rem;
    width: 90%;
    height: 90%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
    
  }
  .project-link{
    text-decoration: none !important;
    outline: none;
    color: #fff;
    &:hover {
      color: red; /* Changez la couleur ou ajoutez d'autres styles pour l'effet hover */
    }
  }
  .disc {
    
    position: absolute;
    right: 0;
    left: 0;
    bottom: -10rem;
    text-align: left;
    padding: 1.5rem;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
    transition: all 400ms ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h1 {
      font-size: 1rem;

    }
    p {
      width: 90%;
      font-size: 0.8rem;

    }
  }
  
  /* styles for smaller screens (mobile) */
  @media (max-width: 768px) {
    height: auto; /* Adjust height as needed for mobile layout */
    img {
      margin-left: 0.5rem;
      
    }
    .disc {
      bottom: 0;
    }
  }

  &:hover > img {
    transform: scale(1.3);
  }

  &:hover > .disc {
    bottom: 0;
  }
`;