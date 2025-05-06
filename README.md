# Gagagochi

Imitation of Tamagochi in JS

In this game, you can take care of your lovely pet! Feed, play, bathe and sleep all in one, amazing.

You can try it out here: https://rieskamies.github.io/Gagagochi/

___

# Update log

## 0.01

- Added file/folder structure

___

## 0.02

- Added base HTML and CSS

___

## 0.12

- Added idle animation for the creature
- Added JS for actions and functions
- Added hunger logic (complete but needs some tweaking)
- Added a functional feeding button to feed your friend
- Made the site more flexible

___

## 0.22

#### Majorish things

- Added functions for all the stats to decrease
- Updated feeding logic:
    -  Feeding now gives a little bit of energy
- Implemented a pressable "Play" button
- Added a minigame for "Play"
    -  Playing with the creature adds fun and decreases energy between 2 and 15

#### Minor things

- Made some sprites for action buttons

___

## 0.23
- Added an animation for bathing

___

## 0.33

#### Majorish things

- Added a penalty if you fail the minigame
- Added eating animation
- Added an animation for resting
    - Resting is now functional and restores energy overtime while sleeping
- Bathing is now implemented and functional
    - Bathing restores cleanliness overtime while bathing

#### Minor things

- Minigame's "box" now appears on a random location based on viewport height and width
- Cleaned up functions.js a bit
- Fixed some bugs

___

## 0.43

### Majorish things

- Added a start screen where you get to name your creature
    - Name must not be empty and the player cannot continue if it is
    - Player cannot manually go to the game if name is empty
- Made the site more responsive
- Added a reset button to start your run over
- The game now ends when hunger and energy reaches 0 and you are sent back to the naming screen
- There's now a 1 in 15 chance for your creature to get sick!

### Minor things
- Added a label for your pet's name
- Hunger, energy etc. are now initialized if naming was successful
- Hunger, energy etc. are now saved to localStorage
- Stats cannot go over 100 anymore
- Creature will get "sick" status if cleanliness under 10
    - Therefore a button to cure has been added
    - Added a custom cursor for curing
- Buttons are now unclickable/disabled when stats are over certain thresholds
- Limited the maximum lenght of the creature's name