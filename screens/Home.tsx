import React from 'react';
import { View, Text, StyleSheet,SafeAreaView} from 'react-native';
import Header from '../components/Header/Header';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      <Text>Home Screen</Text>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
