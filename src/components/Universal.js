import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '../styles/ContainerStyle'

const Universal = () => {
    const [allStats, setAllStates] = useState([]);

    const fetchAllData = async () => {
        try {
            const { data } = await axios.get(`https://coronavirus-19-api.herokuapp.com/all`);
            setAllStates(data)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        fetchAllData();
    }, [])

    return (
        <>
            <Container>
                <h1>Universal statics about Corona virus:</h1>
                <div><h3>Number of cases:</h3> {allStats.cases}</div>
                <div><h3>Number of deaths:</h3> {allStats.deaths}</div>
                <div><h3>Number of recovered:</h3> {allStats.recovered}</div>
            </Container>
        </>
    )
}

export default Universal;