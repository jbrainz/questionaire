/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconTextContainer from './IconTextContainer';

const profile_pics = require('../assets/img/profile.jpg');
const cover = require('../assets/img/5.jpg');
const user = require('../assets/img/user1.png');
const suitcase = require('../assets/icons/suitcase.png');
const graduation = require('../assets/icons/graduation.png');
const home = require('../assets/icons/home.png');
const pin = require('../assets/icons/pin.png');

const datas = [
  {
    id: 0,
    label: 'UTCH Cross River,',
    main: 'Nigeria',
    icon: suitcase,
  },
  {
    id: 1,
    label: 'Studied at',
    main: 'University of Calabar',
    icon: graduation,
  },
  {
    id: 2,
    label: 'Lived in',
    main: 'Calabar',
    icon: home,
  },
  {
    id: 3,
    label: 'From',
    main: 'Calabar',
    icon: pin,
  },
];
const Profile = () => {
  return (
    <View style={styles.main}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.icon}>
          <Icon color="#618361" name="ellipsis-v" size={25} />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image style={styles.cover} source={cover} />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image style={styles.profile} source={profile_pics} />
        </View>
        <View style={styles.text}>
          <Text
            style={{
              marginTop: 20,
              fontFamily: 'OpenSans-Regular',
              fontSize: 24,
              lineHeight: 28.13,
              color: '#202620',
              fontWeight: '500',
            }}>
            Jason Moore
          </Text>
          <Text
            style={{
              marginTop: 5,
              fontFamily: 'OpenSans-Regular',
              fontSize: 16,
              lineHeight: 18.13,
              color: '#202620',
            }}>
            Guidance and councelling
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            top: 40,
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <RectButton
            style={{
              backgroundColor: '#F2C94C',
              width: 200,
              height: 35,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              borderRadius: 10,
              elevation: 2,
            }}>
            <Image source={user} style={{left: '8.9%', marginRight: 10}} />
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                fontFamily: 'OpenSans-Regular',
              }}>
              CONTACT
            </Text>
          </RectButton>
          <RectButton
            style={{
              backgroundColor: '#E5E5E5',
              borderRadius: 10,
              elevation: 2,
              width: 70,
              height: 35,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: -20,
            }}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                fontFamily: 'OpenSans-Regular',
              }}>
              More
            </Text>
          </RectButton>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: '#C4C4C4',
            width: 290,
            marginRight: 10,
            top: 80,
            left: 34,
          }}
        />

        {datas.map((data) => (
          <IconTextContainer
            key={data.id}
            label={data.label}
            main={data.main}
            source={data.icon}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    right: 30,
    top: 20,
  },
  container: {
    left: 0,
    top: 0,
    right: 0,
    position: 'absolute',
  },
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cover: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: 300,
    height: 200,
    top: 40,
  },
  profile: {
    borderRadius: 100,
    width: 120,
    height: 120,
    borderWidth: 4,
    borderColor: '#fff',
    top: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    height: 28,
    padding: 15,
  },
});

export default Profile;
