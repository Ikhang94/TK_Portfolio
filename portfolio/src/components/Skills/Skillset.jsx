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
  }
];

const Skillset = () => {

  let skillset = "";
  skillset = data.map((item, i) => (
      <SkillCard item = {item} key={i}/>
  ))

    return (
        <Container>
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
@media (max-width: 840px) {
  width: 90%;
}

h1 {
  padding-top: 1rem;
}

.skillset{

  display: flex;
  flex-direction: row;
  align-items: center;
}
`