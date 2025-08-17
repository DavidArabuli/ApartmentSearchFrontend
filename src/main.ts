// import './style.css'
import setDistrictOptions from './districtsOptions.ts';
import { displayItems } from './displayLatest.ts';
import { setupFormListener } from './formHandler.js';
import { listings_api_url } from './config.ts';
import fetchSSitem from './fetchData.js';

// const url = "http://localhost:8000/api/listings";

const latestItems = await fetchSSitem(listings_api_url);
console.log(latestItems);
setDistrictOptions()

displayItems(latestItems.data)

setupFormListener()
