import CountryView from "./Views/countryView.js";
import searchView from "./Views/searchView.js";
import SearchView from "./Views/searchView.js";
import * as model from "./model.js";

// function to fetch and render countries data
const fetchCountries = async function () {
  try {
    // 1) Loading countries data
    await model.getAllCountries();

    console.log(model.countries);
    // 2) Rendering the data
    CountryView.renderGrid(model.countries);
  } catch (error) {
    console.error(error);
  }
};

const controlSearchResults = function () {
  try {
    // 1) get the query
    const query = searchView.getQuery();

    // 2) Loading the results
    const searchResults = model.loadSearchResults(query);

    // 3) Rendering the data
    CountryView.renderGrid(searchResults);
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
