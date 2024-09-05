import './style.css'

import { displayItems } from './displayLatest.ts';
import { formQueryBuilder } from './form.js';
import fetchSSitem from './fetchData.js';
const url = "http://localhost/dashboard/ssParser/api/api.php?";

const form  = document.querySelector<HTMLFormElement>("#filter-form")!;

formQueryBuilder(form).then((fullQueryUrl)=>{
    console.log('Form submitted, query URL', fullQueryUrl);
    fetchSSitem(fullQueryUrl).then((latestItems)=>{
        console.log(latestItems)
        displayItems(latestItems);
        
    })
})


const latestItems = await fetchSSitem(url);
console.log(latestItems);


displayItems(latestItems)


