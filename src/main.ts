// import './style.css'
import setDistrictOptions from './districtsOptions';
import { displayItems } from './displayLatest';
import { setupFormListener } from './formHandler.js';
import { listings_api_url } from './config';
import fetchSSitem from './fetchData.js';


const latestItems = await fetchSSitem(listings_api_url);
setDistrictOptions()

displayItems(latestItems.data)

setupFormListener()
