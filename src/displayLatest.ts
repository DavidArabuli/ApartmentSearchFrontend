import {type fetchedItem} from './fetchData'
export function displayItems(latestItems: fetchedItem[]) {
  const newItems = latestItems
    .map((item: fetchedItem) => {
      console.log(item );

      return `<div class="item-card">
            <div class="img-text-center">
                <p class="itemData" id="title">${item.title}</p>
                <img id="itemImg" src="" alt="">
                <p class="itemData" id="pagasts">${item.pagasts}</p>
                <p class="itemData" id="iela">${item.iela}</p>
                <p class="itemData" id="m2">${item.m2}</p>
                <p class="itemData" id="istabas">${item.istabas}</p>
                <p class="itemData" id="stavs">${item.stavs}</p>
                <p class="itemData" id="serija">${item.serija}</p>
                <p class="itemData" id="cena">${item.cena} euro</p>
                <p class="itemData" id="m2cena">m2 cena ${(item.cena/item.m2).toFixed(2)} euro</p>
                <p class="itemData" id="createdAt">publicets: ${item.created_at} </p>
            </div>
        </div></p>`;
    }).join('');
 const section = document.querySelector<HTMLElement>('.main-section')!;
 section.innerHTML = newItems;
  
}
// displayLatest(latestItems)