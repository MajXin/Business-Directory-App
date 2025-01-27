import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';

export default function Intro({ business }) {

    const router=useRouter();

  return (
    <View>
        <View style={{
            position:'absolute',
            zIndex:10,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            width:'100%',
            padding:12,
            marginTop:20
        }}>
            <TouchableOpacity onPress={()=>router.back()}>
            <Ionicons name="arrow-back-circle" size={40} color={Colors.PRIMARY} />
            </TouchableOpacity>
       
        <Ionicons name="heart-outline" size={40} color={Colors.PRIMARY} />
        </View>
      <Image
        source={{ uri: business?.imageUrl }}
        style={{
          width: '100%',
          height: 340,
        }}
      />

      <View style={{
        padding:18,
        marginTop:-18,
        backgroundColor:'#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
      }}>
        <Text style={{
            fontSize:20,
            fontFamily:'outfit-bold'
        }}>{business.name}</Text>

        <Text style={{
            fontFamily:'outfit',
            fontSize:15
        }}>{business.address}</Text>
      </View>
    </View>
  );
}
