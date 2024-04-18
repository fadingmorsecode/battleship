# Battleship
https://fadingmorsecode.github.io/battleship/
# How to Play:
* Begin by clicking on start game button
* Drag ships to your desired location and orientation. Placement is based on the location of the cursor and not the draggable ship itself.
* Start attacking! Missed attacks are white and hits are red. Sunken ships will appear black with a skull and bones.
* The game will end and announce the winner when all ships have been sunk on a playerboard.
# Project Summary:
This is an implementation of the classic strategy game called battleship. Players strategicially attack their opponents in an attempt to sink all of their enemy's ships. 
My version of the game is played against a computer that randomly chooses its ship placements and randomly attacks the player's board. 
# Goals:
- [x] Practice test driven development using jest
- [x] Should have a <code>hit()</code> function that increases the number of ‘hits’ on a ship
- [x] <code>isSunk()</code> should be a function that calculates whether a ship is considered sunk based on its length and the number of hits it has received.
- [x] Gameboards should be able to place ships at specific coordinates by calling the ship factory function
- [x] Gameboards should be able to receive attacks, keep track of missed attacks, and report whether or not all of their ships have been sunk
- [x] Each player object should contain it’s own gameboard.
- [x] Event listeners should step through the game turn by turn
- [x] Make the ‘computer’ players capable of making random plays.
- [x] Create conditions so that the game ends once one player’s ships have all been sunk.
- [x] Implement a system that allows players to place their ships.
# EXTRA CREDIT:
- [x] Drag and Drop via HTML Drag and Drop API
- [ ] Create a 2-player option that lets users take turns by passing the device back and forth
- [ ] Polish the intelligence of the computer player by having it try adjacent slots after getting a ‘hit’
# In Action: 
<img width="1440" alt="Screenshot 2024-04-18 at 2 22 13 PM" src="https://github.com/fadingmorsecode/battleship/assets/106215095/583e062f-d8ac-4ed5-96c4-f0eeb2b32992">
# Reflection:
This project seemed to require a little bit of everything from all that I have learned in the javascript portion of The Odin Project. 
Most recently we learned about test driven development so that was a primary focus in the beginning of the project. 
After tests were written it was necessary to get all of the functions and dom tied together. 
There is an asynchronous nature to the game loop when it comes to ship placement of the player board. 
Navigating that was a bit challenging at first but I quickly got the hang of getting each placement asynchronously. 
I decided to implement the drag and drop functionality because I basically had the asyncronous skeleton for it and just needed to figure out how the API would fit into it. 
I think the only extra credit that would be worth my time at this point is polishing up the intelligence of a player because you're esentially playing in "easy" mode currently.
While I could add the option to start a new game and randomly place player ships, I think it's better to move on in the curriculum as I have gotten the requirements done and even 
threw in an extra credit step. I really enjoyed the project and felt very proud after each breakthrough. I can't wait to learn about responsive design and more accessible design. 
