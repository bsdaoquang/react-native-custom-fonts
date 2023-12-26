import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>How to add custom font to</Text>
      <Text style={[styles.text, styles.title]}>React Native</Text>
      <Text style={[styles.text, {fontSize: 18, textAlign: 'justify'}]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus amet
        nobis consectetur provident. Deleniti corrupti quisquam repudiandae hic,
        optio rerum est atque odio delectus qui voluptatem quas vero iste!
        Nesciunt?
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#212121',
    padding: 20,
  },

  text: {
    fontSize: 34,
    color: 'white',
    fontFamily: 'Carattere-Regular',
  },
  title: {
    fontSize: 42,
    fontFamily: 'RubikDoodleShadow-Regular',
  },
});
