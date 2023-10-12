import styled from "styled-components";
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"

const GamePlay = () => {
  return (
    <MainContainer>
    <div className="top">
      <TotalScore/>
      <NumberSelector/>
    </div>
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