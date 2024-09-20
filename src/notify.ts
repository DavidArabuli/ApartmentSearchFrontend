
import setDistrictOptions from './dstrictsOptions.ts';

// import fetchSSitem from './fetchData.js';
// import { displayItems } from './displayLatest.ts';

const url = "http://localhost/dashboard/ssParser/api/api-notify.php?";

export function setupFormListener() {
    const form = document.querySelector<HTMLFormElement>("#notify-form")!;
    const pagastsInput = document.querySelector<HTMLInputElement>("#pagasts-input");
    const istabasInput = document.querySelector<HTMLInputElement>("#istabas-input");
    const m2MinInput = document.querySelector<HTMLInputElement>("#m2_min-input");
    const m2MaxInput = document.querySelector<HTMLInputElement>("#m2_max-input");
    const cenaMinInput = document.querySelector<HTMLInputElement>("#cena_min-input");
    const cenaMaxInput = document.querySelector<HTMLInputElement>("#cena_max-input");
    const stavsMinInput = document.querySelector<HTMLInputElement>("#stavs_min-input");
    const stavsMaxInput = document.querySelector<HTMLInputElement>("#stavs_max-input");
    const email = document.querySelector<HTMLInputElement>("#email");
    const email_confirmation = document.querySelector<HTMLInputElement>("#email_confirmation");
 console.log("Email input field: ", email);
 console.log("Max input field: ", m2MaxInput);

    form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData();

    if(!email?.value){
        console.log('email was not provided');
        
        alert('Email is mandatory!');
        return;
    } else{

        if (email?.value !== email_confirmation?.value) {
           alert('Emails do not match!');
           return;
       }

       // Validate email format
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if (!emailRegex.test(email?.value || '')) {
           alert('Invalid email format!');
           return;
       } else{
        formData.append('email', email.value);
       }
    }
    if (pagastsInput?.value) {

        formData.append('pagasts', pagastsInput.value);
        }
    if (istabasInput?.value) {
        const istabasValue = parseInt(istabasInput.value, 10)
        if(Number.isInteger(istabasValue) && istabasValue >0 &&istabasInput?.value.length < 6){
        formData.append('pagasts', istabasInput.value);
        } else {
            alert('Input has to be a positive number and less than 9 character long');
            return;
        }
    }
    if (m2MinInput?.value) {
        const m2MinValue = parseInt(m2MinInput.value, 10);
        if(Number.isInteger(m2MinValue) && m2MinValue >0 &&m2MinInput?.value.length < 6){

        formData.append('pagasts', m2MinInput.value);
        } else {
            alert('Input has to be a positive number and less than 9 character long');
            return;
        }
    }
    if (m2MaxInput?.value) {
        const m2MaxValue = parseInt(m2MaxInput.value, 10);
        if(Number.isInteger(m2MaxValue) && m2MaxValue >0 && m2MaxInput?.value.length < 6){
        formData.append('pagasts', m2MaxInput.value);
        }else {
            alert('Input has to be a positive number and less than 9 character long');
            return;
        }
        }
        if (cenaMinInput?.value) {
        const cenaMinValue = parseInt(cenaMinInput.value, 10);
        if(Number.isInteger(cenaMinValue) && cenaMinValue >0 && cenaMinInput?.value.length < 6){

        formData.append('pagasts', cenaMinInput.value);
        } else {
            alert('Input has to be a positive number and less than 9 character long');
            return;
        }
        }
        if (cenaMaxInput?.value) {
        const cenaMaxValue = parseInt(cenaMaxInput.value, 10);
        if(Number.isInteger(cenaMaxValue) && cenaMaxValue >0 && cenaMaxInput?.value.length < 6){

        formData.append('pagasts', cenaMaxInput.value);
        } else{
            alert('Input has to be a positive number and less than 9 character long');
            return;
        }
    }
        if (stavsMinInput?.value) {
        const stavsMinValue = parseInt(stavsMinInput.value, 10);
        if(Number.isInteger(stavsMinValue) && stavsMinValue >0 && stavsMinInput?.value.length < 6){

        formData.append('pagasts', stavsMinInput.value);
        } else{
            alert('Input has to be a positive number and less than 9 character long');
            return;
        }
    }
        if (stavsMaxInput?.value) {
        const stavsMaxValue = parseInt(stavsMaxInput.value, 10);
        if(Number.isInteger(stavsMaxValue) && stavsMaxValue >0 && stavsMaxInput?.value.length < 6){

        formData.append('pagasts', stavsMaxInput.value);
        }else{
            alert('Input has to be a positive number and less than 9 character long');
            return;
        }
    }
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        })
        if (response.ok){
            alert('form submitted successfully!')
        } else {
            alert('Failed to submit the form!')
        }
        
    } catch (error) {
        console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form.');
    }
    
    
    
    
    console.log(formData.get("email"));
    
});
}

setupFormListener()
setDistrictOptions()



























