import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import Gallery from '../../screens/MakeGallery/MakeGallery';

const ImageDetails = ({setName, setImage}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, onChangeText] = React.useState('');
  const [url, setUrl] = React.useState('');

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setImage(url);
    setModalVisible(false);
  };

  const getUrl = url => {
    setUrl(url);
  };
  return (
    <View elevation={2} style={styles.imageInfo}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <Gallery onClose={closeModal} getUrl={getUrl} />
      </Modal>
      <TouchableOpacity onPress={openModal} style={styles.img}>
        <Image
          style={{width: 40, height: 40}}
          source={{
            uri:
              url != ''
                ? url
                : 'https://cdn-icons-png.flaticon.com/512/9337/9337668.png',
          }}></Image>
      </TouchableOpacity>
      <View style={{width: '65%', height: '100%', margin: 10}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Item Name</Text>
        <View style={styles.textInput}>
          <TextInput
            placeholder="Enter the name of item"
            maxLength={40}
            onChangeText={text => {
              setName(text);
              onChangeText(text);
            }}
            value={value}
            style={{padding: 10, paddingLeft: 0}}
          />
        </View>
      </View>
    </View>
  );
};

export default ImageDetails;
