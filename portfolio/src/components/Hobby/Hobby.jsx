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
                    resume={`Je joue régulièrement à des jeux de stratégies comme Civilisation 6, Europa Universalis 4 ou Total war Warhammer 3`}
                    desc={`Les jeux vidéo ont toujours été une source d'attrait particulière pour moi, notamment les jeux de stratégie, 
                    car ils offrent un mélange captivant d'intelligence, de réflexion et d'adrénaline. En effet, qu'il s'agisse de la 
                    gestion d'une civilisation, d'une ville ou d'une armée, ils nécessitent souvent une planification minutieuse, 
                    une analyse approfondie de la situation et une anticipation des actions à venir afin de faire prospérer sa civilisation, 
                    sa ville ou de mener son armée à la victoire. Cela implique la mise en place de différentes stratégies avec intelligence.`}
                    img={`hobby/img_games.png`}
                    />  
            </Slide>
            <Slide direction="up">
                <Card             
                    Icon={GiNinjaHeroicStance}
                    title={"Manga/Anime"}
                    resume={`J'adore le Japon notamment la façon de vivre de ses habitants mais surtout j'adore les Mangas/Animes`}
                    desc={"babla"}
                    img={`hobby/anime_hobby.png`}
                    />  
            </Slide>
            <Slide direction="right">
                <Card             
                    Icon={GiSpellBook }
                    title={"Heroic Fantasy"}
                    resume={`J'aime beacoup lire de l'heroic Fantasy afin de m'immerger dans un univers rempli d'épée et de magie comme l'univers de 
                    Tolkien`}
                    desc={"babla"}
                    img={`hobby/fantasy_hobby.png`}
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