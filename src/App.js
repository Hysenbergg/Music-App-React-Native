import React, {useState} from 'react';
import {SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';
import musicData from './MusicList.json';
import MusicCard from './components/MusicCard/MusicCard';
import SearchBar from './components/SearchBar/SearchBar';

const MusicApp = () => {
  const [list, setList] = useState(musicData);

  const renderSeperator = () => <Text style={styles.seperator} />;

  const handleSearch = text => {
    const filteredText =  musicData.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });

    setList(filteredText);
  }
  
  const renderMusicItem = ({item}) => <MusicCard song={item} />

  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.title} > Hysenberg's Music House </Text>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={list}
        keyExtractor={item => item.id}
        renderItem={renderMusicItem}
        ItemSeparatorComponent={renderSeperator}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    borderBottomWidth: 1,
    borderColor: '#e0e0e0'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center'
  }
});

export default MusicApp;
