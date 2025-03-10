import { winnerCombinations } from '../constants';


export const checkWinner = (boardToCheck) => {
    for (const combination of winnerCombinations) {
      const [a, b, c] = combination;
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a];
      }
    }
    // si no hay ganador
    return null;
};

export const checkEndGame = (boardToCheck) => {
    return boardToCheck.every((square) => square !== null);
  }