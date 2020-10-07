import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/chair.jpg')}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 30,
    left: 20,
    backgroundColor: '#fc5c65',
  },
  deleteIcon: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 30,
    right: 20,
    backgroundColor: '#4ecdc4',
  },
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
export default ViewImageScreen;
