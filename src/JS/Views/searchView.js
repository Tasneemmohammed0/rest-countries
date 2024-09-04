class SearchView {
  #parentElement = document.querySelector(".search-filter");

  getQuery() {
    const query = this.#parentElement.querySelector(".search-input").value;
    return query;
  }

  addSearchHandler(handler) {
    this.#parentElement.addEventListener("input", handler);
  }
}

export default new SearchView();
