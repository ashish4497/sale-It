import React from 'react';
import { View, Text, StyleSheet ,SafeAreaView} from 'react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      <Text>Profile Screen</Text>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'red',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
