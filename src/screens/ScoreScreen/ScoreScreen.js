import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {StackActions} from '@react-navigation/native';
import {connect} from 'react-redux';
import {clearAssignment} from '../../redux/Actions/user';

const App = ({route, navigation, clearAssignment}) => {
  const popAction = StackActions.replace('HomeStack');
  const {score, totalScore} = route.params;
  console.log(score);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          marginTop: -200,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{height: 250, width: 250}}
          source={require('../../assets/score.png')}></Image>
        <Text
          style={{
            fontSize: 24,
            color: 'black',
            margin: 20,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Score {score}/{totalScore}
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: 'gray',
          }}>
          Congratulations on your assignment successfully!!!
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          clearAssignment();
          navigation.dispatch(popAction);
        }}
        style={{
          width: 150,
          height: 40,
          position: 'absolute',
          alignSelf: 'center',
          bottom: 0,
          marginBottom: 30,
          backgroundColor: '#FF5733',
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
          }}>
          OK
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStatetoProps = state => {
  return {
    user: state.user.user,
    quizStatus: state.user.quizStatus?.data,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearAssignment: () => dispatch(clearAssignment()),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(App);
