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
          <Story 
          user={{
          username:"bar1ssemerc1",
          profileImage:"https://picsum.photos/id/789/50/50"}}
          isActive={false}
          ></Story>
          <Story 
          user={{
          username:"vagonustunden",
          profileImage:"https://picsum.photos/id/85/80/80"}}
          isActive={true}
          ></Story>
          <Story 
          user={{
          username:"elitizmmm",
          profileImage:"https://picsum.photos/id/7/80/80"}}
          isActive={true}
          ></Story>
          <Story 
          user={{
          username:"hayrettin",
          profileImage:"https://picsum.photos/id/201/50/50"}}
          isActive={true}
          ></Story>
          <Story 
          user={{
          username:"kisuykusu",
          profileImage:"https://picsum.photos/id/100/50/50"}}
          isActive={false}
          ></Story>
          <Story 
          user={{
          username:"helloworld",
          profileImage:"https://picsum.photos/id/98/50/50"}}
          own={true}
          isActive={false}
          ></Story>
          





        </ScrollView>
        </View>
     
    
    
   );
 };
 
 const styles = StyleSheet.create({
  container:{
    
    
  }
 
 });
 
 export default Stories;
 