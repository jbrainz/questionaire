/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';

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
    borderColor: '#fff',
    backgroundColor: '#F2C94C',
    borderRadius: 10,
    opacity: 0.75,
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
const Answer = ({label}) => {
  const [check, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <BorderlessButton
        onPress={() => setChecked((prev) => !prev)}
        style={styles.buttonContainer}>
        <Text style={styles.text}>{label}</Text>
        <View
          style={[
            styles.rounded,
            {backgroundColor: check ? 'green' : undefined},
          ]}
        />
      </BorderlessButton>
    </View>
  );
};

export default Answer;
