import CountryView from "./countryView.js";
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

// Show all countries when in the home page
if (!window.location.hash) fetchCountries();
