import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './SearchBar.style';

const SearchBar = props => {
  return (
    <View  style={styles.container}>
      <View style={styles.inner_container} >
        <TextInput style={styles.searchbar} placeholder="Ara.." onChangeText={props.onSearch} />
      </View>
    </View>
  );
};
export default SearchBar;
