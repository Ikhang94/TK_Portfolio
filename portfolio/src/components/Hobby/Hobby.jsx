import React from 'react'
import styled from 'styled-components';
import Card from "./Card";
import { MdGames } from "react-icons/md";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { GiSpellBook } from "react-icons/gi";
import { Slide } from "react-awesome-reveal";

const Hobby = () => {

    return (
        <Container>
            <Slide direction="down">
                <h1>
                My<span className="green"> hobbies</span>
                </h1>
            </Slide>
            <Cards>
            <Slide direction="left">
                <Card             
                    Icon={MdGames}
                    title={"Games"}
                    disc={`I play regularly Strategics Games like Civilisation 6, Europa Universalis 4 and Totwal War Warhammer`}
                    />  
            </Slide>
            <Slide direction="up">
                <Card             
                    Icon={GiNinjaHeroicStance}
                    title={"Manga/Anime"}
                    disc={`I love japan and paticularly Mangas and Animes`}
                    />  
            </Slide>
            <Slide direction="right">
                <Card             
                    Icon={GiSpellBook }
                    title={"Heroic Fantasy"}
                    disc={`I like to read some Heroic Fantasy like Warhammer and middle Earth`}
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
    width: 90%;
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
`;