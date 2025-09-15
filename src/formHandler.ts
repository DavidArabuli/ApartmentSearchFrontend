import fetchSSitem from './fetchData.js';
import { displayItems } from './displayLatest';
import {listings_api_url} from "./config";

export function setupFormListener() {
    const form = document.querySelector<HTMLFormElement>("#filter-form")!;
    const districtInput = document.querySelector<HTMLInputElement>("#district-input");
    const roomsInput = document.querySelector<HTMLInputElement>("#rooms-input");
    const m2MinInput = document.querySelector<HTMLInputElement>("#m2_min-input");
    const m2MaxInput = document.querySelector<HTMLInputElement>("#m2_max-input");
    const priceMinInput = document.querySelector<HTMLInputElement>("#price_min-input");
    const priceMaxInput = document.querySelector<HTMLInputElement>("#price_max-input");
    const floorMinInput = document.querySelector<HTMLInputElement>("#floor_min-input");
    const floorMaxInput = document.querySelector<HTMLInputElement>("#floor_max-input");

    form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const queryArray :(string | number)[] = [];

    if (districtInput?.value) {

        queryArray.push(`district=${encodeURIComponent(districtInput.value)}`);
        }
        if (roomsInput?.value) {
        const roomsValue = parseInt(roomsInput.value, 10)
        if(Number.isInteger(roomsValue) && roomsValue >0 &&roomsInput?.value.length < 6){
        queryArray.push(`rooms=${encodeURIComponent(roomsInput.value)}`);
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
        if (priceMinInput?.value) {
        const priceMinValue = parseInt(priceMinInput.value, 10);
        if(Number.isInteger(priceMinValue) && priceMinValue >0 && priceMinInput?.value.length < 6){

        queryArray.push(`price_min=${encodeURIComponent(priceMinInput.value)}`);
        } else {
            alert('Input has to be a positive number and less than 9 character long');
            return;
        }
        }
        if (priceMaxInput?.value) {
        const priceMaxValue = parseInt(priceMaxInput.value, 10);
        if(Number.isInteger(priceMaxValue) && priceMaxValue >0 && priceMaxInput?.value.length < 6){

        queryArray.push(`price_max=${encodeURIComponent(priceMaxInput.value)}`);
        } else{
            alert('Input has to be a positive number and less than 9 character long');
            return;
        }
    }
        if (floorMinInput?.value) {
        const floorMinValue = parseInt(floorMinInput.value, 10);
        if(Number.isInteger(floorMinValue) && floorMinValue >0 && floorMinInput?.value.length < 6){

        queryArray.push(`floor_min=${encodeURIComponent(floorMinInput.value)}`);
        } else{
            alert('Input has to be a positive number and less than 9 character long');
            return;
        }
    }
        if (floorMaxInput?.value) {
        const floorMaxValue = parseInt(floorMaxInput.value, 10);
        if(Number.isInteger(floorMaxValue) && floorMaxValue >0 && floorMaxInput?.value.length < 6){

        queryArray.push(`floor_max=${encodeURIComponent(floorMaxInput.value)}`);
        }else{
            alert('Input has to be a positive number and less than 9 character long');
            return;
        }
    }
    
    
    const fullQueryUrl = `${listings_api_url}${queryArray.join("&")}`;
    console.log(fullQueryUrl);
    
    try {
        const filteredResults = await fetchSSitem(fullQueryUrl);
        console.log(filteredResults);

        console.log(fullQueryUrl);
        displayItems(filteredResults.data)

        const pageButtons = document.querySelector<HTMLDivElement>('#page-btns')!;

if (pageButtons) {
    pageButtons.innerHTML = '';
    console.log(pageButtons);

    let pageCount: number|string = filteredResults.pagination.total_pages;

    // Create all pagination links
    for (let i = 0; i < Number(pageCount); i++) {
        let element = document.createElement('a');
        element.href = `#`;
        element.textContent = `${i + 1}`;
        element.setAttribute('data-page', `${i + 1}`); 
        element.classList.add('page-btn')
        pageButtons.append(element);
    }


    pageButtons.addEventListener('click', async (event) => {
        const target = event.target as HTMLElement;

        
        if (target.tagName === 'A' && target.hasAttribute('data-page')) {
            const pageNumber = target.getAttribute('data-page');

            pageButtons.classList.add('disabled');
            const newLink = `${fullQueryUrl}&page=${pageNumber}`;
            try {
            const newItems = await fetchSSitem(newLink);
            console.log(newItems.data);
            displayItems(newItems.data);
        } catch (error) {
            console.error('Error fetching new items:', error);
        } finally {
            
            pageButtons.classList.remove('disabled');
        }
            // const newItems = await fetchSSitem(newLink);
            // console.log(newItems.data);
            // displayItems(newItems.data);
        }
    });
}

        

    } catch (error) {
    console.log('error fetching filtered results', error);
    
    }

});
}


