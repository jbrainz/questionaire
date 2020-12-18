/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Text} from 'react-native';

const IconTextContainer = ({source, label, main}) => {
  return (
    <View top={90} left={-20} marginTop={20}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginRight: 40,
        }}>
        <Image {...{source}} />
        <Text style={{width: 172, height: 16, marginLeft: -30}}>
          <Text style={{fontSize: 14, lineHeight: 16}}>{label} </Text>
          <Text style={{fontSize: 14, lineHeight: 16, fontWeight: 'bold'}}>
            {main}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default IconTextContainer;
