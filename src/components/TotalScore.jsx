import styled from "styled-components"

const TotalScore = () => {
  return (
    <ScoreContainer>
        <h1>0</h1>
        Total Score
    </ScoreContainer>
  )
}

export default TotalScore;

const ScoreContainer = styled.div `
*{
    margin: 0;
    padding: 0;
}
h1{
    font-size: 100px;
    line-height: 100px;
    max-width: 250px;

}
p{
    font-size: 24 px;
    font-weight: 500px;
}
`

