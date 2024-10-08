class CountryView {
  #gridContainer = document.querySelector(".container-countries");
  #themeButton = document.querySelector(".--btn-displayMode");
  #bodyElement = document.querySelector("body");

  // Rendering countries
  renderGrid(countries) {
    // Show main page and hide detailed page
    document.querySelector(".main-page").classList.remove("hidden");
    document.querySelector(".detailed-page").classList.add("hidden");

    // Clear container first
    this.#clear();

    // Render  countries
    countries.forEach((country) => {
      const markup = this.#generateGridMarkup(country);
      document
        .querySelector(".container-countries")
        .insertAdjacentHTML("beforeend", markup);
    });
  }

  renderDetails(country) {
    const markup = this.#generatedetailesMarkup(country); // generate markup

    // document.querySelector(".main-page").innerHTML = ""; // empty page container

    // Hide main page and show details page
    document.querySelector(".main-page").classList.add("hidden");
    document.querySelector(".detailed-page").classList.remove("hidden");
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
    this.#gridContainer.innerHTML = "";
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
    document.querySelector(".--btn-back").addEventListener("click", () => {
      handler();
    });
  }

  addThemeHandler() {
    document;
    this.#themeButton.addEventListener("click", (event) => {
      event.preventDefault();

      this.#bodyElement.classList.toggle("dark-mode"); // Toggle body styles

      // Change Button content
      this.#themeButton.innerHTML = "";
      if (this.#bodyElement.classList.contains("dark-mode")) {
        this.#themeButton.insertAdjacentHTML(
          "beforeend",
          `<span class="fa-regular fa-sun" style="color: #FFD43B;"></span>
        		<span class="dark-mode-text">Light Mode</span>`
        );
      } else {
        this.#themeButton.insertAdjacentHTML(
          "beforeend",
          `<span class="fa-regular fa-moon"></span>
        		<span class="dark-mode-text">Dark Mode</span>`
        );
      }

      // Save the dark mode state to local storage
      const isDarkMode = document
        .querySelector("body")
        .classList.contains("dark-mode");
      localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
    });
  }
}

export default new CountryView();
