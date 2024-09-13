import Chart from 'chart.js/auto';
import { mostSalesDistrict, lowestAveragePriceDistrict } from './analytics';

export function createChartMostSales() {
    const chartContainerMostSales = document.getElementById('chartContainerMostSales');
    
    if (!chartContainerMostSales) {
        console.error('Chart container not found.');
        return;
    }
    
    const xValues = mostSalesDistrict?.map((position) => position.pagasts);
    const yValues = mostSalesDistrict?.map((position) => position.offer_count);
    const barColors = ["red", "green", "blue", "pink", "brown", "orange", "purple", "aqua", "lime"];

    
    const ctx = document.createElement('canvas');
    ctx.id = 'myChart';
    ctx.style.width = '100%';
    ctx.style.maxWidth = '800px';

   
    chartContainerMostSales.appendChild(ctx);

    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues,
            }]
        },
        options: {
            responsive: true,  
            maintainAspectRatio: false, 
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Most sales per district'
                }
            },
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    });
}
export function createChartLowestAvg() {
    const chartContainerLowestAvg = document.getElementById('chartContainerLowestAvg');
    
    if (!chartContainerLowestAvg) {
        console.error('Chart container not found.');
        return;
    }
    
    const xValues = lowestAveragePriceDistrict?.map((position) => position.pagasts);
    const yValues = lowestAveragePriceDistrict?.map((position) => Math.round(position.average_price*100)/100);
    const barColors = ["red", "green", "blue", "pink", "brown", "orange", "purple", "aqua", "lime"];

  
    const ctx = document.createElement('canvas');
    ctx.id = 'myChart';
    ctx.style.width = '100%';
    ctx.style.maxWidth = '800px';

   
    chartContainerLowestAvg.appendChild(ctx);

    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues,
            }]
        },
        options: {
            responsive: true,  
            maintainAspectRatio: false, 
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Lowest average price per district'
                }
            },
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    });
}

createChartMostSales();
createChartLowestAvg()