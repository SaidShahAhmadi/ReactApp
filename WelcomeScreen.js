import React from 'react';
import {ImageBackground, StyleSheet, View, Text, Image} from 'react-native';
import AppButton from './AppButton';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/logo-red.png')}></Image>
        <Text style={styles.tagLine}>Sale What You Don't Need </Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="login" />
        <AppButton title="register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    padding: 15,
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagLine: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
});

export default WelcomeScreen;
