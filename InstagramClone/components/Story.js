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
        <Text>bar1ssemerc1</Text>
    </View>
    
     
    
    
   );
 };
 
 const styles = StyleSheet.create({
    container:{
        backgroundColor:'green',
        width:125,
        height:150,
        alignItems:'center'
    },
    image:{
        width:100,
      height:100,
      borderRadius:50,
    
      borderColor:'black',
      borderWidth:4
    },
    imageContainer:{
        alignItems:'center',
        justifyContent:'center',
        width:105,
        height:105,
        marginTop:10,
        borderColor:'orange',
        borderRadius:105/2,
        borderWidth:53
    }
  
 
 });
 
 export default Story;
 