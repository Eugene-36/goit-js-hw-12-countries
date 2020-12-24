import templateFirst from "../template/first.hbs";
import templateSecond from "../template/second.hbs";

const access = document.querySelector(".country");
console.log(access);

let search = `Switzerland`;
let url = `https://restcountries.eu/rest/v2/name/${search}`;

// const myRequest = new XMLHttpRequest();
// console.log(myRequest);
let myFirstFetch = fetch(url);
console.log(myFirstFetch);

myFirstFetch
  .then((response) => {
    console.log(response);

    return response.json();
  })
  .then((result) => {
    console.log(result);

    const array = result.capital;
    console.log(array);

    const item = templateFirst(result);
    console.log(item);

    const secondItem = templateSecond(result);
    console.log(secondItem);

    access.insertAdjacentHTML("afterbegin", item);

    access.insertAdjacentHTML("afterbegin", secondItem);
    //array.map((el) => console.log(el));
  });
