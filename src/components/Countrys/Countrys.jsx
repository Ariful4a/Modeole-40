import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countrys.css'
const Countrys = () => {
    const [countrys, setCountrys] = useState([]);
    const [visitedCountrys, setVisitedCountrys] = useState([])


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountrys(data))
    }, [])


    const handleVisitedCountry = country =>{
        console.log('Add this to your visited country');
        const newVisitedCountrys = [...visitedCountrys,country];
        setVisitedCountrys(newVisitedCountrys);
    }

    return (
        <div>
            <h3>Countrys: {countrys.length} </h3>
            <div>
                <h5>Visited countrys : {visitedCountrys.length}</h5>
                <ul>
                        {
                            visitedCountrys.map(country => <li key={country.cca3}>{country.name.common}</li>)
                        }
                </ul>
            </div>
            <div className="country-container" >
                {
                    countrys.map(country =>
                        <Country key={country.cca3} handleVisitedCountry={handleVisitedCountry}
                            country={country}></Country>)
                }
            </div>
        </div>

    );
};

export default Countrys;