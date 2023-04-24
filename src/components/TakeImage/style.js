import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: 15,
    marginRight: 15,
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
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    marginBottom: 10,
    backgroundColor: 'lightgreen',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '35%',
    height: '100%',
    borderRightWidth: 0.5,
    borderColor: 'black',
    borderRadius: 5,
    // margin: 4,
  },
  textInput: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    width: '90%',
  },
});

export default styles;
