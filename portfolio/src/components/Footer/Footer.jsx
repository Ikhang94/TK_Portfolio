import React, { useState } from 'react';
import styled from 'styled-components';
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdAlternateEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook, BsSlack } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import {Zoom, Slide, Fade} from 'react-awesome-reveal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Footer = () => {
    const scrollUp = () => {
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      };

      const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('https://formspree.io/f/mayrwpla', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              _to: 'cao.thien.khang.pro@gmail.com',
              ...formData
            })
          });
    
          if (response.ok) {
            // Réinitialiser les champs du formulaire après l'envoi réussi
            setFormData({
              fullname: '',
              email: '',
              message: ''
            });
            toast.success('Le formulaire a été soumis avec succès!', {
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose: 3000 // Durée d'affichage de l'alerte en millisecondes (facultatif)
            });
          }
        } catch (error) {
          console.error('Erreur lors de la soumission du formulaire:', error);
          toast.error('Une erreur s\'est produite. Veuillez réessayer.', {
            position: toast.POSITION.BOTTOM_RIGHT
          });
        }
      };
    return (
        <Container id="footer">
            <Profile>
                <Slide direction='left' delay={1}><h1>Contact</h1></Slide>
                <div className='address'>
                   <Slide direction='left'><h1>Address</h1></Slide>
                   <Slide direction='left'><p>48 rue Garibaldi, Saint-maur des fossés, 94100</p></Slide>
                </div>
                <div className='links'>
                <Slide direction='left'><h1>Contact me directly</h1></Slide>
                    <div>
                    <Slide direction='left'><span><FiPhoneCall/></span></Slide>
                        <Slide direction='left'><a href="tel:+3352233508">+33 52 23 35 08</a></Slide>
                    </div>
                    <div>
                        <span><HiOutlineMailOpen/></span>
                        <Slide direction='left'><a href="mailto:cao.thien.khang.pro@gmail.com">cao.thien.khang.pro@gmail.com</a></Slide>
                    </div>
                </div>
                <div className='profile'>
                <Slide direction='left'><h1>Check my profile</h1></Slide>
                    <div className='icons'>
                    <Zoom><span><a href='#'><AiFillGithub/></a></span></Zoom>
                    <Zoom><span><a href='#'><AiFillLinkedin/></a></span></Zoom>

                    </div>
                </div>
                <Fade><ArrowUp onClick={scrollUp}><AiOutlineArrowUp/></ArrowUp></Fade>
            </Profile>
            <Form>
        <Slide direction="right">
          <form onSubmit={handleSubmit}>
            {/* ... Vos champs existants ... */}
            {/* Exemple de champs pour le nom, l'email et le message */}
            <div className="name">
              <span><CgProfile /></span>
              <input type="text" name="fullname" placeholder="Fullname..." value={formData.fullname} onChange={handleChange} required />
            </div>
            <div className="email">
              <span><MdAlternateEmail /></span>
              <input type="email" name="email" placeholder="Email..." value={formData.email} onChange={handleChange} required />
            </div>
            <div className="message">
              <span className="messageIcon"><FiMail /></span>
              <textarea name="message" cols="30" rows="10" placeholder="Message..." value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </Slide>
      </Form>
      <StyledToastContainer />
        </Container>
        
    )

}

export default Footer;
const Container = styled.div`
    margin-top: 2rem;
    position: relative;
    padding: 2rem 0;
    width: 80%;
    maw-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    @media (max-width: 840px) {
        width: 90%;
      }
    
      @media (max-width: 650px) {
        flex-direction: column;
        gap: 3rem;
      }
`

const Profile = styled.div`
    flex: 1;
    .address{
        padding: 1rem 0;
        h1{
            font-size: 1.2rem;
        }

        p{
            width: 60%;
            padding-top: 0.5rem;
            
              @media (max-width: 650px) {
                width: 100%;
              }
        }

    }

    .links{
        h1{
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
        }

        div{

            display: flex;
            align-item: center;
            gap: 0.5rem;
            a{
                text-decoration: none;
                color: lightgray;
                &:hover{
                    color: orange;
                }
            }
        }
    }  

    .profile{
        h1{
            font-size: 1.2rem;
            padding: 1rem 0;
        }
        .icons{
            display : flex;
            align-items: center;

            span{
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #000;
                color: #fff;
                width: 2rem;
                height: 2rem;
                margin-right: 0.5rem;
                border-radius: 50px;

                &:hover{
                    background-color: orange;
                }

                a{
                    color: #fff;
                    margin-top: 0.2rem
                }
            }
        }
    } 
`

const ArrowUp = styled.div`
width: 2rem;
height: 2rem;
background-color: #01be96;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
font-size: 1.3rem;
font-weight: 700;
margin-top: 2rem;


  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`


const Form = styled.div`
flex: 1;
  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form {
    background-color: #191923;
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
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
  }
`

const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    /* Votre style CSS pour les alertes */
    background-color: #333;
    color: #fff;
    border-radius: 4px;
    font-size: 14px;
  }

  .Toastify__toast--success {
    /* Votre style CSS pour les alertes de succès */
    background-color: #01be96;
  }

  .Toastify__toast--error {
    /* Votre style CSS pour les alertes d'erreur */
    background-color: #e74c3c;
  }
`;
