import React from "react";
import styled from 'styled-components'
import { NavBarStyle } from "../styles/NavBarStyle";

const Navbar = () =>
    <NavBarStyle>
        Corona Site
        <LogoStyle>
            <img alt='' src={require("../styles/covid.png")} width="200px" height="68px" />
        </LogoStyle>
    </NavBarStyle>

export default Navbar;


const LogoStyle = styled.div`
    position: absolute;
    top: 60px;
    transform: translateY(-50%);
    margin-left: 70px;
`;