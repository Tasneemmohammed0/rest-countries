import CountryView from "./countryView.js";
import * as model from "./model.js";

let countries = []; // Store all countries data

// Render all
const controlGrid = async function () {
  try {
    // 1) Loading countries data
    countries = await model.getAllCountries();

    // 2) Rendering the data
    CountryView.renderGrid(countries);
  } catch (error) {
    console.error(error);
  }
};

// Render details
const controrlDetail = async function (hash) {
  try {
    // 1) Loading countries data
    const country = await model.getCountry(hash);
    console.log(country);
    // 2) Rendering the data
    CountryView.renderDetails(country);
  } catch (error) {
    console.error(error);
  }
};

// Render all when the page loads
(() => {
  controlGrid();
})();

window.addEventListener("hashchange", () => {
  if (!window.location.hash) controlGrid();
  // Show all countries when in the home page
  else controrlDetail(window.location.hash.slice(1));
});
