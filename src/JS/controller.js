import countryView from "./Views/countryView.js";
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

    // render all countries
    controlFilterResults();
    controlSearchResults();
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

  // 4) Check data filter
  if (searchView.isEmpty()) {
    controlFilterResults();
  }
};

const controlFilterResults = function () {
  // 1) get filter result
  const selected = filterView.getSelectedItem();

  // 3) Load the filter results
  const filterResults = model.loadFilterResults(selected);
  console.log(filterResults);
  // 5) Render the filter results
  CountryView.renderGrid(filterResults);
};

// Render details
const controlDetail = async function (hash) {
  try {
    // 1) Loading countries data
    const country = await model.getCountry(hash);
    // 2) Rendering the data
    CountryView.renderDetails(country);

    controlStoredTheme();

    // 3) control back btn
    countryView.addBackHandler(goHome);
  } catch (error) {
    console.error(error);
  }
};

const controlStoredTheme = function () {
  const darkMode = localStorage.getItem("darkMode");
  console.log(darkMode);

  if (darkMode == "enabled") {
    document.querySelector("body").classList.add("dark-mode");
  } else {
    document.querySelector("body").classList.remove("dark-mode");
  }
};

function goHome() {
  document.location.hash = ""; // Go back to the home page
  // controlStoredFilter();
}

const eventHandlers = function () {
  searchView.addSearchHandler(controlSearchResults);
  filterView.addFilterHandler(controlFilterResults);
  countryView.addThemeHandler();
  controlStoredTheme();
};
eventHandlers();

// Render all when the page loads
(() => {
  controlGrid();
})();

["hashchange", "load"].forEach((event) => {
  window.addEventListener(event, () => {
    if (!window.location.hash.slice(1)) controlGrid();
    // Show all countries when in the home page
    else controlDetail(window.location.hash.slice(1));
  });
});
