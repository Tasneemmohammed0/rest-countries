class CountryView {
  #parentElement = document.querySelector(".container-countries");

  // Rendering countries
  renderGrid(countries) {
    // Clear main page first
    this.#clear();

    // Render all countries
    countries.forEach((country) => {
      const markup = this.#generateGridMarkup(country);
      this.#parentElement.insertAdjacentHTML("beforeend", markup);
    });
  }

  // Generating markups
  #generateGridMarkup(country) {
    return `
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
					<p><strong>Capital:</strong>${country.capital ? country.capital[0] : "N/A"}</p>
				</div>
			</div>`;
  }

  #generatedetailesMarkup(country) {
    return `
		<img
			class="country-img"
			src="${country.flags.png}"
			alt="${country.name.common}-flag"
		/>
		<div class="country-breif">
			<h2 class="country-name">${Object.values(data.nativeName)[0].common}</h2>
			<div class="country-info">
				<p><strong>Native Name:</strong>${country.name.native}</p>
				<p><strong>Population:</strong>${country.population}</p>
				<p><strong>Region:</strong>${country.region}</p>
				<p><strong>Sub Region:</strong>${country.subregion || "N/A"}</p>
				<p><strong>Capital:</strong>${country.capital ? country.capital[0] : "N/A"}</p>
				<p><strong>Tob Level Domain:</strong>${country.tld}</p>
				<p><strong>Currencies:</strong>${Object.values(data.currencies)
          .map((currency) => currency.name)
          .join(",")}</p>
				<p><strong>Languages:</strong>${Object.values(data.languages)
          .map((language) => language)
          .join(",")}</p>
			</div>
			<div class="border-countries">
				<strong>Border Countries:</strong> 
				<button class="button --btn-border-country">Belgium</button>
				<button class="button --btn-border-country">France</button>
			</div>
		</div>`;
  }

  // Clear the home page
  #clear() {
    this.#parentElement.innerHTML = "";
  }
}

export default new CountryView();
