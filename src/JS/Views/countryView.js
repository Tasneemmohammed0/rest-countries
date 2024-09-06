class CountryView {
  #parentElement = document.querySelector(".container-countries");

  // Rendering countries
  renderGrid(countries) {
    // Clear main page first
    this.#clear();

    // Render all countries
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
    const backBtnmarkup = this.#generateBackBtn();
    document
      .querySelector(".detailed-page")
      .insertAdjacentHTML("afterbegin", backBtnmarkup);
    document.querySelector(".country-details-container").innerHTML = "";
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
          .join(", ")}</p>
				<p><strong>Languages:</strong>${Object.values(country.languages)
          .map((language) => language)
          .join(", ")}</p>
          </div>
					<div class="border-countries">
						<strong>Border Countries:</strong> 
            <div class="border-countries-container">${this.#generateBorders(
              country.borders
            )}</div>
			</div>
		</div>`;
  }

  // Clear the home page
  #clear() {
    this.#parentElement.innerHTML = "";
  }

  #generateBorders(neighbours) {
    if (!neighbours) return "<p>NONE</p>";
    else
      return neighbours
        .map(
          (neighbour) =>
            `<button class="button --btn-border-country">
							<a href="#${neighbour}">${neighbour}</a>
						</button>`
        )
        .join(" ");
  }

  #generateBackBtn() {
    return `
       <button class="button --btn-back">
        <span class="fa-solid fa-arrow-left-long"></span>
        <span style="margin-left: 0.3rem">Back</span>
      </button>`;
  }

  addBackHandler(handler) {
    document.querySelector(".--btn-back").addEventListener("click", handler);
  }

  addThemeHandler() {
    document
      .querySelector(".--btn-displayMode")
      .addEventListener("click", (event) => {
        event.preventDefault();
        document.querySelector("body").classList.toggle("dark-mode");
      });
  }
}

export default new CountryView();
