export let state = {
  countries: [], // Store all countries data
  currentFilter: "", // Default filter value
  darkMode: false, // Default dark mode state
};
export const getAllCountries = async function () {
  try {
    // fetching data from REST Countires API
    const response = await fetch("https://restcountries.com/v3.1/all");

    // Handling fetch error
    if (!response.ok) throw new Error("🚨 Problem getting countries data");

    state.countries = await response.json();
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
  const searchResults = state.countries.filter((country) =>
    country.name.common.toLowerCase().startsWith(query.toLowerCase())
  );
  return searchResults;
};

// Load filter results based on selected region
export const loadFilterResults = function (selected) {
  state.currentFilter = selected;
  const filterResults = state.countries.filter((country) => {
    return country.region === selected;
  });
  return filterResults;
};
