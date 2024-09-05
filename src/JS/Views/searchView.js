class SearchView {
  #parentElement = document.querySelector(".search-filter");

  getQuery() {
    const query = this.#parentElement.querySelector(".search-input").value;
    return query;
  }

  addSearchHandler(handler) {
    this.#parentElement.addEventListener("input", (e) => {
      e.preventDefault();
      handler();
    });
  }

  isEmpty() {
    const inputValue = this.#parentElement
      .querySelector(".search-input")
      .value.trim();

    if (inputValue === "") {
      return true;
    } else {
      return false;
    }
  }
}

export default new SearchView();
