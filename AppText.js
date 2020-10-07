import React from 'react';
import {Text, StyleSheet, Platform} from 'react-native';
function AppText({children}) {
  return <Text style={styles.text}>{children}</Text>;
}

//This is daynamic text font family for android and ios
const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    alignItems: 'center',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});
export default AppText;
