import setDistrictOptions from './districtsOptions';
import setSeriesOptions from './seriesOptions';
import { notify_api_url } from './config';


export function setupFormListener() {
    const form = document.querySelector<HTMLFormElement>("#notify-form")!;
    const districtInput = document.querySelector<HTMLInputElement>("#district-input");
    const roomsInput = document.querySelector<HTMLInputElement>("#rooms-input");
    const m2MinInput = document.querySelector<HTMLInputElement>("#m2_min-input");
    const m2MaxInput = document.querySelector<HTMLInputElement>("#m2_max-input");
    const priceMinInput = document.querySelector<HTMLInputElement>("#price_min-input");
    const priceMaxInput = document.querySelector<HTMLInputElement>("#price_max-input");
    const floorMinInput = document.querySelector<HTMLInputElement>("#floor_min-input");
    const floorMaxInput = document.querySelector<HTMLInputElement>("#floor_max-input");
    // to do, when series gets added
    // const seriesInput = document.querySelector<HTMLInputElement>("#series-input");
    const email = document.querySelector<HTMLInputElement>("#email");
    const email_confirmation = document.querySelector<HTMLInputElement>("#email_confirmation");
    const invite_code = document.querySelector<HTMLInputElement>("#invite_code");

    form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if(!invite_code?.value){
        console.log('invite code was not provided');
        
        alert('Invite code is mandatory!');
        return;
    } else{
        formData.append('invite_code', invite_code.value);
    }

    if(!email?.value){
        console.log('email was not provided');
        
        alert('Email is mandatory!');
        return;
    } else{

        if (email?.value !== email_confirmation?.value) {
            alert('Emails do not match!');
            return;
        } 
        formData.append('email', email.value);
        formData.append('email_confirmation', email_confirmation.value);

       // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email?.value || '')) {
            alert('Invalid email format!');
            return;
        } 
    }
    if (districtInput?.value) {

        formData.append('district', districtInput.value);
        }
    if (roomsInput?.value) {
        const roomsValue = parseInt(roomsInput.value, 10)
        if(Number.isInteger(roomsValue) && roomsValue >0 &&roomsInput?.value.length < 9){
        formData.append('rooms', roomsInput.value);
        } else {
            alert('Input has to be a positive number and less than 9 character long');
            return;
        }
    }
    if (m2MinInput?.value) {
        const m2MinValue = parseInt(m2MinInput.value, 10);
        if(Number.isInteger(m2MinValue) && m2MinValue >0 &&m2MinInput?.value.length < 9){

        formData.append('m2_min', m2MinInput.value);
        } else {
            alert('Input has to be a positive number and less than 9 character long');
            return;
        }
    }
    if (m2MaxInput?.value) {
        const m2MaxValue = parseInt(m2MaxInput.value, 10);
        if(Number.isInteger(m2MaxValue) && m2MaxValue >0 && m2MaxInput?.value.length < 9){
        formData.append('m2_max', m2MaxInput.value);
        }else {
            alert('Input has to be a positive number and less than 9 character long');
            return;
        }
        }
        if (priceMinInput?.value) {
        const priceMinValue = parseInt(priceMinInput.value, 10);
        if(Number.isInteger(priceMinValue) && priceMinValue >0 && priceMinInput?.value.length < 9){

        formData.append('price_min', priceMinInput.value);
        } else {
            alert('Input has to be a positive number and less than 9 character long');
            return;
        }
        }
        if (priceMaxInput?.value) {
        const priceMaxValue = parseInt(priceMaxInput.value, 10);
        if(Number.isInteger(priceMaxValue) && priceMaxValue >0 && priceMaxInput?.value.length < 9){

        formData.append('price_max', priceMaxInput.value);
        } else{
            alert('Input has to be a positive number and less than 9 character long');
            return;
        }
    }
        if (floorMinInput?.value) {
        const floorMinValue = parseInt(floorMinInput.value, 10);
        if(Number.isInteger(floorMinValue) && floorMinValue >0 && floorMinInput?.value.length < 9){

        formData.append('floor_min', floorMinInput.value);
        } else{
            alert('Input has to be a positive number and less than 9 character long');
            return;
        }
    }
        if (floorMaxInput?.value) {
        const floorMaxValue = parseInt(floorMaxInput.value, 10);
        if(Number.isInteger(floorMaxValue) && floorMaxValue >0 && floorMaxInput?.value.length < 9){

        formData.append('floor_max', floorMaxInput.value);
        }else{
            alert('Input has to be a positive number and less than 9 character long');
            return;
        }
    }
    // to do, when series gets added
    // if(seriesInput?.value){
    //     const seriesValue = seriesInput?.value
    //     if(seriesValue.length > 20){
    //         alert('invalid input!');
    //         return;
    //     } else{
    //         formData.append('series', seriesInput.value);
    //     }
    // } 
    try {
    const response = await fetch(notify_api_url, {
        method: 'POST',
        body: formData
    });

    const json = await response.json();

    if (response.ok) {
        alert('Form submitted successfully!');
    } else {
        if (json.duplicate) {
            
            alert('This favorite already exists in a database!');
        } else {
            alert('Failed to submit the form: ' + (json.message || 'Unknown error'));
        }
    }

} catch (error) {
    console.error('Error submitting form:', error);
    alert('An error occurred while submitting the form.');
}

    
    
    
    
    console.log(formData.get("email"));
    
});
}

document.addEventListener("DOMContentLoaded", () => {
    setupFormListener();
    setDistrictOptions();
    setSeriesOptions();
});