import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import { StyleSheet } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import RecipiesDetailScreen from "../screens/RecipiesDetails";
import SigninScreen from "../screens/SigninScreen";
import LoginScreen from "../screens/LoginScreen";
import ForgotpasswordScreen from "../screens/ForgotpasswordScreen";
import ChatbotScreen from "../screens/ChatbotScreen";
import UpdateProfileScreen from "../screens/UpdateProfileScreen";





const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="welcome"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="home" component={HomeScreen}></Stack.Screen>
          <Stack.Screen name="welcome" component={WelcomeScreen}></Stack.Screen>
          <Stack.Screen name="login" component={LoginScreen}></Stack.Screen>
          <Stack.Screen name="signin" component={SigninScreen}></Stack.Screen>
          <Stack.Screen
            name="forgotpassword"
            component={ForgotpasswordScreen}
          ></Stack.Screen>
          <Stack.Screen
            name="recipedetail"
            component={RecipiesDetailScreen}
          ></Stack.Screen>
          <Stack.Screen name="chatbot" component={ChatbotScreen}></Stack.Screen>
          <Stack.Screen name="profile" component={UpdateProfileScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default AppNavigator;

const styles = StyleSheet.create({});