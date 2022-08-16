/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import IconThreeDots  from "react-native-vector-icons/Entypo";
 import IconSend  from "react-native-vector-icons/Feather";
 import IconHeart  from "react-native-vector-icons/Octicons";
 import IconSave  from "react-native-vector-icons/FontAwesome";

 import {
   StyleSheet,
   Image,
   View,
   Text,
   TextInput
 } from 'react-native';

 
 
 const Post = () => {
   return (
    
    <View style={styles.container}>
        <View style={styles.top}>
        <Image  style={styles.profileImage} source={{uri: 'https://picsum.photos/50/50'}} />
        <Text style={styles.userName}>bar1ssemerc1</Text>
        <IconThreeDots  style={styles.iconThreeDots} size={25} name='dots-three-vertical'/>
        </View>
        <Image style={styles.image} source={{uri: 'https://picsum.photos/450/450'}} />
        <View style={styles.icons}>
            <IconHeart style={styles.icon} size={40} name='heart'/>
            <IconSend style={styles.icon} size={40} name='send'/>
            <IconSave style={styles.iconSave} size={40} name='bookmark-o'/>
        </View>
        <View style={styles.bottom}>
            <Text style={styles.likes}>8.036 beğenme</Text>
          
            <Text style={styles.content}><Text style={styles.usernameBottom}>bar1ssemerc1 </Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Text>
            <Text style={styles.comments}>44 yorumun tümünü gör</Text>
            <View style={styles.commentAndImage}>

             <Image style={styles.profileImageSmall} source={{uri: 'https://picsum.photos/50/50'}}/>   
            <TextInput  placeholder="Yorum ekle..."></TextInput>
            <Text style={styles.share}>Paylaş</Text>

            </View>
            <Text style={styles.time}>2 saat önce</Text>


        </View>
    </View>
    
    
   );

 };
 
 const styles = StyleSheet.create({
  container:{
    marginBottom:5

  },
  top:{
    margin:5,
    flexDirection:'row',
    alignItems:'center',
   
  },
  profileImage:{
      width:50,
      height:50,
      borderRadius:25,
  },
  userName:{
    marginLeft:10,
    color:'black',
    fontWeight:'bold',
    fontSize:18
  },
  iconThreeDots:{
    position:'absolute',
    right:10
  },
  image:{
    width:450,
    height:450,
   
  },
  icons:{
    flexDirection:'row',
  },
  icon:{
    marginTop:7,
    color:'black',
    marginLeft:10
  },
  iconSave:{
    position:'absolute',
    right:10,
    top:7,
    color:'black'
  },
  bottom:{
    margin:7

  },
  likes:{
    fontWeight:'bold',
    fontSize:18,
    color:'black'
  },
  usernameBottom:{
    fontWeight:'bold',
    color:'black',
    fontSize:18
  },
  content:{
    color:'black',fontSize:16
  },
  comments:{
    color:'gray',fontWeight:'bold',fontSize:16
  },
  profileImageSmall:{
    width:35,
    height:35,
    borderRadius:35/2
  },
  commentAndImage:{
    flexDirection:'row',
    alignItems:'center'
  },
  time:{
    color:'gray',
    fontSize:14
  },
  share:{
    position:'absolute',
    right:5,color:'blue'
  }
  
 
 });
 
 export default Post;
 