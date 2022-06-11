type RootStackParamList = {
  Welcome: undefined;
  Register: undefined;
  Login: undefined;
  Listings: undefined;
  ListingDetails: {
    listing: {
      id: number;
      title: string;
      description: string;
      image: any;
      price: number;
      categoryId: number;
    };
  };
  ListingEdit: undefined;
  Account: undefined;
  Messages: undefined;
};

export default RootStackParamList;
