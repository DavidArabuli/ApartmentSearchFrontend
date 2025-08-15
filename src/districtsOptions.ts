import fetchDistricts from "./fetchDistricts";
// sets all possible districts to be selectable as options for user
async function setDistrictOptions( ) {
    const urlDistricts = "http://localhost:8000/api/districts";
    
    const options= await fetchDistricts(urlDistricts);
    
    const selectorOptions = document.querySelector<HTMLSelectElement>("#district-input")!;
    
    const newOptions = Object.values(options)
  .map(value => `<option label="${value}" value="${value}"></option>`)
  .join('');
    
    
        selectorOptions.innerHTML = newOptions;
    
}

export default setDistrictOptions