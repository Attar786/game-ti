 /* eslint-disable no-unused-vars */
import React from 'react'
import styled from "styled-components";
const StartGame = ({toggle}) => {
  return (
    <Container>
        <div> 
           <img src='/image/dices.png' />

           </div>     
        
        <div className='content'>
            <h1 >
                Dice Game
            </h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  );
};
export default StartGame;
const Container = styled.div `
max-width: 1180px;
display: flex;
height: 100vh;
margin: 0 auto;
align-items: center;

.content
{
    h1{
    font-size: 96px;
    white-space: nowrap;
} 

}   
`;

const Button = styled.button`
color: white;
padding: 8px 12px;
background: black;
border-radius: 5px;
border: none;
min-width: 220px;
font-size: 20px;
  transition: 0.4s background ease-in;
  cursor: pointer;


&:hover{
  background-color:white;
  color: black;
  border: 1px solid black;
  transition: 0.3s background ease-in;
}
`

