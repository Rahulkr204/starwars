import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';

// React navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackPramList} from '../App';

// component
import ProductItem from '../components/ProductItem';
import Separator from '../components/Separator';
import SubHeader from '../components/SubHeader';

// data
import {PLAYER_LIST} from '../data/contants';

//utils
import {calculatePoints} from '../utils';

type HomeProps = NativeStackScreenProps<RootStackPramList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  const pointsMap = calculatePoints();

  const playersList = PLAYER_LIST.map(i => {
    return {
      ...i,
      score: pointsMap[i.id],
    };
  }).sort((a, b) => b.score - a.score);

  return (
    <View style={styles.container}>
      <SubHeader text="Points Table" />
      <View style={styles.playerList}>
        <FlatList
          data={playersList}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={Separator}
          renderItem={({item}) => (
            <Pressable
              onPress={() => {
                navigation.navigate('MatchDetails', {
                  playerId: item.id,
                });
              }}>
              <ProductItem player={item} />
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  playerList: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    marginLeft: 16,
  },
});

export default Home;
