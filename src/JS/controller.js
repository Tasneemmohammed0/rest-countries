import CountryView from "./Views/countryView.js";
import filterView from "./Views/filterView.js";
import searchView from "./Views/searchView.js";
import SearchView from "./Views/searchView.js";
import * as model from "./model.js";

// Render all
const controlGrid = async function () {
  try {
    // 1) Loading countries data
    await model.getAllCountries();
    // 2) Rendering the data
    CountryView.renderGrid(model.countries);
  } catch (error) {
    console.error(error);
  }
};

const controlSearchResults = function () {
  // 1) get the query
  const query = searchView.getQuery();

  // 2) Loading the results
  const searchResults = model.loadSearchResults(query);

  // 3) Rendering the data
  CountryView.renderGrid(searchResults);
};

const controlFilterResults = function () {
  // 1) get filter result
  const selected = filterView.getSelectedItem();
  // 2) Loading the results
  const filterResults = model.loadFilterResults(selected);
  // 3) Rendering the data
  CountryView.renderGrid(
    filterResults.length ? filterResults : model.countries
  );
};

const eventHandlers = function () {
  searchView.addSearchHandler(controlSearchResults);
  filterView.addFilterHandler(controlFilterResults);
};
eventHandlers();

// Render details
const controrlDetail = async function (hash) {
  try {
    // 1) Loading countries data
    const country = await model.getCountry(hash);
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
