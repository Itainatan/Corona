import React from "react";
import Navbar from "./NavBar";
import Data from "./Data";
import Universal from "./Universal"
import { ContainerStyle } from '../styles/ContainerStyle'

const Main = () => {

    return (
        <>
            <Navbar />
            <ContainerStyle>
                <Universal />
                <Data />
            </ContainerStyle>
        </>
    )
};

export default Main;