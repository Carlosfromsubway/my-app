import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './screens/Home';
import {getFirestore} from "firebase/firestore";
import React from 'react';

const Stack = createNativeStackNavigator();
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgGnFi0v_YJpOrJtc7AXQZgDSUMSqUcQ8",
  authDomain: "mdia-vid-1.firebaseapp.com",
  projectId: "mdia-vid-1",
  storageBucket: "mdia-vid-1.appspot.com",
  messagingSenderId: "1004142730931",
  appId: "1:1004142730931:web:4cdf4c8d0bd65ab8e75ac6",
  measurementId: "G-KPQ0JHVC8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default function App() {
  return (
 <NavigationContainer>


<Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen}/>
</Stack.Navigator>

 </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
