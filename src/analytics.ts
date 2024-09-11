
import {fetchAnalyticsAPI} from './fetchAnalytics'
const analyticsSection = document.querySelector<HTMLElement>('#analytics-section')!
const analyticsDiv = document.querySelector<HTMLDivElement>('.analytics-info')!
const url = 'http://localhost/dashboard/ssParser/api/api-analytics.php'


const data = await fetchAnalyticsAPI(url)
console.log(data);
const averageM2Div = document.createElement('div');
analyticsDiv.appendChild(averageM2Div);
const avgM2Value = data?.averageM2['averageM2'];
analyticsDiv.innerHTML = `
    <p class="analytics-item-title">${avgM2Value}</p>
    <p class="analytics-item-info">${data?.averageM2.averageM2}</p>`