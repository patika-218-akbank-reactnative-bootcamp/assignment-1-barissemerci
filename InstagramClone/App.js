/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {ScrollView, StyleSheet, View} from 'react-native';
import Header from './components/Header';
import Stories from './components/Stories';
import Post from './components/Post';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Stories />
        <Post
          user={{
            username: 'bar1ssemerc1',
            profileImage: 'https://picsum.photos/id/789/50/50',
          }}
          date="2 saat önce"
          likes="2.420"
          comments="440"
          imageUri="https://picsum.photos/id/7/450/450"
          content="Birtakım notlar"
        />
        <Post
          user={{
            username: 'vagonustunden',
            profileImage: 'https://picsum.photos/id/85/50/50',
          }}
          date="4 saat önce"
          likes="2.590"
          comments="620"
          imageUri="https://picsum.photos/id/35/450/450"
          content="Kaktüssss"
        />
        <Post
          user={{
            username: 'elitizmmm',
            profileImage: 'https://picsum.photos/id/7/50/50',
          }}
          date="6 saat önce"
          likes="2.980"
          comments="190"
          imageUri="https://picsum.photos/id/48/450/450"
          content="Çalışma keyfi"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
});

export default App;
