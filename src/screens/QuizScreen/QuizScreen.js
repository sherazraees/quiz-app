import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import Loader from '../../components/Loader/Loader';
import {setScore} from '../../redux/Actions/user';

function QuizScreen({id, assignments, navigation, setScore}) {
  const [checkValue, setValue] = useState('');
  // const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [obj, setObj] = useState({});
  const [isLoading, setLoading] = useState(false);

  console.log(assignments, 'Asign'.toLowerCase());

  const nextQuestion = () => {
    if (index == assignments.length - 1) {
      setLoading(true);
      if (
        assignments[index].answer.toLowerCase() === checkValue.toLowerCase()
      ) {
        obj[checkValue] = 1;
      } else {
        obj[checkValue] = 0;
      }
      setTimeout(() => {
        let count = 0;
        for (let key in obj) {
          if (obj[key] == 1) {
            count++;
            console.log(obj[key], 'oooo');
          }
        }
        setScore({id, score: count});
        navigation.navigate('Score', {
          score: count,
          totalScore: assignments.length,
        });
        setLoading(false);
      }, 2300);
      return;
    }
    setIndex(index => index + 1);
    if (assignments[index].answer.toLowerCase() === checkValue.toLowerCase()) {
      obj[checkValue] = 1;
    } else {
      obj[checkValue] = 0;
    }
  };

  const previousQuestion = () => {
    if (index == 0) return;

    setIndex(index => index - 1);
  };
  console.log(obj, 'Answer Object');

  if (isLoading) return <Loader />;

  return (
    <View style={{flex: 1, alignItem: 'center'}}>
      {assignments != undefined && (
        <ImageSelect
          qno={index + 1}
          assignment={assignments[index]}
          selection={checkValue => setValue(checkValue)}
          answerObj={obj}
        />
      )}

      <TouchableOpacity style={styles.btn1} onPress={nextQuestion}>
        <Text style={{color: 'black', fontSize: 18}}>Next</Text>
      </TouchableOpacity>
      {/* {index != 0 && (
        <TouchableOpacity style={styles.btn} onPress={previousQuestion}>
          <Text style={{color: 'black', fontSize: 18}}>Previous</Text>
        </TouchableOpacity>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 15,
  },
  question: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItem: 'center',
  },
  img: {
    width: 135,
    height: 135,
    marginTop: 20,
  },
  selectImg: {
    backgroundColor: 'lightblue',
  },
  btn: {
    width: 100,
    height: 50,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    left: 0,
    marginBottom: 0,
    // backgroundColor: 'lightblue',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
  },
  btn1: {
    width: 100,
    height: 50,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    right: 0,
    // marginBottom: 10,
    // backgroundColor: 'lightblue',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 25,
  },
});

const ImageComponent = ({obj, image, title, onPress, value}) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => onPress(title)}
        style={[
          styles.img,
          {
            borderWidth: value === title ? 0.8 : 0,
          },
        ]}>
        <Image
          style={{flex: 1}}
          source={{
            uri: image,
          }}></Image>
      </TouchableOpacity>
    </View>
  );
};

const ImageSelect = ({qno, answerObj, assignment, selection}) => {
  const [select, setSelect] = useState('');

  const handleSelected = value => {
    setSelect(value);
    selection(value);
  };

  return (
    <View key={assignment.question}>
      <Text style={styles.heading}>Question {qno}</Text>
      <Text style={styles.question}>{assignment.question}</Text>

      <ImageComponent
        key={assignment.url}
        image={assignment.imageDetails[0].url}
        title={assignment.imageDetails[0].name}
        onPress={handleSelected}
        value={select}
        assignment={assignment}
        obj={answerObj}
      />

      <ImageComponent
        key={assignment.url}
        image={assignment.imageDetails[1].url}
        title={assignment.imageDetails[1].name}
        onPress={handleSelected}
        value={select}
        assignment={assignment}
        obj={answerObj}
      />

      <ImageComponent
        key={assignment.url}
        image={assignment.imageDetails[2].url}
        title={assignment.imageDetails[2].name}
        onPress={handleSelected}
        value={select}
        assignment={assignment}
        obj={answerObj}
      />
    </View>
  );
};

const mapStatetoProps = state => {
  console.log(state.user.user);
  return {
    id: state.user.assignment.data?._id,
    assignments: state.user.assignment.data?.assignment,
    assignmentStatus: state.user.assignment?.data.status,
    quizCreator: state.user.assignment.data?.quizCreator,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setScore: (id, score) => dispatch(setScore(id, score)),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(QuizScreen);
