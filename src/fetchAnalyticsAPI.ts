
import { AnalyticsData } from './types';  

export async function fetchAnalyticsAPI(url: string): Promise<AnalyticsData | null> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data: AnalyticsData = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('Unexpected error: ', error);
    }
    return null;
  }
}
