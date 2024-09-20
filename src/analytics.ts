import { fetchAnalyticsAPI } from './fetchAnalyticsAPI';
// import './style.css'

const analyticsSection = document.querySelector<HTMLElement>('#analytics-section')!;
const analyticsDiv = document.querySelector<HTMLDivElement>('.analytics-info')!;
const url = 'http://localhost/dashboard/ssParser/api/api-analytics.php';

// Fetch data from the API
const data = await fetchAnalyticsAPI(url);
console.log(data);

// Create and append "average m2" section

const averageM2Value = data?.averageM2?.['averageM2'] ?? 'Not available';
const averageM2Div = document.createElement('div');
averageM2Div.classList.add("info-block");
averageM2Div.innerHTML = `
    <p class="analytics-item-title">average m2</p>
    <p class="analytics-item-info">${averageM2Value}</p>
`;
analyticsDiv.appendChild(averageM2Div);  

// Create and append "average price" section

const averagePriceValue = data?.averagePrice?.['averagePrice'] ?? 'Not available';
const averagePriceDiv = document.createElement('div');
averagePriceDiv.classList.add("info-block");
averagePriceDiv.innerHTML = `
    <p class="analytics-item-title">average price</p>
    <p class="analytics-item-info">${averagePriceValue}</p>
`;
analyticsDiv.appendChild(averagePriceDiv);  

// Create and append "highest price" section

const highestPriceValue = data?.highestPrice?.['highestPrice'] ?? 'Not available';
const highestPriceDiv = document.createElement('div');
highestPriceDiv.classList.add("info-block");
highestPriceDiv.innerHTML = `
    <p class="analytics-item-title">highest price</p>
    <p class="analytics-item-info">${highestPriceValue}</p>
`;
analyticsDiv.appendChild(highestPriceDiv);

// Create and append "lowest price" section
const lowestPriceValue = data?.lowestPrice?.['lowestPrice'] ?? 'Not available';
const lowestPriceDiv = document.createElement('div');
lowestPriceDiv.classList.add("info-block");
lowestPriceDiv.innerHTML = `
    <p class="analytics-item-title">lowest price</p>
    <p class="analytics-item-info">${lowestPriceValue}</p>
`;
analyticsDiv.appendChild(lowestPriceDiv);  

// Create and append "average m2 price" section
const averageM2PriceValue = data?.averageM2Price?.['averageM2Price'] ?? 'Not available';
const averageM2PriceDiv = document.createElement('div');
averageM2PriceDiv.classList.add("info-block");
averageM2PriceDiv.innerHTML = `
    <p class="analytics-item-title">average m2 price</p>
    <p class="analytics-item-info">${averageM2PriceValue}</p>
`;
analyticsDiv.appendChild(averageM2PriceDiv);

export const mostSalesDistrict = data?.mostSalesDistrict;
export const lowestAveragePriceDistrict = data?.lowestAveragePriceDistrict;
export const averageM2PriceByDistrict = data?.averageM2PriceByDistrict;
console.log(lowestAveragePriceDistrict);


