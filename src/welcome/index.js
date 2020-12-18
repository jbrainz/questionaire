import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignUp from './Authentication/SignUp';
import Login from './Authentication/Login';
import ForgotPassword from './Authentication/ForgotPassword';
import ResetPassword from './Authentication/ResetPassword';

import Questionaire from './Home';
import Profile from './Home/Profile/Profile';

const AuthStack = createStackNavigator();

export const AuthenticationNavigation = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <AuthStack.Screen name="ResetPassword" component={ResetPassword} />
    </AuthStack.Navigator>
  );
};

export const Home = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="Questionaire" component={Questionaire} />
      <AuthStack.Screen name="Profile" component={Profile} />
    </AuthStack.Navigator>
  );
};
