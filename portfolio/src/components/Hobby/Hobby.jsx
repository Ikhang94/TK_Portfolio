import React from 'react'
import styled from 'styled-components';
import Card from "./Card";
import { MdGames } from "react-icons/md";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { GiSpellBook } from "react-icons/gi";
import { Slide } from "react-awesome-reveal";

const Hobby = () => {

    return (
        <Container id="hobby">
            <Slide direction="down">
                <h1>
                  Mes<span className="green"> hobbys</span>
                </h1>
            </Slide>
            <Cards>
            <Slide direction="left">
                <Card             
                    Icon={MdGames}
                    title={"Jeux vidéos"}
                    disc={`Je joue régulièrement à des jeux de stratégies comme Civilisation 6, Europa Universalis 4 ou Total war Warhammer 3`}
                    />  
            </Slide>
            <Slide direction="up">
                <Card             
                    Icon={GiNinjaHeroicStance}
                    title={"Manga/Anime"}
                    disc={`J'adore le Japon notamment la façon de vivre de ses habitants mais surtout pour les Mangas/Animes`}
                    />  
            </Slide>
            <Slide direction="right">
                <Card             
                    Icon={GiSpellBook }
                    title={"Heroic Fantasy"}
                    disc={`J'aime beacoup lire de l'heroic Fantasy afin de m'immerger dans un univers rempli d'épée et de magie comme l'univers de 
                    Tolkien`}
                    />  
            </Slide>
            </Cards>
        </Container>
        
    )

}

export default Hobby;
const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 70%;
  }

  h1 {
    padding-top: 1rem;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
  max-height: unset;
  overflow: visible;

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* Pour les écrans très petits, affiche un élément par ligne */
  }
`;