// import './style.css'
import setDistrictOptions from './dstrictsOptions.ts';
import { displayItems } from './displayLatest.ts';
import { setupFormListener } from './formHandler.js';
import fetchSSitem from './fetchData.js';

const url = "http://localhost/dashboard/ssParser/api/api.php?";
// const urlDistricts = "http://localhost/dashboard/ssParser/api/api-districts.php";



const latestItems = await fetchSSitem(url);
console.log(latestItems);
setDistrictOptions()

displayItems(latestItems.data)

setupFormListener()
