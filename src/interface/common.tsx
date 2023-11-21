export interface DayPlan {
  day: number;
  city: string;
  description: string;
}

export interface Review {
  user_name: string;
  rating: number;
  description: string;
}

export interface ReviewSummary {
  cleanliness: number;
  facilities: number;
  value_for_money: number;
  service: number;
  location: number;
  total_summary: number;
}

export interface PackageContent {
  id: number;
  image: string;
  country: string;
  touristPlace: string;
  reviewsStar: number;
  description: string;
  pages_for_show: string[];
  category: string[];
  offer: number;
  price: number;
  territory: string;
  days: number;
  days_and_plans: DayPlan[];
  guideName: string;
  guideImage: string;
  position: string;
  reviews: Review[];
  review_summary: ReviewSummary;
}
