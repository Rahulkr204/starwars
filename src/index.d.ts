interface Product {
  id: string;
  name: string;
  imageUrl: string;
  originalPrice: number;
  discountPrice: number;
  offerPercentage: number;
  rating: number;
  ratingCount: number;
  tags: string[];
}

interface Player {
  id: number;
  name: string;
  icon: string;
  score?: number;
}

interface Match {
  match: number;
  player1: {
    id: number;
    score: number;
  };
  player2: {
    id: number;
    score: number;
  };
}
