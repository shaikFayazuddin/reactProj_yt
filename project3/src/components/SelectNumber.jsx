import styled from "styled-components"

const SelectNumber = () => {

  const selectNumber = [1,2,3,4,5,6]
  return (
    <div>
      {selectNumber.map((value,i)=>(
        <Box key={i}>{value}</Box>
      ))}
    </div>
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
`
export default SelectNumber
