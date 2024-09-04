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
}

export default new SearchView();
