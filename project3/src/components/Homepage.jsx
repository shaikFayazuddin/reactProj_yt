import styled from "styled-components"


// eslint-disable-next-line react/prop-types
const Homepage = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="../../public/images/dices 1.jpg" alt="dice_image" />
      </div>

      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default Homepage

const Container = styled.div`
    display : flex;
    align-items: center;
    margin: 0 auto;
    height: 100vh;
    width: 1180px;

    .content h1{
        font-size: 96px;
        white-space: nowrap;
    }
`

const Button = styled.button`
      color: white;
      background: black;
      max-width: 220px;
      padding: 10px 18px;
      border-radius: 5px;
      font-size: 16px;
      border: none;
      cursor: pointer;
      border: 1px solid transparent;
      transition: 0.4s background ease-in;

      &:hover{
        color: black;
        background: white;
        cursor: pointer;
        border: 1px solid black;
        transition: 0.3s background ease-in;
      }
`