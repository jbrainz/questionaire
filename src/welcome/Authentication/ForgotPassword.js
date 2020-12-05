/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {RectButton, BorderlessButton} from 'react-native-gesture-handler';

/**
 * @param styles
 * all local styles definitions goes here.
 */

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    height: 50,
    width: 321,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#57855F',
  },
  text: {
    position: 'absolute',
    top: 133,
    left: 25,
    height: 20,
    marginRight: 284,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    position: 'absolute',
    padding: 15,
    height: 50,
    left: 25,
    right: 25,
    top: 258,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 0.7,
    borderColor: '#219653',
  },
  textContainer: {},
});

/**
 * @param validationSchema
 * using formik for validation and email check.
 */
const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email').required(''),
});

/**
 * @param Returns Jsx
 * Main component for Sign Up
 */

const ForgotPassword = ({navigation}) => {
  //destructuring methods and custom handlers from formik
  const {handleChange, handleBlur, handleSubmit, errors} = useFormik({
    validationSchema: ForgotPasswordSchema,
    initialValues: {email: '', password: '', remember: false},
    onSubmit: () => true,
  });
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} flex={1}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <View style={styles.text}>
          <View flexDirection="row" style={{width: 251}}>
            <Text
              style={{
                color: '#111111',
                fontSize: 16,
                lineHeight: 20,
                fontFamily: 'OpenSans-Regular',
              }}>
              Not a member yet ?{' '}
            </Text>
            <BorderlessButton
              onPress={() =>
                navigation.navigate('Authentication', {
                  screen: 'SignUp',
                })
              }>
              <Text
                style={{
                  color: '#219653',
                  fontSize: 16,
                  lineHeight: 20,
                  fontFamily: 'OpenSans-Regular',
                }}>
                {' '}
                Register now
              </Text>
            </BorderlessButton>
          </View>
          <Text
            style={{
              width: 245,
              marginTop: 25,
              fontWeight: '700',
              fontFamily: 'OpenSans-Bold',
              fontSize: 16,
              lineHeight: 20,
              letterSpacing: 2,
              color: '#000000',
            }}>
            Reset Password
          </Text>
        </View>

        <View style={styles.form}>
          <View
            style={{
              width: 361,
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
            <TextInput
              style={[styles.textField, {borderColor: '#219653'}]}
              placeholder="Email"
              placeholderTextColor="#555555"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              autoCompleteType="email"
              autoCapitalize="none"
              returnKeyType="next"
              required={true}
              onSubmitEditing={() => handleSubmit()}
            />
            {errors && (
              <Text
                style={{
                  position: 'absolute',
                  left: 30,
                  right: 25,
                  top: 312,
                  paddingLeft: 10,
                  color: 'red',
                }}>
                {errors.email}
              </Text>
            )}
            <View style={{position: 'absolute', left: 25, right: 25, top: 348}}>
              <View flex={1} justifyContent="center" alignItems="center">
                <RectButton
                  onPress={() => console.log('welcome')}
                  rippleColor="white"
                  style={styles.button}>
                  <Text style={{color: 'white', fontFamily: 'OpenSans-Bold'}}>
                    Reset
                  </Text>
                </RectButton>
                <View
                  flex={1}
                  marginTop={25}
                  justifyContent="center"
                  alignItems="center">
                  <BorderlessButton
                    rippleColor="#fff"
                    onPress={() => navigation.navigate('Login')}>
                    <Text
                      marginLeft={10}
                      style={{
                        color: '#219653',
                        fontSize: 13,
                        fontWeight: '400',
                      }}>
                      Back
                    </Text>
                  </BorderlessButton>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPassword;
