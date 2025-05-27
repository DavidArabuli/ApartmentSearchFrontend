import {type FetchedItem} from './fetchData'

export function displayItems(latestItems: FetchedItem[]) {
  const newItems = latestItems
    .map((item: FetchedItem) => {
      console.log(item );

      return `<div class="item-card">
            <div class="img-text-center">
                <p class="itemData" id="title">${item.title}</p>
                
                <p class="itemData" id="pagasts"><span class="data-title">Pagasts:</span> ${item.district}</p>
                <p class="itemData" id="iela"><span class="data-title">Iela:</span> ${item.street}</p>
                <p class="itemData" id="m2"><span class="data-title">m2:</span> ${item.m2}</p>
                <p class="itemData" id="istabas"><span class="data-title">Istabas:</span> ${item.rooms}</p>
                <p class="itemData" id="stavs"><span class="data-title">Stavs:</span> ${item.floor}</p>
                <p class="itemData" id="serija"><span class="data-title">Serija:</span> ${item.series}</p>
                <p class="itemData" id="cena"><span class="data-title">Cena:</span> ${item.price} euro</p>
                <p class="itemData" id="m2cena"><span class="data-title">m2 cena:</span> ${(item.price/item.m2).toFixed(2)} euro</p>
                <p class="itemData" id="createdAt"><span class="data-title">Publicēts:</span> ${item.created_at} </p>
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