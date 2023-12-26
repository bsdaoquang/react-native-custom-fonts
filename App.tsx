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
    fontSize: 30,
    color: 'white',
    fontFamily: 'Carattere-Regular',
  },

  desc: {
    fontSize: 18,
    textAlign: 'justify',
    fontFamily: 'Nunito-Light',
  },

  title: {
    fontSize: 42,
    // fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'RubikDoodleShadow-Regular',
  },
});
