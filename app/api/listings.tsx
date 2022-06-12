import { ImageType } from "../components/types/image-item.model";
import client from "./client";

import Listing from "./models/listing";

const endpoint = "/listings";

export const createListing = (values: any) => {
  console.log(values);
  const data = new FormData();
  data.append("title", values.title);
  data.append("price", values.price);
  data.append("categoryId", values.category.id);
  data.append("description", values.description);
  if (values.location) data.append("location", JSON.stringify(values.location));
  values.images.forEach((image: ImageType, index: number) => {
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image.uri,
    } as any);
  });

  return client.post(endpoint, data);
};

const getListings = () => client.get<Listing[]>(endpoint);

export default {
  createListing,
  getListings,
};
