

export interface AnalyticsData {
  //  averageM2: Record<string, number>;  
  averageM2: {
    averageM2: number;
  };
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
    district: string;
    offer_count: number;
  }[];
  lowestAveragePriceDistrict: {
    district: string;
    average_price: number;
  }[];
  averageM2PriceByDistrict: {
    district: string;
    average_m2_price_by_district: number;
  }[];
}

