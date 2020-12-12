/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const ResetPasswod = ({navigation}) => {
  return (
    <View
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="white">
      <View
        style={{
          position: 'absolute',
          left: 30,
          right: 25,
          top: 245,
          marginBottom: 30,
        }}>
        <View justifyContent="center" alignItems="center">
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: 20,
                lineHeight: 20,
                textAlign: 'center',
                color: '#219653',
                padding: 15,
              }}>
              Your password was reset successfully
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 40,
              width: 40,
              borderRadius: 20,
              borderWidth: 0.8,
              borderColor: '#219653',
              backgroundColor: '#fff',
            }}>
            <Icon color="#219653" name="check" size={25} />
          </View>
        </View>
        <View marginTop={40} justifyContent="center" alignItems="center">
          <RectButton
            style={{
              backgroundColor: '#57855F',
              width: 210,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
            }}
            onPress={() => navigation.navigate('Login')}>
            <Text style={{color: '#fff', fontFamily: 'OpenSans-Bold'}}>
              Continue
            </Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default ResetPasswod;
