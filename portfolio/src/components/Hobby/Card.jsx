import React, { useState } from 'react'
import styled from 'styled-components';
import Modal from "react-modal";
const Card = (props) => {

    const { Icon, disc, title } = props;
    const [modalOpen, setModalOpen] = useState(false);

  return (
    <Container>
      <span className='green'><Icon/></span>
      <h1>{title}</h1>
      <p>{disc}</p>

          <button onClick={setModalOpen}>See more</button>
          <Modal
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
            style={{
              overlay: {
                  backgroundColor: 'rgba(0, 0, 0, 5)', // Mettre l'overlay transparent au départ
                  opacity: modalOpen ? 1 : 0, // Changer l'opacité de l'overlay en fonction de modalOpen
                  transition: 'opacity 0.3s ease-in-out', // Ajouter une transition pour l'overlay
                  zIndex: 9999 // S'assurer que l'overlay apparaît au-dessus des autres éléments
              },
              content: {
                  width: '70%',
                  margin: '0 auto',
                  background: 'linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%)',
                  border: 'none',
                  borderRadius: '8px',
                  opacity: modalOpen ? 1 : 0, // Changer l'opacité du modal en fonction de modalOpen
                  transition: 'opacity 0.3s ease-in-out', // Ajouter une transition pour le contenu du modal
              },
          }}
          >
            <ModalContent>
              <div className="img-container">
                <img src="source_de_votre_image" alt="Image" />
              </div>
              <div className="text-container">
                <h2>{title}</h2>
                <p>
                  Ajoutez ici le contenu supplémentaire que vous souhaitez afficher. Ceci est un exemple de texte. Vous pouvez remplacer cela par votre propre contenu.
                </p>
                <button onClick={() => setModalOpen(false)}>Close Modal</button>
              </div>
            </ModalContent>
          </Modal>
    </Container>
  )

}

export default Card;
const Container = styled.div`
    width: 100%;
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%; /* Remplacez par une valeur spécifique si nécessaire */

    span{
        font-size: 4rem;
    }
    
    h1{
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }

    p{
        font-size: 0.8rem;
        flex-grow: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 1rem;
    }

    button {
      width: 5rem;
      height: 1.8rem;
      background-color: #01be96;
      border: none;
      border-radius: 5px;
      filter: drop-shadow(0px 4px 5px #01be9551);
      cursor: pointer;
      :hover {
        filter: drop-shadow(0px 6px 9px #01be9551);
      }
    }
`
const ModalContent = styled.div`
  margin: 0 auto; /* centre horizontalement */
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  padding: 1rem;

  .img-container {
    flex: 1;
    margin-right: 1rem;
  }

  .text-container {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h2{
      font-size: 1.2rem;
      padding-bottom: 1rem;
      margin-bottom: 0.5rem;
  }

  p{
      font-size: 0.8rem;
      line-height: 1.4;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  button {
    align-self: center; /* Aligne le conteneur de bouton en bas à droite */
    margin-top: auto; /* Utilise l'espace disponible pour pousser le conteneur vers le bas */
    width: 5rem;
    height: 1.8rem;
    background-color: #01be96;
    border: none;
    border-radius: 5px;
    filter: drop-shadow(0px 4px 5px #01be9551);
    cursor: pointer;
    position: absolute;
    bottom: 1rem;
    :hover {
      filter: drop-shadow(0px 6px 9px #01be9551);
    }
  }
`;

