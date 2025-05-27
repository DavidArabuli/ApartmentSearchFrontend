export const seriesOptions:string[] = ['','103.','104.','119.','467.','602.','Čehu pr.', 'Hrušč.', 'LT proj.', 'M. Ģim.', 'P. kara' , 'Priv. m.','Renov.','Specpr.','Staļina','Jaun.']

export function setSeriesOptions( ) {

    

    
    const selectorOptions = document.querySelector<HTMLSelectElement>("#serija-input")!;
    
    const newOptions = Object.values(seriesOptions)
  .map(value => `<option label="${value}" value="${value}"></option>`)
  .join('');
    
    
        selectorOptions.innerHTML = newOptions;
    
}

export default setSeriesOptions