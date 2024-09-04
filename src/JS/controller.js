import CountryView from "./Views/countryView.js";
import searchView from "./Views/searchView.js";
import SearchView from "./Views/searchView.js";
import * as model from "./model.js";

let countries = []; // Store all countries data

// function to fetch and render countries data
const fetchCountries = async function () {
  try {
    // 1) Loading countries data
    countries = await model.getAllCountries();

    // 2) Rendering the data
    CountryView.renderGrid(countries);
  } catch (error) {
    console.error(error);
  }
};

const controlSearchResults = async function () {
  try {
    // 1) Get query
    const query = searchView.getQuery();
    console.log(query);

    // 2) Load Results
  } catch (error) {
    console.error(error);
  }
};

const eventHandlers = function () {
  searchView.addSearchHandler(controlSearchResults);
};
eventHandlers();

// Show all countries when in the home page
if (!window.location.hash) fetchCountries();
