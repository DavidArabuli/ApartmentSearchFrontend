import fetchDistricts from "./fetchDistricts";

async function setDistrictOptions( ) {
    const urlDistricts = "http://localhost:8000/api/districts";
    
    const options= await fetchDistricts(urlDistricts);
    
    const selectorOptions = document.querySelector<HTMLSelectElement>("#pagasts-input")!;
    
    const newOptions = Object.values(options)
  .map(value => `<option label="${value}" value="${value}"></option>`)
  .join('');
    
    
        selectorOptions.innerHTML = newOptions;
    
}

export default setDistrictOptions