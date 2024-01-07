import React from 'react'
import styled from 'styled-components';
import { Slide } from "react-awesome-reveal";
import SkillCard from "./SkillCard"

let data = [
  {
      img : "skills/html.svg",
      name : "HTML"
  },
  {
      img : "skills/css.svg",
      name : "CSS"
  },
  {
      img : "skills/js.svg",
      name : "Javascript"
  },
  {
      img : "skills/react.svg",
      name : "React.js"
  },
  {
      img : "skills/nodejs.svg",
      name : "NodeJS"
  },
  {
    img : "skills/php.png",
    name : "PHP"
  },
  {
    img : "skills/mysql.svg",
    name : "MySQL"
  },
  {
    img : "skills/mongodb.svg",
    name : "Mongodb"
  },
  {
    img : "skills/java.svg",
    name : "Java"
  },
  {
    img : "skills/python.svg",
    name : "Python"
  },
  {
    img : "skills/c.svg",
    name : "C"
  },
  {
    img : "skills/c++.svg",
    name : "C++"
  },
  {
    img : "skills/linux.svg",
    name : "Linux"
  },
  {
    img : "skills/git.svg",
    name : "Git"
  },
  {
    img : "skills/github.svg",
    name : "Github"
  },
  {
    img : "skills/docker.svg",
    name : "Docker"
  },  {
    img : "skills/arduino.svg",
    name : "Arduino"
  }
];

const Skillset = () => {

  let skillset = "";
  skillset = data.map((item, i) => (
      <SkillCard item = {item} key={i}/>
  ))

    return (
        <Container id="skills">
            <Slide direction="down">
              <h1>
                My<span className="green"> skills</span>
              </h1>
            </Slide>
            <div className="skillset">
              {skillset}
            </div>
        </Container>
        
    )

}

export default Skillset;
const Container = styled.div`

max-width: 1280px;
margin: 0 auto;
padding: 3rem 0;
h1 {
  padding-top: 1rem;
  margin-left: 2rem;
}
@media (max-width: 840px) {
  width: 80%;
  h1 {
    padding-top: 1rem;
    margin-left: 0;

  }
}

.skillset{

  display: flex;
  flex-wrap: wrap; /* Permet aux éléments de passer à la ligne en cas de manque d'espace */
  justify-content: center; /* Centrer les éléments horizontalement */
  align-items: center;
}
`