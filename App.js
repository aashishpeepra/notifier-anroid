// async function signin() {
//   try {
//     await GoogleSignin.hasPlayServices();
//     const userInfo = await GoogleSignin.signIn();
//     console.log(userInfo);
//   } catch (err) {
//     console.error(err);
//   }
// }
/* <SafeAreaView>
  <View>
    <Text>Hello</Text>
    <GoogleSigninButton
      onPress={signin}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      style={{width: 100, height: 100}}
    />
  </View>
</SafeAreaView> */

// GoogleSignin.configure({
//   webClientId:
//     '548620752705-g638kfcn6274kf40g0ce4vm0m4o1f092.apps.googleusercontent.com',
//   offlineAccess: true,
// });

import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import StatsScreen from "./Screens/StatsScreen/StatsScreen"
import HomeScreen from './Screens/HomeScreen/HomeScreen';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function NotificationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarShowLabel: true, tabBarStyle: [{
          backgroundColor: "white",
          position: "absolute",
          bottom: 40,
          marginHorizontal: 20,
          height: 60,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10
          }
        }, null
        ]
      }}>
        <Tab.Screen name={"Home"} component={HomeScreen} options={{
          tabBarIcon: ({ focused }) => {
            <View style={{
              position: "absolute",
              top: "50%"
            }}>
              <FontAwesomeIcon name="home" size={20} color={focused ? "red" : "gray"}></FontAwesomeIcon>
            </View>
          }
        }}></Tab.Screen>
        <Tab.Screen name={"Notification"} component={StatsScreen} options={{
          tabBarIcon: ({ focused }) => {
            <View style={{
              position: "absolute",
              top: "50%"
            }}>
              <FontAwesomeIcon name="bell" size={20} color={focused ? "red" : "gray"}></FontAwesomeIcon>
            </View>
          }
        }}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
