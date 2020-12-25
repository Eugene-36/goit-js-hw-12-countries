//! Вариант Репеты , через функции

const refs = {
  countryContainer: document.querySelector(".control"),

  searchInput: document.querySelector(".country"),
};

refs.searchInput.addEventListener("input", debounce(onSearch, 2000));

//todo: Function for input

function onSearch() {
  const searchQuery = input.value;

  console.log(searchQuery);
  fetchCountry(search)
    .then(renderMarkUp)
    .catch((err) => console.log(err));
}

//todo: Function for fetch

function fetchCountry(search) {
  return fetch(`https://restcountries.eu/rest/v2/name/${search}`).then(
    (response) => {
      return response.json();
    },
  );
}

//todo: Function for render.

function renderMarkUp(country) {
  const markUpFirst = templateFirst(country);
  const markUp = templateSecond(country);

  refs.countryContainer.innerHTML = markUpFirst;
  refs.countryContainer.innerHTML = markUp; // const item = templateFirst(markUp);
  // //console.log(item);

  // const secondItem = templateSecond(markUp);
  // //console.log(secondItem);

  // refs.countryContainer.insertAdjacentHTML("afterbegin", item);

  // refs.countryContainer.insertAdjacentHTML("afterbegin", secondItem);
}
