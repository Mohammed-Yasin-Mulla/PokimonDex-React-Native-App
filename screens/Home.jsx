import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import FlatButton from '../shared/Button'


export default function Home(props) {
    return (
        <ImageBackground source={require('../assets/BackGround.jpg')} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
      <Text style={styles.text}>Welcome To PokeMon Search</Text>
     <FlatButton text='Press Here to Search'  onPress={props.onPress} />
    </View>
    </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:'10%'
     
    },
    image: {
      flex: 1,
      height: '100%',
      width:'100%'
  
    },
    text:{
    marginBottom:20,
    marginTop: 300,
      fontSize: 20,
      fontFamily:"monospace",
      color:"blue",
      textAlign:'center'
    }
  });
  
