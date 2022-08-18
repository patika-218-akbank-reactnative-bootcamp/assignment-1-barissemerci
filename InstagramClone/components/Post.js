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

 
 
 const Post = ({user,content,imageUri,date,likes,comments}) => {
   return (
    
    <View style={styles.container}>
        <View style={styles.top}>
        <Image  style={styles.profileImage} source={{uri:user.profileImage}} />
        <Text style={styles.userName}>{user.username}</Text>
        <IconThreeDots  style={styles.iconThreeDots} size={25} name='dots-three-vertical'/>
        </View>
        <Image style={styles.image} source={{uri: imageUri}} />
        <View style={styles.icons}>
            <IconHeart style={styles.icon} size={40} name='heart'/>
            <IconSend style={styles.icon} size={40} name='send'/>
            <IconSave style={styles.iconSave} size={40} name='bookmark-o'/>
        </View>
        <View style={styles.bottom}>
            <Text style={styles.likes}>{likes} beğenme</Text>
          
            <Text style={styles.content}><Text style={styles.usernameBottom}>{user.username} </Text>{content}</Text>
            <Text style={styles.comments}>{comments} yorumun tümünü gör</Text>
            <View style={styles.commentAndImage}>

             <Image style={styles.profileImageSmall} source={{uri:user.profileImage}}/>   
            <TextInput  placeholder="Yorum ekle..."></TextInput>
            <Text style={styles.share}>Paylaş</Text>

            </View>
            <Text style={styles.time}>{date}</Text>


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
 