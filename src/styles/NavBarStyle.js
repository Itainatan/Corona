import styled from "styled-components";

export const NavBarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black; 
  height: 12vh;
  padding: 5px;
  color: white;
  font-size: 25px;
  @media (max-width: 560px) {
    flex-direction: unset;
    height: 18vh;
    width: 450px;
  }
`;