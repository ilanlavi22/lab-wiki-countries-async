import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const apiGithubCountries = "https://ih-countries-api.herokuapp.com/countries";

const Country = (props) => {
  const getCountries = async () => {
    const response = await fetch(apiGithubCountries);
    const countries = await response.json();
    props.setCountries(countries);
  };

  useEffect(() => {
    getCountries();
  }, []);

  const { countryId } = useParams();

  const country = props.countries.find(
    (country) => country._id.toString() === countryId
  );
  const { _id, name } = country;

  return (
    <div>
      <h2>{country.name.common}</h2>
      <img
        src={`https://flagpedia.net/data/flags/h120/${country.alpha2Code.toLowerCase()}.png`}
        alt={country.name.common}
      />
    </div>
  );
};
export default Country;
