/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Answer from './components/Answer';

/* custom component import*/
import Question from './components/Questions';

const styles = StyleSheet.create({
  container: {
    left: 20,
    top: 50,
    position: 'absolute',
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    color: '#219653',
    fontWeight: 'bold',
  },
});

const Questionaire = ({navigation}) => {
  const [select, setSelected] = useState(false);
  const [select1, setSelected1] = useState(false);
  const [select2, setSelected2] = useState(false);
  const [select3, setSelected3] = useState(false);

  const nextQuestion = () => {
    if (select || select1 || select2 || select3 !== false) {
      navigation.navigate('Profile');
    } else {
      alert('Please choose option');
    }
  };

  const answers = [
    {
      id: 1,
      label: 'John',
      checked: select,

      set: () => {
        setSelected((prev) => !prev);
        setSelected1(false);
        setSelected2(false);
        setSelected3(false);
      },
    },
    {
      id: 2,
      label: 'Mathew',
      checked: select1,
      set: () => {
        setSelected1((prev) => !prev);
        setSelected(false);
        setSelected2(false);
        setSelected3(false);
      },
    },
    {
      id: 3,
      label: 'Luke',
      checked: select2,
      set: () => {
        setSelected2((prev) => !prev);
        setSelected1(false);
        setSelected(false);
        setSelected3(false);
      },
    },
    {
      id: 4,
      label: 'Michael',
      checked: select3,
      set: () => {
        setSelected3((prev) => !prev);
        setSelected1(false);
        setSelected2(false);
        setSelected(false);
      },
    },
  ];

  const insets = useSafeAreaInsets();
  return (
    <View flex={1} style={{backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.text}>
            To help you better, complete this set of Quiz
          </Text>
        </View>
        <View marginTop={25}>
          <Text style={[styles.text, {color: '#F2C94C'}]}>Question 3/12</Text>
        </View>
        <View marginTop={25}>
          <View
            backgroundColor="#E0E0E0"
            style={{borderRadius: 15, height: 30, width: 320}}>
            <View
              backgroundColor="#F2C94C"
              style={{borderRadius: 15, height: 30, width: '25.2%'}}
            />
          </View>
        </View>
        <View>
          <View marginTop={12}>
            <Question />
            <View
              backgroundColor="#57855F"
              style={{
                width: '100%',
                height: 400,
                borderRadius: 25,
                elevation: 3,
                marginLeft: 25,
                right: 25,
              }}>
              {answers.map((answer) => (
                <Answer
                  key={answer.id}
                  checked={answer.checked}
                  onPress={answer.set}
                  label={answer.label}
                />
              ))}
            </View>
            <View
              style={{
                position: 'absolute',
                top: 400,
                left: 25,
                backgroundColor: '#57855F',
                width: 270,
                height: 50,
                borderBottomLeftRadius: 25,
                borderBottomRightRadius: 25,
                elevation: 2,
                overflow: 'hidden',
                opacity: 0.8,
              }}
            />

            <View
              style={{
                position: 'absolute',
                top: 410,
                left: 30,
                backgroundColor: ' rgba(87, 133, 95, 0.75)',
                width: 260,
                height: 50,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                opacity: 0.7,
              }}
            />
          </View>
          <View marginTop={50} justifyContent="center" alignItems="center">
            <RectButton
              style={{
                backgroundColor: '#F2C94C',
                width: 210,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
                paddingBottom: insets.bottom,
              }}
              onPress={nextQuestion}>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'OpenSans-Bold',
                  fontWeight: 'bold',
                  fontSize: 24,
                }}>
                NEXT
              </Text>
            </RectButton>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Questionaire;
