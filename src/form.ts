import fetchSSitem from "./fetchData.js";
const url = "http://localhost/dashboard/ssParser/api/api.php?";


// const form  = document.querySelector<HTMLFormElement>("#filter-form");
const pagastsInput = document.querySelector<HTMLInputElement>("#pagasts-input");
const istabasInput = document.querySelector<HTMLInputElement>("#istabas-input");
const m2MinInput = document.querySelector<HTMLInputElement>("#m2_min-input");
const m2MaxInput = document.querySelector<HTMLInputElement>("#m2_max-input");
const cenaMinInput = document.querySelector<HTMLInputElement>("#cena_min-input");
const cenaMaxInput = document.querySelector<HTMLInputElement>("#cena_max-input");
const stavsMinInput = document.querySelector<HTMLInputElement>("#stavs_min-input");
const stavsMaxInput = document.querySelector<HTMLInputElement>("#stavs_max-input");
// const filterBtn = document.querySelector<HTMLButtonElement>("#filter-btn");


export function formQueryBuilder(form:HTMLFormElement){
  form?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const queryArray :(string | number)[] = [];

  if (pagastsInput?.value) {
      queryArray.push(`pagasts=${encodeURIComponent(pagastsInput.value)}`);
    }
    if (istabasInput?.value) {
      queryArray.push(`istabas=${encodeURIComponent(istabasInput.value)}`);
    }
    if (m2MinInput?.value) {
      queryArray.push(`m2_min=${encodeURIComponent(m2MinInput.value)}`);
    }
    if (m2MaxInput?.value) {
      queryArray.push(`m2_max=${encodeURIComponent(m2MaxInput.value)}`);
    }
    if (cenaMinInput?.value) {
      queryArray.push(`cena_min=${encodeURIComponent(cenaMinInput.value)}`);
    }
    if (cenaMaxInput?.value) {
      queryArray.push(`cena_max=${encodeURIComponent(cenaMaxInput.value)}`);
    }
    if (stavsMinInput?.value) {
      queryArray.push(`stavs_min=${encodeURIComponent(stavsMinInput.value)}`);
    }
    if (stavsMaxInput?.value) {
      queryArray.push(`stavs_max=${encodeURIComponent(stavsMaxInput.value)}`);
    }
  
  
  const fullQueryUrl = `${url}${queryArray.join("&")}`;
   
const filteredResults = await fetchSSitem(fullQueryUrl);
console.log(filteredResults);
  // return fullQueryUrl;
});

}
// const filteredResults = await fetchSSitem(fullQueryUrl);
//   console.log(filteredResults);