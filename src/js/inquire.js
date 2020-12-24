import templateFirst from "../template/first.hbs";
import templateSecond from "../template/second.hbs";

import debounce from "lodash.debounce";

//console.log(debounce);

//todo: Доступ к инпуту
const input = document.querySelector(".control");
//console.log(input);

//todo: Доступ к ul
const access = document.querySelector(".country");
//console.log(access);

let search = `Switzerland`;
let url = `https://restcountries.eu/rest/v2/name/${search}`;

input.addEventListener("input", debounce(onSearch, 2000));

function onSearch(e) {
  e.preventDefault();

  const searchQuery = e.currentTarget.value;
  console.log(searchQuery);
}

function debounce(callback, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(callback, delay);
  };
}

let myFirstFetch = fetch(url);
//console.log(myFirstFetch);

myFirstFetch
  .then((response) => {
    //console.log(response);

    return response.json();
  })
  .then((result) => {
    //console.log(result);

    const array = result.capital;
    //console.log(array);

    const item = templateFirst(result);
    //console.log(item);

    const secondItem = templateSecond(result);
    //console.log(secondItem);

    access.insertAdjacentHTML("afterbegin", item);

    access.insertAdjacentHTML("afterbegin", secondItem);
    //array.map((el) => console.log(el));
  });
