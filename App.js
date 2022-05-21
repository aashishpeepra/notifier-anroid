import React from "react"
import {View,SafeAreaView,Text} from "react-native";
import {GoogleSignin,GoogleSigninButton} from "@react-native-community/google-signin";

GoogleSignin.configure({
  webClientId:"548620752705-g638kfcn6274kf40g0ce4vm0m4o1f092.apps.googleusercontent.com",
  offlineAccess:true
})

export default function App(){
  async function signin(){
    try{
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo)
    }catch(err){
      console.error(err)
    }
  }
  return (
    <SafeAreaView>
      <View>
        <Text>Hello</Text>
        <GoogleSigninButton
        onPress={signin}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        style={{width:100,height:100}}
        
        />
      </View>
    </SafeAreaView>
  )
}
