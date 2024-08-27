import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function HeaderPage() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>       
          <Text>Logo</Text>     
          <Text>adress</Text>    
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    display:'flex'
  },
  container: {
    display:"flex",
    backgroundColor: 'gray',
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 20, 
  },
});
