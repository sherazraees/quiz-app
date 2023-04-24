import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import {clearUserReducer, quizStatus} from '../../redux/Actions/user';
import {connect} from 'react-redux';
import {useNavigation, StackActions} from '@react-navigation/native';
import Loader from '../../components/Loader/Loader';

const UserLogOut = ({user, clearUserReducer, quizStatus}) => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const popAction = StackActions.replace('Login');

  const doUserLogOut = function () {
    setLoading(true);
    setTimeout(() => {
      navigation.dispatch(popAction);
      setLoading(false);
    }, 3000);
    clearUserReducer();
  };

  // console.log(quizStatus, 'QUIZ');
  if (loading) return <Loader />;

  return (
    <View style={Styles.login_wrapper}>
      <Header score={user?.data?.score} quizStatus={quizStatus} />
      <View style={Styles.form}>
        <TouchableOpacity onPress={() => doUserLogOut()}>
          <View style={Styles.button}>
            <Text style={Styles.button_label}>{'Logout'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

function Header({score, quizStatus}) {
  console.log(quizStatus, 'Quizzz');

  return (
    <>
      <StatusBar />
      <SafeAreaView style={Styles.login_container}>
        <View style={Styles.login_header}>
          <Image
            style={Styles.login_header_logo}
            source={require('../../assets/logo.png')}
          />
          <Text style={Styles.login_header_text_bold}>
            {'React Native on QuizApp'}
          </Text>
          <Text style={Styles.login_header_text}>Your Score: {score}</Text>
          {quizStatus != undefined && quizStatus.status == 'pending' && (
            <View
              style={{padding: 10, backgroundColor: 'pink', flexWrap: 'wrap'}}>
              <Text style={Styles.login_header_text}>
                {quizStatus.userName} quiz is pending
              </Text>
            </View>
          )}
          <></>
          {quizStatus != undefined && quizStatus.status == 'done' && (
            <View
              style={{
                padding: 10,
                backgroundColor: 'pink',
                flexWrap: 'wrap',
              }}>
              <Text style={Styles.login_header_text}>
                {quizStatus.userName} score is {quizStatus.score}
              </Text>
            </View>
          )}
        </View>
      </SafeAreaView>
    </>
  );
}

const Styles = StyleSheet.create({
  login_container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  login_header: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 50,
    backgroundColor: 'white',
  },
  login_header_logo: {
    width: 220,
    height: 100,
    resizeMode: 'contain',
  },
  login_header_text: {
    margin: 15,
    color: 'black',
    fontSize: 24,
  },
  login_header_text_bold: {
    color: 'black',
    fontWeight: 'bold',
  },
  login_wrapper: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 40,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    marginTop: -10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    maxWidth: 280,
  },
  form_input: {
    height: 44,
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#EDF0F7',
    borderRadius: 50,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    backgroundColor: '#0065A4',
    borderRadius: 50,
  },
  button_label: {
    color: '#fff',
    fontSize: 15,
  },
  login_social: {
    width: '100%',
    maxWidth: 280,
    marginTop: 20,
  },
  login_social_separator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  login_social_separator_line: {
    flex: 1,
    width: '100%',
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  login_social_separator_text: {
    marginHorizontal: 10,
    color: '#808080',
    fontSize: 16,
  },
  login_social_buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  login_social_button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    marginHorizontal: 12,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    borderRadius: 60,
  },
  login_social_icon: {
    width: 38,
    height: 38,
    resizeMode: 'contain',
  },
  login_social_facebook: {
    backgroundColor: '#4267B2',
    borderColor: '#4267B2',
  },
  login_footer_text: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#808080',
    fontSize: 15,
  },
  login_footer_link: {
    color: '#208AEC',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

const mapStatetoProps = state => {
  return {
    user: state.user.user,
    quizStatus: state.user.quizStatus?.data,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearUserReducer: () => dispatch(clearUserReducer()),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(UserLogOut);
