import styled from "styled-components"
import { useState } from "react"

const SelectNumber = () => {

  const selectNumber = [1,2,3,4,5,6]
  // eslint-disable-next-line no-undef
  const [selectedNumber, setSelectedNumber] = useState()

  return (
    <SelectNumberContainer>
      <div className="number-box">
      {selectNumber.map((value,i)=>(
        <Box 
        key={i} 
        onClick={()=>setSelectedNumber(value)}
        isSelected={value == selectedNumber}>{value}</Box>
      ))}
    </div>
    <p>Select Number</p>
    </SelectNumberContainer>
  )
}

const Box = styled.div`
  height: 72px;
  width:72px;
  border: 1px solid black;
  font-size:24px;
  font-weight: 700;
  display: grid;
  place-content: center;
  background-color : ${(props)=> (props.isSelected ? "black" : "white")};
  color : ${(props)=> (!props.isSelected ? "black" : "white")}
`

const SelectNumberContainer = styled.div`
  .number-box{
    display: flex;
    gap: 24px;
  }
  p{
    font-size: 24px;
    font-weight: 700px;
  }
  
`
export default SelectNumber
