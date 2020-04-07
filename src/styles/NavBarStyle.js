import styled from "styled-components";

export const NavBarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black; 
  height: 12vh;
  padding: 0em 1em;
  color: white;
  font-size: 25px;
  @media (max-width: 560px) {
    flex-direction: column;
    height: 16vh;
  }
`;