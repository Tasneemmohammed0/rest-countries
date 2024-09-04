class FilterView {
  #parentElement = document.querySelector(".select-filter");

  getSelectedItem() {
    const query = this.#parentElement.value;
    return query;
  }

  addFilterHandler(handler) {
    this.#parentElement.addEventListener("change", (e) => {
      e.preventDefault();
      handler();
    });
  }
}

export default new FilterView();
