import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import { Colors } from './../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native';

export default function Header() {
  const {user}=useUser();

  return (
    <View style={{
       padding: 20,
       paddingTop: 40,
       backgroundColor:Colors.PRIMARY,
       borderBottomLeftRadius: 20,
       borderBottomRightRadius:20
    }}>
      <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10
         }}>
         <Image source={{uri:user?.imageUrl}}
            style={{
                height: 45,
                width:45,
                borderRadius:99,
            }}
         />
         <View>
          <Text style={{
            color: '#fff'
          }}>Welcome</Text>
          <Text style={{
            fontSize:19,
            fontFamily: 'outfit-medium',
            color: '#fff'
          }}>{user?.fullName}</Text>
         </View>
      </View>
      {/*Search Bar*/ }
      <View style={{
         display: 'flex',
         flexDirection: 'row',
         alignItems: 'center',
         gap: 10,
         backgroundColor: '#fff',
         padding: 10,
         marginVertical: 10,
         marginTop: 15,
         borderRadius: 7
      }}>
        <Ionicons name='search'size={24} color={Colors.PRIMARY}/>
        <TextInput placeholder='Search...'
        style={{
          fontFamily: 'outfit',
          fontSize: 16
        }}
        />
      </View>
    </View>
  )
}