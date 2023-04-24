import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import AddQuiz from '../../components/AddQuiz/AddQuiz';
import DropdownComponent from '../../components/DropDown/DropDown';
import {connect} from 'react-redux';
import {
  uploadAssignment,
  clearAssignmentReducer,
} from '../../redux/Actions/assignment';
import Loader from '../../components/Loader/Loader';

const imageUrl = 'https://cdn-icons-png.flaticon.com/512/9490/9490940.png';
const stephen = '63e124e3216a792d28febda8';
const gertie = '63e0957bebcd410940dee19a';

const Home = props => {
  const [add, setAdd] = useState([]);
  const makeQuiz = () => {
    // useAdd(add => add + 1);
    setAdd([...add, add]);
    props.navigation.navigate('CreateQuiz');
  };

  const sendRequest = () => {
    const obj = {
      createBy: props.user._id,
      assignTo: props.user._id == stephen ? gertie : stephen,
      assignment: props.question,
    };
    console.log(obj);
    props.uploadAssignment(obj);
    // setTimeout(() => {
    props.clearAssignmentReducer();
    // }, 3000);
  };

  if (props.isLoading) {
    return <Loader />;
  }

  console.log(props.question);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Quiz</Text>
      <View style={styles.quizContainer}>
        <View style={styles.questionContainer}>
          <TouchableOpacity onPress={makeQuiz}>
            <Image
              style={{width: 22, height: 22}}
              source={{
                uri: imageUrl,
              }}></Image>
          </TouchableOpacity>
          <Text style={styles.subHeading}>Add Questions</Text>
        </View>
        <View>
          <View style={{height: 200}}>
            <ScrollView>
              {props.question?.length != 0 &&
                props.question.map((data, i) => {
                  return (
                    <AddQuiz
                      key={`Qno ${i + 1}:- `}
                      qno={`Qno ${i + 1}:- `}
                      question={data.question}
                    />
                  );
                })}
            </ScrollView>
          </View>
          {props.question?.length != 0 && <DropdownComponent />}
        </View>
      </View>
      {props.question?.length != 0 && (
        <TouchableOpacity style={styles.btn} onPress={sendRequest}>
          <Text style={{color: 'black', fontSize: 18}}>Send</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const mapStatetoProps = state => {
  return {
    user: state.user.user?.data,
    question: state.assignment.assignment?.data,
    isLoading: state.assignment.uploadAssignment?.isloading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    uploadAssignment: data => dispatch(uploadAssignment(data)),
    clearAssignmentReducer: () => dispatch(clearAssignmentReducer()),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
    padding: 20,

    backgroundColor: 'lightblue',
  },
  quizContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
  },
  subHeading: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    color: 'black',
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    width: 150,
    height: 50,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    marginBottom: 30,
    backgroundColor: 'lightgreen',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
