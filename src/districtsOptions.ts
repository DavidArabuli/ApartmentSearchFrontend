import fetchDistricts from "./fetchDistricts";
import {districts_api_url} from "./config";
// sets all possible districts to be selectable as options for user
async function setDistrictOptions( ) {
    
    const options= await fetchDistricts(districts_api_url);
    
    const selectorOptions = document.querySelector<HTMLSelectElement>("#district-input")!;
    
    const newOptions = Object.values(options)
  .map(value => `<option label="${value}" value="${value}"></option>`)
  .join('');
    
    
        selectorOptions.innerHTML = newOptions;
    
}

export default setDistrictOptions