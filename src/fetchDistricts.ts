
// fetches all possible districts from backend DB. 
async function fetchDistricts (url:string):Promise<{ [key: string]: string }> {
    try {
        const response = await fetch(url)
        const data = await response.json()
        // console.log(data.data);
        
        return data.data

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