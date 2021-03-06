import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { Container, ContainerDiv } from '../styles/ContainerStyle'

const Data = () => {
    const [countriesList, setCountriesList] = useState([]);
    const [country, setCountry] = useState([]);

    const fetchCountriesList = async () => {
        try {
            const { data } = await axios.get('https://covid19.mathdro.id/api/countries');
            const countriesNames = [];
            data.countries.forEach(country => {
                countriesNames.push(country.name)
            });
            setCountriesList(countriesNames);
        } catch (error) {
            console.log(error)
        }
    }

    const fetchCountryData = async (country) => {
        try {
            const { data } = await axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${country}`);
            setCountry(data)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        fetchCountriesList();
        fetchCountryData('israel');
    }, [])

    return (
        <Container>
            <h2>Specific details in country: </h2>
            <Autocomplete
                id="combo-box-demo"
                options={countriesList}
                getOptionLabel={(option) => option}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="type country name" variant="outlined" />}
                onChange={(e, value) => value && fetchCountryData(value)}
            />
            <ContainerDiv>
                <div><h3>{country.country}-</h3></div>
                <div><h4>Number of cases:</h4> {country.cases}</div>
                <div><h4>Number of deaths:</h4> {country.deaths}</div>
                <div><h4>Number of recovered:</h4> {country.recovered}</div>
            </ContainerDiv>
        </Container>
    )
}

export default Data;