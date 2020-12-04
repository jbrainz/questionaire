import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 15,
    textAlign: 'center',
  },
  check: {},
});
/**
 *
 * @param {Checkbox} param0 Custom Checkbox handler
 */
const CheckBox = ({label, checked, onChange}) => {
  return (
    <BorderlessButton rippleColor="transparent" onPress={() => onChange()}>
      <View style={{alignItems: 'center', flexDirection: 'row'}}>
        <View
          style={{
            marginRight: 15,
            height: 20,
            width: 20,
            borderRadius: 2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: checked ? '#27AE60' : '#E0E0E0',
            borderWidth: 1,
            borderColor: '#ccc',
          }}>
          <Icon name="check" size={20} color="white" />
        </View>
        <Text style={{color: '#777777', fontSize: 13, lineHeight: 13}}>
          {label}
        </Text>
      </View>
    </BorderlessButton>
  );
};

CheckBox.PropType = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default CheckBox;
