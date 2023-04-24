import Login from '../LoginScreen/LoginScreen'; // My next screen
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';

const Splash = props => {
  const {navigate} = props.navigation;

  useEffect(() => {
    setTimeout(() => {
      navigate('Login');
    }, 2300);
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        style={{height: 150, width: 150}}
        source={require('../../assets/logo.png')}></Image>
    </View>
  );
};

export default Splash;
