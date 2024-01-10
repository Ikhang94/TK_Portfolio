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
                    desc={`Le Japon, pays fascinant à bien des égards, exerce sur moi une attraction profonde et durable. Parmi ses nombreux 
                    aspects, la richesse de sa culture populaire, notamment à travers ses mangas et ses animes, m'a particulièrement captivé. 
                    En effet, ils offrent des récits souvent captivants et très diversifiés, qu'il s'agisse de fantasy, de science-fiction, 
                    de romance ou de comédie, offrant ainsi une expérience riche et variée. De plus, contrairement à ce que certains pourraient 
                    penser, les animes et les mangas peuvent également transmettre des valeurs fortes telles que l'importance des relations 
                    humaines et la persévérance, voire nous amener à réfléchir sur des problèmes de société. 
                    Nous pouvons également souligner le talent des mangakas qui offrent aux lecteurs des planches de dessin sublimes, 
                    et celui des studios d'animation qui créent des animations de grande qualité. Dans les deux cas, le spectateur ne peut 
                    qu'apprécier la magnificence des mangas et des animes à travers ces réalisations visuelles remarquables et uniques.`}
                    img={`hobby/anime_hobby.png`}
                    />  
            </Slide>
            <Slide direction="right">
                <Card             
                    Icon={GiSpellBook }
                    title={"Heroic Fantasy"}
                    resume={`J'aime beacoup lire de l'heroic Fantasy afin de m'immerger dans un univers rempli d'épée et de magie comme l'univers de 
                    Tolkien`}
                    desc={`L'héroic fantasy est un genre littéraire et artistique qui m'attire et me captive pour plusieurs raisons profondes.
                    Tout d'abord, l'héroic fantasy offre un monde imaginaire riche en aventures épiques, empreint de magie, 
                    de créatures fantastiques et de héros légendaires. Ce mélange de merveilleux et de mythologie crée un univers captivant, 
                    où l'imagination n'a pas de limites. La présence de mondes fantastiques, de royaumes féeriques et de pouvoirs surnaturels 
                    éveille en moi un sentiment d'émerveillement et d'évasion, offrant une échappatoire hors du quotidien 
                    vers des contrées extraordinaires. De plus, l'un des aspects les plus attrayants de l'héroic fantasy est la 
                    construction méticuleuse des mondes imaginaires. Les auteurs de ce genre créent des univers détaillés, des systèmes 
                    de magie élaborés et des sociétés fantastiques avec leurs propres histoires, cultures et langages. Cette immersion 
                    dans des univers complexes et détaillés constitue une source infinie de fascination, permettant une exploration sans fin 
                    des mystères et des possibilités offertes par ces mondes fictifs.`}
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