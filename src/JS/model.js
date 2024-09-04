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

export const loadSearchResults = function (query) {
  const searchResults = countries.filter((country) => {
    return country.name.common.toLowerCase().startsWith(query.toLowerCase());
  });
  return searchResults;
};
