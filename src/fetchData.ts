
import {z} from 'zod';



  const fetchedItemSchema = z.object({
    id: z.number(),
    link: z.string(),
    pubDate: z.string(),
    title: z.string(),
    imgSrc: z.string(),
    district: z.string(),
    street: z.string(),
    rooms: z.number(),
    m2: z.number(),
    floor: z.number(),
    series: z.string(),
    price: z.number(),
    hash: z.string(),
    created_at: z.string(),}) 
    

  const paginationSchema = z.object({
    current_page: z.union([z.string(), z.number()]),
    page_limit: z.union([z.string(), z.number()]),
    total_results: z.union([z.string(), z.number()]),
    total_pages: z.union([z.string(), z.number()]),
});
  
const apiResponseSchema = z.object({
  data: z.array(fetchedItemSchema),  
  pagination: paginationSchema,      
});

export type FetchedItem = z.infer<typeof fetchedItemSchema>;
export type Pagination = z.infer<typeof paginationSchema>;
export type ApiResponse = z.infer<typeof apiResponseSchema>;



async function fetchSSitem(url: string): Promise<ApiResponse> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error. Status: ${response.status}`);
    }

    const rawData: unknown = await response.json();  
    const result = apiResponseSchema.safeParse(rawData);

    if (!result.success) {
      throw new Error(`Invalid data: ${result.error}`);
    }

    return result.data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('Unexpected error: ', error);
    }
    
    return { data: [], pagination: { current_page: 0, page_limit: 0, total_results: 0, total_pages: 0 } };
  }
}

export default fetchSSitem;
