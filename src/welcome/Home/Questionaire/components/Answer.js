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
    height: 40,
    width: 250,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 10,
    flexDirection: 'row',
    marginBottom: 8,
  },
  rounded: {
    height: 20,
    width: 20,
    borderWidth: 1,
    backgroundColor: '#F2C94C',
    borderRadius: 10,
    opacity: 0.75,
    marginRight: 6,
    borderColor: '#ffff',
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

const Answer = ({data}) => {
  const [active, setActive] = useState(-1);

  const changeInitial = (item, index) => {
    setActive(index);
    console.log(item);
  };

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <BorderlessButton
          rippleColor="transparent"
          key={index}
          onPress={() => changeInitial(item, index)}
          style={styles.buttonContainer}>
          <Text style={styles.text}>{item.answer}</Text>
          <View
            style={[
              styles.rounded,
              {backgroundColor: active === index ? 'green' : undefined},
            ]}
          />
        </BorderlessButton>
      ))}
    </View>
  );
};

export default Answer;
