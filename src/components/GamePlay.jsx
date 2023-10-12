import styled from "styled-components";
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RoleDice from "./RoleDice";
import { useState } from "react";
const GamePlay = () => {

  const [SelectNumber, SetSelectNumber] = useState();
  const [CurrentDice, SetCurerntDice]= useState(1);
  
  
  const GenerateRandomeNumber= (min, max) => {
    return Math.floor(Math.random()* (max-min) + min) ;
    };

    const roleDice = () => {
        const RandomeNumber= GenerateRandomeNumber(1,7);
        SetCurerntDice((prev) => RandomeNumber);
    }
  
  return (
    <MainContainer>
    <div className="top">
      <TotalScore/>

      <NumberSelector SelectNumber={SelectNumber}
      SetSelectNumber={SetSelectNumber} />
    </div>
    < RoleDice CurrentDice={CurrentDice}
    roleDice={roleDice}
    />
    </MainContainer>
  );
};

export default GamePlay;


const MainContainer = styled.div  `
.top{
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
  /* align-items: end; */
}
`