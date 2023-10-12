import { useState } from "react"
import styled from "styled-components"

const RoleDice = (
{
    roleDice, CurrentDice}
) => {
    
  return (
    <DiceContainer>
    <div className="dice" onClick={roleDice}>
<img src={`/public/image/dice_${CurrentDice}.png`}/>
    </div>
    <p>Select dice</p>
    </DiceContainer>
  )
}
export default RoleDice
const DiceContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;


p{
    font-size: 30px;
    
}

.doce{
    cursor: pointer;
}
`