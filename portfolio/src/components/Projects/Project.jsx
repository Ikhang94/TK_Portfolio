import React from 'react'
import styled from 'styled-components';

const Project = (props) => {
  const {title,img,disc} = props.item;
  return (
    <Container className='project'>
      <div className="img_carousel">
        <img src={img} alt="project" />
      </div>
        <div className='disc'>
            <h1>{title}</h1>
            <p>{disc}
                <a href='#'>Demo</a>
            </p>

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
  cursor: pointer;
  position: relative;
  overflow: hidden;
  .slick-slide img {
    
  }
  img {
    width: 90%;
    height: 90%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
    
  }
  .img_carousel{
    display: initial;
  }
  .disc {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -10rem;
    text-align: left;
    padding: 0.5rem;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
    transition: all 400ms ease-in-out;
    h1 {
      font-size: 1rem;
    }
    p {
      width: 90%;
      font-size: 0.8rem;
      margin-bottom: 1rem;  
      a {
        margin-left: 0.4rem;
        color: red;
      }
    }
  }
  
  /* styles for smaller screens (mobile) */
  @media (max-width: 768px) {
    height: auto; /* Adjust height as needed for mobile layout */
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