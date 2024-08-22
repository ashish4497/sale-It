import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

const OTPScreen = () => {
  const [otp, setOtp] = useState('');

  const handleVerify = () => {
    // Handle OTP verification logic here
    console.log('Entered OTP:', otp);
  };

  const handleChange = (value: React.SetStateAction<string>) => {
    setOtp(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.inner}>
        <Text style={styles.title}>Enter OTP</Text>
        <Text style={styles.subtitle}>We have sent a 6-digit code to your phone number.</Text>
        <View style={styles.otpContainer}>
          {[...Array(6)].map((_, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              maxLength={1}
              keyboardType="numeric"
              value={otp[index] || ''}
              onChangeText={(text) => {
                const otpArray = otp.split('');
                otpArray[index] = text;
                setOtp(otpArray.join(''));
                // Move to next input automatically
                if (text && index < 5) {
                  const nextInput = index + 1;
                  if (nextInput < 6) {
                    this[`input${nextInput}`].focus();
                  }
                }
              }}
              ref={(input) => (this[`input${index}`] = input)}
            />
          ))}
        </View>
        <Button title="Verify" onPress={handleVerify} />
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
    backgroundColor: 'white',
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 24,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  otpInput: {
    width: 40,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: 8,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default OTPScreen;
