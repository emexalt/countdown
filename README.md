# Countdown letters game

This is a very simple "letters game" from the Channel 4 television series *Countdown* on a video conferencing call or online video stream. Given a number of vowels, it returns a row of nine letter tiles, from which words can be made.

In this commit:
+ Answer validation! (word list not included, I use [Dwyl's English Words], specifically the alphanumeric-only version.(https://github.com/dwyl/english-words)
+ A pleasing circular indicator of whether or not one is correct!
+ Any number of vowels <= 9 can be requested before generating the puzzle.
+ The letters in the puzzle will display in a shuffled order, as if chosen one at a time as is done in the television program.
+ The availability of letters follows the Scrabble distribution, rather than the published *Countdown* distribution found [here](http://www.thecountdownpage.com/letters.htm); expect this to change soon.