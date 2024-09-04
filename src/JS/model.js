export let countries = []; // Store all countries data

export const getAllCountries = async function () {
  try {
    // fetching data from REST Countires API
    const response = await fetch("https://restcountries.com/v3.1/all");

    // Handling fetch error
    if (!response.ok) throw new Error("🚨 Problem getting countries data");

    countries = await response.json();
  } catch (error) {
    console.error(error.message);
  }
};


export const getCountry = async function (hash) {
  if (!hash) return;
  try {
    // fetching data from REST Countires API
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${hash}`
    );

    // Handling fetch error
    if (!response.ok) throw new Error("🚨 Problem getting country details");

    const country = await response.json();
    return country[0];
  } catch (error) {
    console.error(error.message);
  }
};

export const loadSearchResults = function (query) {
  const searchResults = countries.filter((country) => {
    return country.name.common.toLowerCase().startsWith(query.toLowerCase());
  });
  return searchResults;
};
