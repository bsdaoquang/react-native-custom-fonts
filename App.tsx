import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>How to add custom font to</Text>
      <Text style={[styles.text, styles.title]}>React Native</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  text: {
    fontSize: 24,
    color: '#212121',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
