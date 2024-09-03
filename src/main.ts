import './style.css'

import { displayItems } from './displayLatest.ts';
import { formQueryBuilder } from './form.js';
import fetchSSitem from './fetchData.js';
const url = "http://localhost/dashboard/ssParser/api/api.php?";

const form  = document.querySelector<HTMLFormElement>("#filter-form")!;

formQueryBuilder(form)

// const section = document.querySelector<HTMLElement>("#main-section")!;

const latestItems = await fetchSSitem(url);
console.log(latestItems);

// function displayLatest(latestItems: fetchedItem[]) {
//   const newItems = latestItems
//     .map((item: fetchedItem) => {
//       console.log(item );

//       return `<p>${item.title}</p>`;
//     })
//     .join("");
//   section.innerHTML = newItems;
//   console.log(newItems);
  
// }
displayItems(latestItems)

