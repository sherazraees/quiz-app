import {
  View,
  TouchableWithoutFeedback,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ImageDetails from '../../components/TakeImage/TakeImage';
import {connect} from 'react-redux';
import {setQuestion} from '../../redux/Actions/assignment';
import {useNavigation, StackActions} from '@react-navigation/native';

const CreateQuiz = props => {
  const navigation = useNavigation();
  const popAction = StackActions.replace('HomeStack');

  const [question, setQuestion] = React.useState('');
  const [answer, setAnswer] = React.useState('');
  const [n1, setN1] = useState('');
  const [img1, setImag1] = useState('');
  const [n2, setN2] = useState('');
  const [img2, setImag2] = useState('');
  const [n3, setN3] = useState('');
  const [img3, setImag3] = useState('');
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const validate = () => {
    if (
      question != '' &&
      answer != '' &&
      n1 != '' &&
      img1 != '' &&
      n2 != '' &&
      img2 != '' &&
      n3 != '' &&
      img3 != ''
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    validate();
  }, [question, answer, n1, n2, n3, img1, img2, img3]);

  const assignQuiz = () => {
    if (answer != n1 && answer != n2 && answer != n3) {
      setError(true);
    } else {
      setError(false);
      const obj = {
        question,
        answer,
        imageDetails: [
          {
            name: n1,
            url: img1,
          },
          {
            name: n2,
            url: img2,
          },
          {
            name: n3,
            url: img3,
          },
        ],
      };
      props.setAssignmentQuestion(obj);
      navigation.dispatch(popAction);
      console.log('Start', obj, 'End');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.heading}>Prepare Quiz</Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
          Please write the quiz question!!!
        </Text>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.flexContainer}>
          <View style={styles.answer}>
            <TextInput
              placeholder="Question"
              onChangeText={text => setQuestion(text)}
              value={question}
              style={{padding: 0}}
            />
          </View>
          <ImageDetails
            setName={s => setN1(s)}
            setImage={url => setImag1(url)}
          />
          <ImageDetails
            setName={s => setN2(s)}
            setImage={url => setImag2(url)}
          />
          <ImageDetails
            setName={s => setN3(s)}
            setImage={url => setImag3(url)}
          />
          {error && (
            <Text style={{fontSize: 14, color: 'red'}}>
              Note:- Answer should exits in the above items name.
            </Text>
          )}
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>Answer</Text>
          <View style={styles.answer}>
            <TextInput
              placeholder="Answer"
              onChangeText={text => setAnswer(text)}
              style={{padding: 0}}
            />
          </View>
        </ScrollView>
        {show && (
          <TouchableOpacity style={styles.btn} onPress={assignQuiz}>
            <Text style={{color: 'black', fontSize: 18}}>Done</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
  },
  flexContainer: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  heading: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  imageInfo: {
    marginBottom: 20,
    width: '100%',
    height: 100,
    flexDirection: 'row',
    bordertWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 1,
  },
  btn: {
    width: 100,
    height: 40,
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: 'lightgreen',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  answer: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    width: '100%',
    marginBottom: 20,
  },
});

const mapDispatchToProps = dispatch => {
  return {
    setAssignmentQuestion: data => dispatch(setQuestion(data)),
  };
};

export default connect(null, mapDispatchToProps)(CreateQuiz);
