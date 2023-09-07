import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {findMatchWinner, getPlayerName} from '../utils';

const MatchItem = ({match, currentPlayer}: any) => {
  const {player1, player2} = match;

  const isCurrentUserWinning = findMatchWinner(match, currentPlayer);
  return (
    <View
      style={[
        styles.matchItem,
        isCurrentUserWinning
          ? styles.winner
          : isCurrentUserWinning === null
          ? styles.draw
          : styles.loser,
      ]}>
      <Text style={styles.playerName1}>{getPlayerName(player1.id)}</Text>
      <Text style={styles.scoreCard}>
        {`${player1.score} - ${player2.score}`}
      </Text>
      <Text style={styles.playerName2}>{getPlayerName(player2.id)}</Text>
    </View>
  );
};

export default MatchItem;

const styles = StyleSheet.create({
  matchItem: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  loser: {
    backgroundColor: '#DA2B2B',
  },
  winner: {
    backgroundColor: '#2EB96A',
  },
  draw: {
    backgroundColor: '#FFFFFF',
  },
  playerName1: {
    fontSize: 16,
    fontWeight: '400',
    width: '40%',
    textAlign: 'left',
    color: '#2D2E2D',
  },
  playerName2: {
    fontSize: 16,
    fontWeight: '400',
    width: '40%',
    textAlign: 'right',
    color: '#2D2E2D',
  },
  scoreCard: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 16,
    width: '20%',
    color: '#2D2E2D',
  },
});
