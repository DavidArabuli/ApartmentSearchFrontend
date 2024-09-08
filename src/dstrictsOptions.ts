import fetchDistricts from "./fetchDistricts";

async function setDistrictOptions( ) {
    const urlDistricts = "http://localhost/dashboard/ssParser/api/api-districts.php";
    
    const options= await fetchDistricts(urlDistricts);
    
    const selectorOptions = document.querySelector<HTMLSelectElement>("#pagasts-input")!;
    
    const newOptions = Object.values(options)
  .map(value => `<option value="${value}">${value}</option>`)
  .join('');
    
    
        selectorOptions.innerHTML = newOptions;
    
}

export default setDistrictOptions