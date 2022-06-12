import React from 'react';
import {View,Text,SafeAreaView, FlatList,StyleSheet} from 'react-native';
import Card from './Card/Card';
import Search from './Search/Search';

import data from './data.json';

const App =()=>{
  const products = ({ item }) => <Card products={item} />
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>TECHNOLOGY STORE</Text>
        <View>
          <FlatList data={data}
          numColumns={2}
          keyExtractor={(item) => item.idd.toString()}
          ListHeaderComponent={() => (<Search />)}
          renderItem={products}>

          </FlatList>
        </View>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container:{
    flex:1,
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
