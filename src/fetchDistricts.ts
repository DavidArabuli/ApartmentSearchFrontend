
 
 async function fetchDistricts (url:string):Promise<{ [key: string]: string }> {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data

    }
    catch(error){
        if(error instanceof Error){

      console.log(error.message);
    } else{
      console.log('Unexpected error: ', error);
      
    }
    return{};
    }
  
};

export default fetchDistricts;