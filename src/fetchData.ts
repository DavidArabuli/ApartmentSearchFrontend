
import {z} from 'zod';
// const url: string = "http://localhost/dashboard/ssParser/api/api.php?";


    const fetchedItemSchema = z.object({
    id: z.number(),
    link: z.string(),
    pub_date: z.string(),
    title: z.string(),
    imgSrc: z.string(),
    pagasts: z.string(),
    iela: z.string(),
    istabas: z.number(),
    m2: z.number(),
    stavs: z.string(),
    serija: z.string(),
    cena: z.number(),
    hash: z.string(),
    created_at: z.string(),}) 
    
  

export type fetchedItem =z.infer <typeof fetchedItemSchema>



async function fetchSSitem (url:string) : Promise<fetchedItem[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error. Status: ${response.status}`);
    }

    const rawData : fetchedItem[]  = await response.json();
    const result = fetchedItemSchema.array().safeParse(rawData)

    if(!result.success){
      throw new Error(`Invalid data: ${result.error}`)
    }
     
    console.log(result.data);
    
    return result.data;
  } catch (error) {
    if(error instanceof Error){

      console.log(error.message);
    } else{
      console.log('Unexpected error: ', error);
      
    }
    return [];

  }
};


export default fetchSSitem;
