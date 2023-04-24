import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';

const Notification = ({assignmentStatus, quizCreator, navigation}) => {
  const moveTakeQuizScreen = () => {
    navigation.navigate('TakeQuiz');
  };
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        disabled={assignmentStatus == 'waiting' ? true : false}
        onPress={moveTakeQuizScreen}
        style={{
          height: 70,
          backgroundColor: 'lightgreen',
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            padding: 10,
            textAlign: 'center',
          }}>
          {assignmentStatus == 'pending'
            ? `${quizCreator} assigned a quiz to you`
            : 'No quiz for you'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStatetoProps = state => {
  return {
    user: state.user.user,
    assignmentStatus: state.user.assignment?.data?.status,
    quizCreator: state.user.assignment?.data?.quizCreator,
  };
};

export default connect(mapStatetoProps, null)(Notification);
