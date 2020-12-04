import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    height: 50,
    width: 321,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row-reverse',
    elevation: 2,
    shadowColor: '#111111',
  },
  text: {
    color: '#111111',
    fontFamily: 'OpenSans-Bold',
  },
});

/**
 *
 * @param {Custom Button} param0 Custom button for icon related Button
 */
const ButtonIcon = ({onPress, label, source, style, textStyle}) => {
  return (
    <View flex={1} marginTop={25}>
      <RectButton style={[styles.button, {...style}]} {...{onPress}}>
        <Text style={[styles.text, {...textStyle}]}>{label}</Text>
        <Image {...{source}} style={{width: 25, height: 25, left: 50}} />
      </RectButton>
    </View>
  );
};

export default ButtonIcon;
