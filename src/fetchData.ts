
import {z} from 'zod';



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
    

  const paginationSchema = z.object({
    current_page: z.union([z.string(), z.number()]),
    page_limit: z.union([z.string(), z.number()]),
    total_results: z.union([z.string(), z.number()]),
    total_pages: z.union([z.string(), z.number()]),
});
  
const apiResponseSchema = z.object({
  data: z.array(fetchedItemSchema),  // The array of fetched items
  pagination: paginationSchema,      // The pagination object
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

    const rawData: unknown = await response.json();  // Fetch the raw data
    const result = apiResponseSchema.safeParse(rawData);  // Validate the response with Zod

    if (!result.success) {
      throw new Error(`Invalid data: ${result.error}`);
    }

    console.log(result.data.data);
    return result.data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('Unexpected error: ', error);
    }
    // Return a default object in case of an error
    return { data: [], pagination: { current_page: 0, page_limit: 0, total_results: 0, total_pages: 0 } };
  }
}

export default fetchSSitem;
