/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';


 import {
   StyleSheet,
   Image,
   View,
   Text
 } from 'react-native';

 
 
 const Story = ({user,isActive}) => {
   return (
    <View style={styles.container}>
       {isActive ? 
          <View style={styles.imageContainer}>
          <Image  style={styles.image} source={{uri: user.profileImage}} />
          </View> :
           <View style={styles.imageContainerNotActive}>
           <Image  style={styles.image} source={{uri: user.profileImage}} />
           </View>

       }

       
        <Text style={styles.userName}>{user.username}</Text>
    </View>
    
     
    
    
   );
 };
 
 const styles = StyleSheet.create({
    container:{
        width:110,
        height:125,
        alignItems:'center'
    },
    image:{
        width:80,
      height:80,
      borderRadius:40,
      borderColor:'white',
      borderWidth:4
    },
    imageContainer:{
        alignItems:'center',
        justifyContent:'center',
        width:87, 
        height:87,
        backgroundColor:'orange',
        borderRadius:87/2,
        marginTop:10,
    },imageContainerNotActive:{
      alignItems:'center',
      justifyContent:'center',
      width:87,
      height:87,
      borderRadius:87/2,
      marginTop:10,
  },
    userName:{
      fontSize:16,
      color:'black'
    }
  
 
 });
 
 export default Story;
 