import Listing from "../api/models/listing";

type RootStackParamList = {
  Welcome: undefined;
  Register: undefined;
  Login: undefined;
  Listings: undefined;
  ListingDetails: {
    listing: Listing;
  };
  ListingEdit: undefined;
  Account: undefined;
  Messages: undefined;
};

export default RootStackParamList;
