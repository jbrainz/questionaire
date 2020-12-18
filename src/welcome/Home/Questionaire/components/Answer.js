/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import {CheckBox} from 'native-base';

const styles = StyleSheet.create({
  container: {
    left: 0,
    top: 130,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#F2C94C',
    opacity: 0.75,
    borderRadius: 10,
    flexDirection: 'row',
    height: 40,
    width: 250,
    justifyContent: 'space-between',
    padding: 5,
    alignItems: 'center',
    elevation: 10,
  },
  rounded: {
    height: 20,
    width: 20,
    borderWidth: 1,
    backgroundColor: '#F2C94C',
    borderRadius: 10,
    opacity: 0.75,

    borderColor: 'transparent',
  },
  text: {
    color: '#111111',
    fontFamily: 'OpenSans-Medium',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 18.75,
    paddingLeft: 16,
  },
});

const Answer = ({label, onPress, checked}) => {
  return (
    <View style={styles.container}>
      <BorderlessButton {...{onPress}} style={styles.buttonContainer}>
        <Text style={styles.text}>{label}</Text>
        <View style={styles.rounded}>
          <CheckBox
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              borderRadius: 10,
              borderColor: 'transparent',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            color="green"
            {...{onPress}}
            {...{checked}}
          />
        </View>
      </BorderlessButton>
    </View>
  );
};

export default Answer;
