import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Images} from '../../data';

const MakeGallery = ({onClose, getUrl}) => {
  const [select, setSelect] = useState('');
  const [url, setUrl] = useState('');

  const handleSelected = (value, url) => {
    getUrl(url);
    setSelect(value);
    setUrl(url);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text style={styles1.text}>Pick Image From Gallery</Text>

      <View style={styles1.container}>
        {Images.map((image, index) => {
          return (
            <ImageComponent
              key={image.name}
              image={image.url}
              title={image.name}
              value={select}
              onPress={handleSelected}
            />
          );
        })}
        {url !== '' && (
          <TouchableOpacity onPress={onClose} style={styles1.btn}>
            <Text style={styles1.okBtn}>OK</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default MakeGallery;

const ImageComponent = ({image, title, onPress, value}) => {
  return (
    <View style={styles1.item}>
      <TouchableOpacity
        onPress={() => onPress(title, image)}
        style={[
          {backgroundColor: 'lightblue'},
          {
            borderWidth: value === title ? 0.8 : 0,
          },
        ]}>
        <Image style={{width: 100, height: 100}} source={{uri: image}}></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  item: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 100,
    height: 100,
    // flex: 1,
    // marginTop: 20,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItem: 'center',
  },
  btn: {
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
  },
  okBtn: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
