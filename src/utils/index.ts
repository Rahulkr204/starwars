import {PLAYER_LIST, MATCH_LIST} from '../data/contants';

export const getTotalScore = (playerId: number) => {
  return MATCH_LIST.reduce((acc, curr) => {
    const {player1, player2} = curr;
    if (player1.score > player2.score && player1.id === playerId) {
      acc += 3;
    } else if (player2.score > player1.score && player2.id === playerId) {
      acc += 3;
    } else if (player1.score === player2.score) {
      acc += 1;
    }
    return acc;
  }, 0);
};

export function calculatePoints() {
  const points: any = {};

  MATCH_LIST.forEach(match => {
    const {player1, player2} = match;

    // Calculate points for player 1
    if (player1.score > player2.score) {
      points[player1.id] = (points[player1.id] || 0) + 3;
      points[player2.id] = points[player2.id] || 0;
    } else if (player1.score < player2.score) {
      // Calculate points for player 2
      points[player1.id] = points[player1.id] || 0;
      points[player2.id] = (points[player2.id] || 0) + 3;
    } else {
      // It's a draw
      points[player1.id] = (points[player1.id] || 0) + 1;
      points[player2.id] = (points[player2.id] || 0) + 1;
    }
  });

  return points;
}

export function findMatchWinner(matchItem: Match, currentPlayer: number) {
  const {player1, player2} = matchItem;
  let winner: any = {};

  if (player1.score > player2.score) {
    winner = player1;
  } else if (player2.score > player1.score) {
    winner = player2;
  } else if (player1.score === player2.score) {
    winner = {};
  }

  if (Object.keys(winner).length === 0) {
    return null;
  } else if (winner?.id === currentPlayer) {
    return true;
  } else {
    return false;
  }
}

export const getPlayerName = (id: number) =>
  PLAYER_LIST.find(i => i.id === id)?.name;
