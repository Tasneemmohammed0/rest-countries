export const getAllCountries = async function () {
  try {
    // fetching data from REST Countires API
    const response = await fetch("https://restcountries.com/v3.1/all");

    // Handling fetch error
    if (!response.ok) throw new Error("🚨 Problem getting countries data");

    const countries = await response.json();
    return countries;
  } catch (error) {
    console.error(error.message);
  }
};
