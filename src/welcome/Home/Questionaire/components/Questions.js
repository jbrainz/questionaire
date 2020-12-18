/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  quiz: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    backgroundColor: '#F2C94C',
    textAlign: 'right',
    borderRadius: 5,
    padding: 5,
  },
  container: {
    position: 'absolute',
    top: 15,
    left: -12,
    elevation: 4,
    height: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
const Questions = ({question}) => {
  return (
    <View marginTop={30}>
      <View style={styles.container}>
        <Text style={styles.quiz}>Which desciple was known as </Text>
        <Text style={[styles.quiz, {marginTop: 8}]}>{question}</Text>
      </View>
    </View>
  );
};

export default Questions;
