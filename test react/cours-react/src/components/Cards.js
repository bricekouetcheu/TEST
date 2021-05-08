import React from 'react';

const Cards = (props) => {
    const {country} = props;

    //console.log(country);
    return (
        <div>
            <li className="card">
                <img src= {country.flag} alt=""/>
                <div className ="data-container">
                    <ul>
                        <li>{country.name}</li>
                        <li>{country.capital}</li>
                        <li>population: {country.population}</li>
                    </ul>
                </div>

            </li>
        </div>
    );
};

export default Cards;