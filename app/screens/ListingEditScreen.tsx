import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import AppFormPicker from "../components/forms/AppFormPicker";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";
import AppSubmitButton from "../components/forms/AppSubmitButton";
import useLocation from "../hooks/useLocation";

const categories = [
  {
    id: 1,
    label: "Furniture",
    icon: "floor-lamp",
    value: "furniture",
    color: "#fc5c65",
  },
  { id: 2, label: "Cars", icon: "car", value: "cars", color: "#fd9644" },
  {
    id: 3,
    label: "Cameras",
    icon: "camera",
    value: "cameras",
    color: "#fed330",
  },
  { id: 4, label: "Games", icon: "cards", value: "games", color: "#26de81" },
  {
    id: 5,
    label: "Clothing",
    icon: "shoe-heel",
    value: "clothing",
    color: "#2bcbba",
  },
  {
    id: 6,
    label: "Sports",
    icon: "basketball",
    value: "sports",
    color: "#45aaf2",
  },
  {
    id: 7,
    label: "Movies & Music",
    icon: "headphones",
    value: "moviesAndMusic",
    color: "#4b7bec",
  },
  {
    id: 8,
    label: "Books",
    icon: "book-open-variant",
    value: "books",
    color: "#a55eea",
  },
  {
    id: 9,
    label: "Other",
    icon: "application",
    value: "other",
    color: "#778ca3",
  },
] as any[];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
  images: Yup.array()
    .required()
    .min(1, "Please select at least one image")
    .label("Images"),
});

const ListingEditScreen = () => {
  const location = useLocation();

  const handleSubmit = (values: any) => {
    console.log(values);
    console.log(location);
  };

  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
          images: [],
        }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name="images"></AppFormImagePicker>
        <AppFormField name="title" placeholder="Title"></AppFormField>
        <AppFormField
          name="price"
          maxLength={8}
          autoCapitalize="none"
          placeholder="Price"
          keyboardType="number-pad"
          icon="currency-usd"
          width={120}
        ></AppFormField>
        <AppFormPicker
          name="category"
          items={categories}
          placeholder="Category"
          width={"50%"}
        ></AppFormPicker>
        <AppFormField
          name="description"
          placeholder="Description"
          multiline
          numberOfLines={3}
        ></AppFormField>
        <AppSubmitButton>Post</AppSubmitButton>
      </AppForm>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default ListingEditScreen;
