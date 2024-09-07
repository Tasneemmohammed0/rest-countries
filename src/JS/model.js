export let state = {
  countries: [], // Store all countries data
  darkMode: false, // Default dark mode state
  filteredCountries: [],
};
export const getAllCountries = async function () {
  try {
    // fetching data from REST Countires API
    const response = await fetch("https://restcountries.com/v3.1/all");

    // Handling fetch error
    if (!response.ok) throw new Error("🚨 Problem getting countries data");

    state.countries = await response.json();
    console.log(state.countries);
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

// Load Search results based on query
export const loadSearchResults = function (query) {
  const searchFrom = state.filteredCountries.length
    ? state.filteredCountries
    : state.countries;
  return searchFrom.filter((country) =>
    country.name.common.toLowerCase().startsWith(query.toLowerCase())
  );
};

// Load filter results based on selected region
export const loadFilterResults = function (selected) {
  state.filteredCountries = state.countries.filter((country) => {
    return country.region === selected;
  });

  return state.filteredCountries.length
    ? state.filteredCountries
    : state.countries;
};
