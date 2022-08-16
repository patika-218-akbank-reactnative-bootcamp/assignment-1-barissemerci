/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';


 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   Image,
   useColorScheme,
   View,
 } from 'react-native';
import Header from './components/Header';
import Stories from './components/Stories';
import Post from './components/Post';
 
 
 const App = () => {
   return (
    <View style={styles.container}>
  
    <Header />
    <ScrollView>
    <Stories></Stories>
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    </ScrollView>
    </View>
   
    
    
   );
 };
 
 const styles = StyleSheet.create({
 container:{
  width:'100%',
  height:'100%'
 }
 });
 
 export default App;
 