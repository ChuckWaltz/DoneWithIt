import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import AppFormPicker from '../components/forms/AppFormPicker';
import AppSubmitButton from '../components/forms/AppSubmitButton';

const categories = [
  { id: 1, label: 'Fashion', value: 'Fashion' },
  { id: 2, label: 'Electronics', value: 'Electronics' },
  { id: 3, label: 'Books', value: 'Books' },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  category: Yup.object().required().nullable().label('Category'),
  description: Yup.string().label('Description'),
});

const ListingEditScreen = () => {
  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          category: null,
          description: '',
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField name="title" placeholder="Title"></AppFormField>
        <AppFormField
          name="price"
          maxLength={8}
          autoCapitalize="none"
          placeholder="Price"
          keyboardType="number-pad"
          icon="currency-usd"
        ></AppFormField>
        <AppFormPicker
          name="category"
          items={categories}
          placeholder="Category"
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
