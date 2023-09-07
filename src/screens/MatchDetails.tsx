import {FlatList, SafeAreaView} from 'react-native';
import React from 'react';

// React navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackPramList} from '../App';

// component
import MatchItem from '../components/MatchItem';
import SubHeader from '../components/SubHeader';

// utils
import {MATCH_LIST} from '../data/contants';

type MatchDetailsProps = NativeStackScreenProps<
  RootStackPramList,
  'MatchDetails'
>;

const MatchDetails = ({route}: MatchDetailsProps) => {
  const {playerId} = route.params;
  const filterList = MATCH_LIST.filter(
    i => i.player1.id === playerId || i.player2.id === playerId, // Use id only here
  ).reverse();

  return (
    <SafeAreaView style={{flex: 1}}>
      <SubHeader text="Matches" />
      <FlatList
        data={filterList}
        keyExtractor={item => item.match}
        renderItem={({item}) => (
          <MatchItem match={item} currentPlayer={playerId} />
        )}
      />
    </SafeAreaView>
  );
};

export default MatchDetails;
