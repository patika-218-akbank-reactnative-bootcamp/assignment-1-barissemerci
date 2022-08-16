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
        <Image style={styles.instagramText} source={{uri: 'https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2020/12/instagram-new.png?resize=1100%2C750&ssl=1'}} />
       <View style={styles.icons}>
        <Icon style={styles.icon} size={30} name='diff-added'/>
        <Icon style={styles.icon} size={30} name='heart'/>
        <IconSend style={styles.icon} size={30} name='send'/>
       </View>
      </View>
    
    
    
   );

 };
 
 const styles = StyleSheet.create({
  
  instagramText:{
    width:170,
    height:80,
    marginTop:5
  },
  icon:{
      color:'black',
      marginRight:20

  },
  icons:{
    flexDirection:'row',
    position:'absolute',
    right:10
   
  },
  header:{
    flexDirection:'row',
    alignItems:'center',

  }
 
 });
 
 export default Header;
 