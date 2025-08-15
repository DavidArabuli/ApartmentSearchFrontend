import {type FetchedItem} from './fetchData'

// displays latest entries
export function displayItems(latestItems: FetchedItem[]) {
  const newItems = latestItems
    .map((item: FetchedItem) => {
      console.log(item );

      return `<div class="item-card">
            <div class="img-text-center">
                <p class="itemData" id="title">${item.title}</p>
                
                <p class="itemData" id="district"><span class="data-title">district:</span> ${item.district}</p>
                <p class="itemData" id="street"><span class="data-title">street:</span> ${item.street}</p>
                <p class="itemData" id="m2"><span class="data-title">m2:</span> ${item.m2}</p>
                <p class="itemData" id="rooms"><span class="data-title">rooms:</span> ${item.rooms}</p>
                <p class="itemData" id="floor"><span class="data-title">floor:</span> ${item.floor}</p>
                <p class="itemData" id="series"><span class="data-title">series:</span> ${item.series}</p>
                <p class="itemData" id="price"><span class="data-title">price:</span> ${item.price} euro</p>
                <p class="itemData" id="m2price"><span class="data-title">m2 price:</span> ${(item.price/item.m2).toFixed(2)} euro</p>
                <p class="itemData" id="createdAt"><span class="data-title">published:</span> ${item.created_at} </p>
                <p class="itemData" id="createdAt"><span class="data-title">Link:</span> <a href=${item.link}>see original ad</a> </p>
                <div class="img-div">

                    <img id="itemImg" src="https://www.apartments.com/blog/sites/default/files/styles/x_large_hq/public/image/2023-06/ParkLine-apartment-in-Miami-FL.jpg?itok=kQmw64UU" alt="">
                </div>
                
            </div>
        </div></p>`;
    }).join('');
 const section = document.querySelector<HTMLElement>('.main-section')!;
 section.innerHTML = newItems;
  
}
// displayLatest(latestItems)