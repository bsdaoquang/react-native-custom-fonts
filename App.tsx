import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>How to add custom fonts to</Text>
      <Text style={[styles.text, styles.title]}>React Native</Text>
      <Text style={[styles.text, styles.desc]}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
        ratione beatae reprehenderit nemo explicabo aperiam obcaecati, nisi
        similique deleniti accusantium fugit autem fugiat asperiores est
        repudiandae impedit ad quam. Cum?
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#212121',
  },

  text: {
    fontSize: 20,
    color: 'white',
  },

  desc: {
    fontSize: 14,
    textAlign: 'justify',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
