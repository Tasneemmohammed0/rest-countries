class CountryView {
  #parentElement;

  // Rendering countries
  renderGrid(countries) {
    countries.forEach((country) => {
      const markup = this.#generateGridMarkup(country);
      document
        .querySelector(".container-countries")
        .insertAdjacentHTML("beforeend", markup);
    });
  }

  renderDetails(country) {
    const markup = this.#generatedetailesMarkup(country); // generate markup
    document.querySelector(".main-page").innerHTML = ""; // empty page container
    document
      .querySelector(".country-details-container")
      .insertAdjacentHTML("beforeend", markup);
  }

  // Generating markups
  #generateGridMarkup(country) {
    return `
		<div class="country-grid">
		  <a href='#${country.cca3}'>
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
    console.log(country);
    return `
		<img
			class="country-img"
			src="${country.flags.png}"
			alt="${country.name.common}-flag"
		/>
		<div class="country-breif">
			<h2 class="country-name">${
        Object.values(country.name.nativeName)[0].common
      }</h2>
			<div class="country-info">
				<p><strong>Native Name:</strong>${
          Object.values(country.name.nativeName)[0].common
        }</p>
				<p><strong>Population:</strong>${country.population}</p>
				<p><strong>Region:</strong>${country.region}</p>
				<p><strong>Sub Region:</strong>${country.subregion || "N/A"}</p>
				<p><strong>Capital:</strong>${country.capital ? country.capital[0] : "N/A"}</p>
				<p><strong>Tob Level Domain:</strong>${country.tld}</p>
				<p><strong>Currencies:</strong>${Object.values(country.currencies)
          .map((currency) => currency.name)
          .join(",")}</p>
				<p><strong>Languages:</strong>${Object.values(country.languages)
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
}

export default new CountryView();
