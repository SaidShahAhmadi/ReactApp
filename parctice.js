import React from 'react';
import {
  Text,
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const App = () => {
  const handlePress = () => {
    alert('pressed ok');
  };

  return (
    <View style={style.container}>
      <ImageBackground
        style={style.bgImage}
        source={{
          uri: 'http://lorempixel.com/400/200/sports/1/',
        }}></ImageBackground>

      <Image
        blurRadius={0}
        fadeDuration={3000}
        style={style.image}
        source={require('./assets/index.png')}></Image>

      <Button title="Press me" color="#000" onPress={handlePress}></Button>

      <Text style={style.textcolor}>Hello, World</Text>
      <ActivityIndicator size="large" />

      <Text>this is second text </Text>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:"center",
    alignItems: 'center',
    backgroundColor: 'orange',

    color: 'red',
  },
  textcolor: {
    color: 'white',
    fontSize: 33,
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 13,
  },
  bgImage: {
    width: 500,
    height: 300,
    resizeMode: 'cover',
  },
});

/////// second day working
const createThreeButtonAlert = () =>
  Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {onDismiss: false},
  );

const newButtonAlert = () =>
  Alert.alert('mybtn title', 'mybtn Mssg', [
    {
      text: 'Ok',
      onPress: () => console.log('my btn message show of Ok btn'),
    },

    {
      text: 'Cancel',
      onPress: () => console.log('my btn message of canel btn'),
      style: 'cancel',
    },

    {
      text: 'Aske me later',
      onPress: () => console.log('my btn message of Aske me later'),
    },
  ]);

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Button title={'2-Button Alert'} onPress={createTwoButtonAlert} /> */}

      <Button title={'3-Button Alert'} onPress={createThreeButtonAlert} />
      <Button title={'myButton'} onPress={newButtonAlert} />
    </View>
  );
};

////////////  day 3

import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';

import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';

const App = () => {
  // console.log(Dimensions.get('screen'));
  const {landscape} = useDeviceOrientation();

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'orange',
          width: '100%',
          height: landscape ? '100%' : '30%',
          // height: '20%',
        }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,

    // justifyContent: 'space-around',
    // alignItems: 'center',
  },
});

export default App;

//////// flex

import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';

import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  box1: {
    flex: 3,
    backgroundColor: 'tomato',
  },
  box2: {
    flex: 1,
    backgroundColor: 'orange',
  },
  box3: {
    flex: 3,
    backgroundColor: 'gold',
  },
});

export default App;

/// today

import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';

import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  },
  box1: {
    // flex: 1,
    width: 100,
    height: 300,
    backgroundColor: 'tomato',
  },
  box2: {
    // flex: 1,
    width: 100,
    height: 200,
    backgroundColor: 'orange',
  },
  box3: {
    // flex: 1,
    width: 100,
    height: 100,
    backgroundColor: 'gold',
  },
});

export default App;

/// Welcome screen
// There are two files  ==> welcomescreen.js
import React from 'react';
import {ImageBackground, StyleSheet, View, Text, Image} from 'react-native';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('./assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('./assets/logo-red.png')}></Image>
        <Text style={{fontWeight: 'bold'}}>Sell What You Don't Need </Text>
      </View>

      <View style={styles.loginButton}>{/* <Text>Login</Text> */}</View>
      <View style={styles.registerButton}>{/* <Text>Register</Text> */}</View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 60,
    backgroundColor: '#fc5c65',
  },
  registerButton: {
    width: '100%',
    height: 60,
    backgroundColor: '#4ecdc4',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
});

export default WelcomeScreen;

// appjs
import {View} from 'react-native';
import WelcomeScreen from './WelcomeScreen';

// welcome screen
const App = () => {
  return <WelcomeScreen />;
};

export default App;
