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

 
 
 const Story = () => {
   return (
    <View style={styles.container}>
       <View style={styles.imageContainer}>
       <Image  style={styles.image} source={{uri: 'https://picsum.photos/100/100'}} />

       </View>
        <Text style={styles.userName}>bar1ssemerc1</Text>
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
    
      borderColor:'black',
      borderWidth:4
    },
    imageContainer:{
        alignItems:'center',
        justifyContent:'center',
        width:80,
        height:80,
        marginTop:10,
        borderColor:'orange',
        borderRadius:80/2,
        borderWidth:44
    },
    userName:{
      fontSize:16,
      color:'black'
    }
  
 
 });
 
 export default Story;
 