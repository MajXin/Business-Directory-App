import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser';
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from 'expo-linking';

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({ redirectUrl: Linking.createURL("/dashboard", { scheme: "myapp" })});

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View>
     <View style={{
      display: 'flex',
      alignItems: 'center',
      marginTop: 100
    }}>
      <Image source={require('./../assets/images/login.png')} 
      style={{
        width:220,
        height:400,
        borderRadius:20,
        borderWidth:6,
        borderColor:'#000'
      }}
      />
      </View>
      <View style={styles.subContainer}>
        <Text style={{
          fontSize: 23,
          fontFamily: 'outfit-bold',
          textAlign: 'center'
        }}>Your Ultimate 
          <Text style={{
            color:Colors.PRIMARY      
          }}> Community Business Directory </Text>App</Text>
        <Text
         style={{
          fontSize:15,
           marginVertical:15,
           color:Colors.GREY
         }}
         >Find your favourite Business near you and add your own Business to the Community</Text>

        <TouchableOpacity style={styles.btn} 
        onPress={onPress}
        >
          <Text style={{
            fontFamily: 'outfit',
            textAlign: 'center',
            color: '#fff'
          }}>Let's Get Started</Text>
          </TouchableOpacity> 
      </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
  subContainer:{
      backgroundColor: '#fff', 
      padding:20,
      marginTop: -20,
  },
  btn:{
    backgroundColor: Colors.PRIMARY,
    padding:16,
    borderRadius:99,
    marginTop:20
  }
})
