interface Image {
  url: string;
  thumbnailUrl: string;
}

interface Location {
  latitude: number;
  longitude: number;
}

export default interface Listing {
  id: number;
  title: string;
  images: Image[];
  price: number;
  categoryId: number;
  userId: number;
  location: Location;
  description: string;
}
