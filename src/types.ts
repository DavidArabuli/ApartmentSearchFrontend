

export interface AnalyticsData {
   averageM2: Record<string, number>;  // Key is a string, value is a number
  averagePrice: {
    averagePrice: number;
  };
  highestPrice: {
    highestPrice: number;
  };
  lowestPrice: {
    lowestPrice: number;
  };
  averageM2Price: {
    averageM2Price: number;
  };
  mostSalesDistrict: {
    pagasts: string;
    offer_count: number;
  }[];
  lowestAveragePriceDistrict: {
    pagasts: string;
    average_price: number;
  }[];
}

