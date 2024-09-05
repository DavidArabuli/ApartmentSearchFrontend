import fetchSSitem from "./fetchData.js";
const url = "http://localhost/dashboard/ssParser/api/api.php?";



const pagastsInput = document.querySelector<HTMLInputElement>("#pagasts-input");
const istabasInput = document.querySelector<HTMLInputElement>("#istabas-input");
const m2MinInput = document.querySelector<HTMLInputElement>("#m2_min-input");
const m2MaxInput = document.querySelector<HTMLInputElement>("#m2_max-input");
const cenaMinInput = document.querySelector<HTMLInputElement>("#cena_min-input");
const cenaMaxInput = document.querySelector<HTMLInputElement>("#cena_max-input");
const stavsMinInput = document.querySelector<HTMLInputElement>("#stavs_min-input");
const stavsMaxInput = document.querySelector<HTMLInputElement>("#stavs_max-input");
 


export function formQueryBuilder(form:HTMLFormElement): Promise<string> {
  return new Promise((resolve, reject)=>{




    form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const queryArray :(string | number)[] = [];
  
    if (pagastsInput?.value) {
      
        queryArray.push(`pagasts=${encodeURIComponent(pagastsInput.value)}`);
      }
      if (istabasInput?.value) {
        const istabasValue = parseInt(istabasInput.value, 10)
        if(Number.isInteger(istabasValue) && istabasValue >0 &&istabasInput?.value.length < 6){
        queryArray.push(`istabas=${encodeURIComponent(istabasInput.value)}`);
        } else {
          alert('Input has to be a positive number and less than 9 character long');
          return;
        }
      }
      if (m2MinInput?.value) {
        const m2MinValue = parseInt(m2MinInput.value, 10);
        if(Number.isInteger(m2MinValue) && m2MinValue >0 &&m2MinInput?.value.length < 6){

          queryArray.push(`m2_min=${encodeURIComponent(m2MinInput.value)}`);
        } else {
          alert('Input has to be a positive number and less than 9 character long');
          return;
        }
      }
      if (m2MaxInput?.value) {
        const m2MaxValue = parseInt(m2MaxInput.value, 10);
        if(Number.isInteger(m2MaxValue) && m2MaxValue >0 && m2MaxInput?.value.length < 6){
        queryArray.push(`m2_max=${encodeURIComponent(m2MaxInput.value)}`);
      }else {
          alert('Input has to be a positive number and less than 9 character long');
          return;
        }
      }
      if (cenaMinInput?.value) {
        const cenaMinValue = parseInt(cenaMinInput.value, 10);
        if(Number.isInteger(cenaMinValue) && cenaMinValue >0 && cenaMinInput?.value.length < 6){

          queryArray.push(`cena_min=${encodeURIComponent(cenaMinInput.value)}`);
        } else {
          alert('Input has to be a positive number and less than 9 character long');
          return;
        }
      }
      if (cenaMaxInput?.value) {
        const cenaMaxValue = parseInt(cenaMaxInput.value, 10);
        if(Number.isInteger(cenaMaxValue) && cenaMaxValue >0 && cenaMaxInput?.value.length < 6){

          queryArray.push(`cena_max=${encodeURIComponent(cenaMaxInput.value)}`);
        } else{
          alert('Input has to be a positive number and less than 9 character long');
          return;
        }
      }
      if (stavsMinInput?.value) {
        const stavsMinValue = parseInt(stavsMinInput.value, 10);
        if(Number.isInteger(stavsMinValue) && stavsMinValue >0 && stavsMinInput?.value.length < 6){

          queryArray.push(`stavs_min=${encodeURIComponent(stavsMinInput.value)}`);
        } else{
          alert('Input has to be a positive number and less than 9 character long');
          return;
        }
      }
      if (stavsMaxInput?.value) {
        const stavsMaxValue = parseInt(stavsMaxInput.value, 10);
        if(Number.isInteger(stavsMaxValue) && stavsMaxValue >0 && stavsMaxInput?.value.length < 6){

          queryArray.push(`stavs_max=${encodeURIComponent(stavsMaxInput.value)}`);
        }else{
          alert('Input has to be a positive number and less than 9 character long');
          return;
        }
      }
    
    
    const fullQueryUrl = `${url}${queryArray.join("&")}`;

    try {
      const filteredResults = await fetchSSitem(fullQueryUrl);
      console.log(filteredResults);
       resolve(fullQueryUrl)
      console.log(fullQueryUrl);
      
    } catch (error) {
      console.log('error fetching filtered results', error);
      reject(error)
    }
     
   
   
  });
  })
 

}
 