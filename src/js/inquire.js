import templateFirst from "../template/first.hbs";
import templateSecond from "../template-second/second.hbs";

//console.log(templateSecond);
import debounce from "lodash.debounce";

//console.log(debounce);

const refs = {
  cardContainer: document.querySelector(".js-card-container"),
  cardContainerList: document.querySelector(".js-card-container-list"),
  searchForm: document.querySelector(".search-form "),
  input: document.querySelector("input"),
};
//console.log(refs);

refs.searchForm.addEventListener("input", debounce(onSearch, 2000)); //todo Можно будет попробовать убрать Дебаунс

//todo: Function for input

function onSearch() {
  // e.preventDefault();
  //const input = currentTarget;

  const searchQuery = refs.input.value; //const searchQuery = input.value;
  console.log(searchQuery);

  fetchCountry(searchQuery)
    .then(renderMarkUp)
    .then(renderMarkUpList)
    .catch(fetchError);

  //.finally(() => input.reset());
}

//todo: Function for fetch

function fetchCountry(search) {
  const url = `https://restcountries.eu/rest/v2/name/${search}`;
  return fetch(url)
    .then((response) => response.json())
    .then((mass) => {
      const massive = mass.length;
      console.log(massive);
      if (massive > 10) {
        alert("Сделайте запрос более специфичным");
      } else if (massive >= 2 || massive >= 10) {
        console.log("Работает");
      }
      return mass;
    });
}

//return mass;
//todo: Function for render.

function renderMarkUp(country) {
  console.log(country);
  const markUpFirst = templateFirst(country);
  // const markUp = templateSecond(country);

  refs.cardContainer.innerHTML = markUpFirst;
  //console.log(markUpFirst);
  //refs.countryContainer.innerHTML = markUp; // const item = templateFirst(markUp);
  // //console.log(item);
  // const secondItem = templateSecond(markUp);
  // //console.log(secondItem);
  // refs.countryContainer.insertAdjacentHTML("afterbegin", item);
  // refs.countryContainer.insertAdjacentHTML("afterbegin", secondItem);
}

function renderMarkUpList(list) {
  console.log(list);
  const markUpSecond = templateSecond(list);

  refs.cardContainerList.innerHTML = markUpSecond;

  console.log(markUpSecond);
}
renderMarkUpList();

function fetchError(error) {
  alert("Неправильно введена страна, попробуйте снова");
}
