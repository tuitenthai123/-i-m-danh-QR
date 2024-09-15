import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Hoặc sử dụng react-native-vector-icons nếu bạn không dùng Expo

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Logo và tên ứng dụng */}
      <Text style={styles.logo}>HỆ THỐNG ĐIỂM DANH</Text>

      {/* Username input */}
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={24} color="teal" />
        <TextInput 
          style={styles.input}
          placeholder="USERNAME"
          placeholderTextColor="teal"
        />
      </View>

      {/* Password input */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={24} color="teal" />
        <TextInput 
          style={styles.input}
          placeholder="PASSWORD"
          placeholderTextColor="teal"
          secureTextEntry
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} activeOpacity={0.6}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      {/* Forgot Password */}
      <TouchableOpacity activeOpacity={1}>
        <Text style={styles.forgotPassword}>FORGOT PASSWORD?</Text>
      </TouchableOpacity>

      {/* Sign Up */}
      <TouchableOpacity activeOpacity={1}>
        <Text style={styles.signUp} >
          NO ACCOUNT? <Text style={styles.signUpBold}>SIGN UP</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'teal',
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'teal',
    marginBottom: 20,
    width: '80%',
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    height: 40,
    color: 'teal',
  },
  loginButton: {
    backgroundColor: 'teal',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: 'teal',
    marginTop: 20,
    fontSize: 14,
  },
  signUp: {
    color: 'gray',
    marginTop: 20,
    fontSize: 14,
  },
  signUpBold: {
    color: 'teal',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
