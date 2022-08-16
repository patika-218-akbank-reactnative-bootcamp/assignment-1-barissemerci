/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import Story from './Story';


 import {
   StyleSheet,
   Image,
   View,
   Text,
   ScrollView,
 } from 'react-native';

 
 
 const Stories = () => {
   return (
   <View>

  
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <Story></Story>

          <Story></Story>
          <Story></Story>
          <Story></Story>
          <Story></Story>
          <Story></Story>
          <Story></Story>
          <Story></Story>
          <Story></Story>
          <Story></Story>
          <Story></Story>
          <Story></Story>





        </ScrollView>
        </View>
     
    
    
   );
 };
 
 const styles = StyleSheet.create({
  container:{
    
    
  }
 
 });
 
 export default Stories;
 