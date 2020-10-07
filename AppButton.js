import React from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import colors from './colors';

function AppButton({title, color = 'primary'}) {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    color: '#fff',
    textTransform: 'capitalize',
    fontSize: 19,
    fontWeight: 'bold',
  },
});

export default AppButton;
