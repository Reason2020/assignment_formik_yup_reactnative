// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';


//Form Validation
import * as Yup from 'yup';
import { Formik } from 'formik';

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address.')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Must be more than  or equal to 8 characters')
    .max(16, 'Must be less than or equal to 16 characters')
    .required('Required')
});

const primaryColor = "#1094f3";
const inputFieldColor = "#344755";
const placeholderColor = "#788a94";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
        <Text>English (UK)</Text>
        <MaterialCommunityIcons name="facebook" size={70} color={primaryColor} />
      </View>

      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={ValidationSchema}
        onSubmit={values => alert(values.email)}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          isValid,
        }) => (
          <View style={styles.formContainer}>
            <View style={styles.inputWrapper}>
              <TextInput 
                value={values.email}
                style={styles.inputField}
                onChangeText={handleChange('email')}
                placeholder='Mobile number or email address'
                placeholderTextColor={placeholderColor}
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <TextInput 
                value={values.password}
                onChangeText={handleChange('password')}
                style={styles.inputField}
                placeholder='Password'
                placeholderTextColor={placeholderColor}
              />
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
              <TouchableOpacity
              style={[styles.primaryBtn, styles.button]}
              onPress={handleSubmit}
            >
              <Text style={[styles.buttonText, {color: '#fff'}]} >Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.secondaryBtn, styles.button]}
              onPress={handleSubmit}
            >
              <Text style={[styles.buttonText, {color: '#000'}]}>Find Your Account</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.footerSection}>
              <TouchableOpacity style={[styles.tertiaryBtn, styles.button]}>
                <Text style={[styles.buttonText, {color: '#000'}]}>Create new account</Text>
              </TouchableOpacity>
              <View style={styles.mainFooter}>
                <Entypo name="infinity" size={60} color="black" />
                <Text style={{fontSize: 24}}>Meta</Text>
              </View>
            </View>
          </View>
        )}

      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  header: {
    gap: 20,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  inputWrapper: {
    marginTop: 150,
    gap: 10
  },
  inputField: {
    backgroundColor: inputFieldColor,
    color: "#fff",
    width: 300,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 5,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  primaryBtn: {
    backgroundColor: primaryColor,
    color: '#fff',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  footerSection: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
  },
  tertiaryBtn: {
    borderWidth: 1,
    borderColor: primaryColor,
    width: '100%'
  },
  mainFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold'
  }
});
