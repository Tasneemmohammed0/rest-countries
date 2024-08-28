"use strict";
// HTML elements
const countriesContainer = document.querySelector(".container-countries");

let countries = []; // Store all countries data

// function to fetch and render countries data
const fetchCountries = async function () {
  try {
    // fetching data from REST Countires API
    const response = await fetch("https://restcountries.com/v3.1/all");

    // Handling fetch error
    if (!response.ok) throw new Error("🚨 Problem getting countries data");

    countries = await response.json();

    // Render all countries
    countries.forEach((country) => {
      const markup = generateMarkup(country);
      countriesContainer.insertAdjacentHTML("beforeend", markup);
    });
  } catch (err) {
    console.error(err);
  }
};

// function to return country grid markup
const generateMarkup = function(country) {
  return = `
  <div class="country-grid">
      <img
        class="country-img"
        src="${country.flags.png}"
        alt="${country.name.common}-flag"
      />
      <h3 class="country-name">${country.name.common}</h3>
      <div class="country-info">
        <p><strong>Population:</strong>${country.population}</p>
        <p><strong>Region:</strong>${country.region}</p>
        <p><strong>Capital:</strong>${
          country.capital ? country.capital[0] : "N/A"
        }</p>
      </div>
    </div>`;

}

// Calling the function to fetch and render countries
fetchCountries();
