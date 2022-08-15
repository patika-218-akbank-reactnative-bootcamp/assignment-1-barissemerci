/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import Icon  from "react-native-vector-icons/Octicons";
 import IconSend  from "react-native-vector-icons/Feather";

 import {
   StyleSheet,
   Image,
   View,
 } from 'react-native';

 
 
 const Header = () => {
   return (
    
      <View style={styles.header}>
        <Image style={styles.instagramText} source={{uri: 'https://marka-logo.com/wp-content/uploads/2020/04/Instagram-Logo.png'}} />
       <View style={styles.icons}>
        <Icon style={styles.icon} size={40} name='diff-added'/>
        <Icon style={styles.icon} size={40} name='heart'/>
        <IconSend style={styles.icon} size={40} name='send'/>
       </View>
      </View>
    
    
    
   );

 };
 
 const styles = StyleSheet.create({
  
  instagramText:{
    width:190,
    height:80,
    marginLeft:10,
    marginTop:5
  },
  icon:{
      color:'white',
      marginRight:15

  },
  icons:{
    backgroundColor:'green',
    flexDirection:'row',
    position:'absolute',
    right:10
   
  },
  header:{
    backgroundColor:'red',
    flexDirection:'row',
    alignItems:'center',

  }
 
 });
 
 export default Header;
 