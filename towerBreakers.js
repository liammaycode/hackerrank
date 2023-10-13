// This function has two parameters: integer n (number of towers), and integer m (height of towers).
// This function returns a 1 or 2 (to represent the winner of a two player game) in linear (O(1)) time.
// In this game, two players take turns reducing the height of the towers until no moves are left (all towers have a height of 1) and the player that made the last valid move wins.
// Players can only reduce the towers to a height such that the new height divides evenly into the old height.
// Assuming players always take the most optimal move, the towers will always be reduced to a height of 1, making the number of towers the only meaningful parameter.
// If the number of towers is odd, player one will make the last valid reduction and win, with the exception of an edge case where all towers start at height 1. In that case player one cannot make a move and loses.

function towerBreakers(n, m) {
    if (m == 1) { return 2; }
    return (n % 2 == 0) ? 2 : 1 ;
}