import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';

const App = () => (
  <View style={[styles.container]}>
    <ActivityIndicator size="large" color="#00ff00" />
    <Text style={{marginTop: 20, color: '#00ff00', fontSize: 18}}>
      Loading...
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
