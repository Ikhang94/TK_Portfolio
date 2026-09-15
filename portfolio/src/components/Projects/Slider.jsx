import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        title : "Augmented_Bot_Battle",
        img : "project/Augmented_Bot_Battle_menu.png",
        disc : "Jeu de combat qui permet de contrôler un robot et d'afronter à un autre joueur en réalité augmentée",
        link :"https://github.com/Ikhang94/Augmented-Bot-Battle"
    },
    {   
        title : "QCM Dynamique",
        img : "project/carton_plickers.png",
        disc : "Projet dans laquelle les participants répondent aux QCm à l'aide de carton ressemblent à des QR codes",
        link :"https://github.com/Ikhang94/Projet_QCM_Dynamique"
    },
    {   
        title : "Vivy Bot",
        img : "project/Bot_Vivy_img.png",
        disc : "Bot discord qui peut jouer de la musique et les interactions se font via une application web ",
        link :"https://github.com/Ikhang94/Vivy-Bot"
    },
    {   
        title : "A Venir",
        img : "project/WIP.jpg",
        disc : "Projet en cours de création",
        link :"#"
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 3rem;
    height: 3rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`