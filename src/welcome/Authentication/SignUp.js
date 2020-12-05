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
import CheckBox from '../Components/CheckBox';
import ButtonIcon from '../Components/ButtonIcon';

const googleIcon = require('./assets/img/google-icon.png');
const facebookIcon = require('./assets/img/facebook-icon.png');

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
    top: 103,
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
    top: 193,
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
const SignUpSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password is too short')
    .max(50, 'Too Long!')
    .required(''),
  email: Yup.string().email('Please enter a valid email').required(''),
});

/**
 * @param Returns Jsx
 * Main component for Sign Up
 */

const SignUp = ({navigation}) => {
  //destructuring methods and custom handlers from formik
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    values,
    setFieldValue,
  } = useFormik({
    validationSchema: SignUpSchema,
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
          <Text
            style={{
              color: '#219653',
              fontSize: 16,
              lineHeight: 20,
              width: 102,
              fontFamily: 'OpenSans-Regular',
            }}>
            Register now
          </Text>
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
            Sign up to continue
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
              placeholder="Email or Username"
              placeholderTextColor="#555555"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              autoCompleteType="email"
              autoCapitalize="none"
              returnKeyType="next"
            />
            {errors && (
              <Text
                style={{
                  position: 'absolute',
                  left: 30,
                  right: 25,
                  top: 245,
                  paddingLeft: 10,
                  color: 'red',
                }}>
                {errors.email}
              </Text>
            )}
            <TextInput
              style={{
                position: 'absolute',
                padding: 15,
                height: 50,
                left: 25,
                right: 25,
                top: 268,
                backgroundColor: '#fff',
                borderRadius: 5,
                borderWidth: 0.7,
                borderColor: '#219653',
              }}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="#555555"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              autoCapitalize="none"
              autoCompleteType="password"
              onSubmitEditing={() => handleSubmit()}
            />
            {errors && (
              <Text
                style={{
                  position: 'absolute',
                  left: 30,
                  right: 25,
                  top: 318,
                  paddingLeft: 10,
                  color: 'red',
                }}>
                {errors.password}
              </Text>
            )}
            <View
              style={{
                position: 'absolute',
                left: 25,
                right: 25,
                top: 345,
              }}>
              <CheckBox
                checked={values.remember}
                onChange={() => setFieldValue('remember', !values.remember)}
                label="Keep me logged in"
              />
            </View>
            <View style={{position: 'absolute', left: 25, right: 25, top: 388}}>
              <View flex={1} justifyContent="center" alignItems="center">
                <RectButton
                  onPress={() => console.log('welcome')}
                  rippleColor="white"
                  style={styles.button}>
                  <Text style={{color: 'white', fontFamily: 'OpenSans-Bold'}}>
                    Sign In
                  </Text>
                </RectButton>
                <View
                  flex={1}
                  marginTop={25}
                  justifyContent="center"
                  alignItems="center">
                  <BorderlessButton
                    onPress={() =>
                      navigation.navigate('Authentication', {
                        screen: 'Login',
                      })
                    }>
                    <Text
                      marginLeft={10}
                      style={{
                        fontSize: 13,
                        fontWeight: '400',
                        color: '#219653',
                      }}>
                      Already Have an account?
                    </Text>
                  </BorderlessButton>
                </View>
              </View>
              <View
                flexDirection="row"
                marginTop={40}
                justifyContent="center"
                alignItems="center">
                <View
                  style={{
                    justifyContent: 'center',
                    height: 1,
                    backgroundColor: '#999999',
                    width: 130,
                    marginRight: 10,
                  }}
                />
                <Text
                  style={{fontFamily: 'OpenSans-Regular', fontWeight: '700'}}>
                  or
                </Text>
                <View
                  style={{
                    justifyContent: 'center',
                    height: 1,
                    backgroundColor: '#999999',
                    width: 130,
                    marginLeft: 10,
                  }}
                />
              </View>
              <ButtonIcon
                source={googleIcon}
                label="Sign up with google"
                onPress={() => console.log('true')}
              />
              <ButtonIcon
                source={facebookIcon}
                style={{backgroundColor: '#2F4DED'}}
                textStyle={{color: 'white'}}
                label="Sign up with Facebook"
                onPress={() => console.log('true')}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;
