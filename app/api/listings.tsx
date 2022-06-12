import client from "./client";

import Listing from "./models/listing";

const endpoint = "/listings";

const createListing = (listing: FormData) =>
  client.post<Listing>(endpoint, listing);

const getListings = () => client.get<Listing[]>(endpoint);

export default {
  createListing,
  getListings,
};
