import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Search = () => {
  return (
    <View>
      <View style={styles.search}>
        <TextInput
          placeholder="Ara..."
          placeholderTextColor={'#696969'}
          style={styles.searchInput}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    margin: 10,
    width: '95%',
    alignSelf:'center',
    borderRadius: 12,
    backgroundColor: '#d5d9de',
  },
  searchInput: {
    padding: 10,
    borderRadius: 10,
  },
});

export default Search;
