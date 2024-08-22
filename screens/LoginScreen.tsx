import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import auth from '@react-native-firebase/auth';

const PhoneLoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirm, setConfirm] = useState<any>(null); 
  

  console.log(confirm, "confirm");

  async function signInWithPhoneNumber(phoneNumber: any) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  const handleLogin = () => {
    if (phoneNumber.trim()) {
      signInWithPhoneNumber(phoneNumber);
    } else {
      console.log("Please enter a valid phone number.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.inner}>
        <Text style={styles.title}>Login with Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          maxLength={15} // Adjust based on your needs
        />
        <Button title="Submit" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  inner: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff', // Add background color for better contrast
    elevation: 4, // Add elevation for Android shadow
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
    shadowOpacity: 0.1, // iOS shadow opacity
    shadowRadius: 4, // iOS shadow radius
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 16,
    fontSize: 16,
  },
});

export default PhoneLoginScreen;
