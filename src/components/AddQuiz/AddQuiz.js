import {Text, View} from 'react-native';
import React from 'react';
const AddQuiz = ({question, qno}) => {
  return (
    <View style={{marginBottom: 20}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: 'black'}}>{`${qno}${question}`}</Text>
      </View>
    </View>
  );
};

export default AddQuiz;
