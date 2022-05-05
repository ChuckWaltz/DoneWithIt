import { Image, StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import AppFormField from '../components/forms/AppFormField';
import AppSubmitButton from '../components/forms/AppSubmitButton';
import AppForm from '../components/forms/AppForm';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />
      <AppForm
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="name"
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          placeholder="Name"
          textContentType="name"
        ></AppFormField>
        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        ></AppFormField>
        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="key"
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
        ></AppFormField>
        <AppSubmitButton style={{ marginTop: 10 }}>Register</AppSubmitButton>
      </AppForm>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default RegisterScreen;
