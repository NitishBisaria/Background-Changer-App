import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';


function App():JSX.Element {
  const[randomBackground,setRandomBackground]=useState('#ffffff');

  const generateColor=()=>{
    const hexRange="0123456789ABCDEF"
    let color="#"

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random()*16)]
    }
    setRandomBackground(color);
  }

  return (
    <>
    <StatusBar backgroundColor={randomBackground} />  
   <View style={[styles.container,{backgroundColor:randomBackground}]}>
    <TouchableOpacity onPress={generateColor}>
      <View style={styles.actionBtn}>
      <Text style={styles.actionBtnTxt}>Press Me</Text>
      </View>
    </TouchableOpacity>
   </View>
   </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:'center'
  },

  actionBtn:{
    backgroundColor:'#0A79DF',
    borderRadius:12,
    paddingVertical:10,
    paddingHorizontal:10,
  },

  actionBtnTxt:{
    color:'#ffffff',
    fontSize:24,
    textTransform:'uppercase',
  },
});

export default App;
