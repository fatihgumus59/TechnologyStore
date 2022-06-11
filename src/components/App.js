import React from 'react';
import {View,Text,SafeAreaView, FlatList,StyleSheet} from 'react-native'
import Card from './Card/Card';

import data from './data.json';

const App =()=>{

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>TEKNOLOGY STORE</Text>
        <View>
          <FlatList data={data}
          numColumns={2}
          renderItem={({item})=> <Card news={item}/>}>

          </FlatList>
        </View>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#fff",
    marginTop:20,
    marginBottom:70,
  },
  title:{
    fontSize:35,
    fontWeight:'bold',
    margin:10,
    color:'purple',

  }
  
})

export default App;