/* eslint-disable react-native/no-inline-styles */
import React from 'react';
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
  const nextQuestion = () => {
    navigation.navigate('Profile');
  };
  const datas = [
    {
      answer: 'Peter',
    },
    {
      answer: 'Peter',
    },
    {
      answer: 'Peter',
    },
    {
      answer: 'Peter',
    },
  ];

  const insets = useSafeAreaInsets();
  return (
    <View flex={1} style={{backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <View marginBottom={10}>
          <Text style={styles.text}>
            To help you better, complete this set of Quiz
          </Text>
        </View>
        <Text>
          <Text style={[styles.text, {color: '#F2C94C'}]}>Question </Text>
          <Text style={[styles.text, {color: '#F2C94C'}]}>3/12</Text>
        </Text>
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
              <Answer data={datas} />
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
