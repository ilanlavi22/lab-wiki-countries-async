import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const apiGithubCountries = "https://ih-countries-api.herokuapp.com/countries";

const CountriesList = (props) => {
  const getCountries = async () => {
    const response = await fetch(apiGithubCountries);
    const countries = await response.json();
    props.setCountries(countries);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      {props.countries.map((country) => {
        let countryFlag = `https://flagpedia.net/data/flags/h120/${country.alpha2Code.toLowerCase()}.png`;
        const { _id, name } = country;
        return (
          <div key={_id} className="country">
            <Link to={`/countries/${_id}`}>
              <img src={countryFlag} alt={name.common} />
              <p>{name.common}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default CountriesList;
