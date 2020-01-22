import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react-lite';

import { state } from '../state';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50
  }
});

export const Counter: React.FC = observer(() => (
  <View style={styles.container}>
    <Text>xxx</Text>
    <Text style={styles.text}>Count: {state.counter}</Text>
    <Text style={styles.text} onPress={state.inc}>+</Text>
    <Text style={styles.text} onPress={state.dec}>-</Text>
  </View>
));
