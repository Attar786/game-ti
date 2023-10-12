import { useState } from "react";
import styled from "styled-components" 



const NumberSelector = () =>{
const array = [1,2,3,4,5,6];
const [SelectNumber, SetSelectNumber] = useState();
console.log(SelectNumber);
return (
    <NumberContainer>
<div className="flex">
    {
    array.map((value,i)=>(
    <Box
    isSelected = {value === SelectNumber}
    key={i} onClick={ ()=>  SetSelectNumber(value)}>
        {value}
    </Box>
    ))
    }
    <p>Select Any Number</p>
</div>
</NumberContainer>
);
};
export default NumberSelector;

const NumberContainer= styled.div`
.flex{
display: flex;
gap: 13px;
}
p{
    margin-top: 45px;
    align-items: end;
}
`

const Box= styled.div`
height: 45px;
width: 70px; 
border: 1px solid black;
display: grid;
place-items: center;
font-weight: 24px;
font-weight: 700px;
background-color: ${(props) => (props.isSelected ? "black" : "white")};
color: ${(props) => (!props.isSelected ? "black" : "white")};

`;