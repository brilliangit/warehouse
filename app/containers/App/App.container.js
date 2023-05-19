// @flow
import * as React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { version, name } from '../../../package.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 12
  },
  version: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 600
  }
});

/**
 * Root Component
 * @returns {React.Node} App component
 */
const App = (): React.Node => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Welcome to {name.toUpperCase()}</Text>
    <Text style={styles.version}>v.{version}</Text>
  </SafeAreaView>
);

export default App;
