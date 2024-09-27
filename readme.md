# Per Scholas Lab 316.2 Hangman (Guessing Game)
This assignment focused on utilizing the BOM and manipulating the DOM. 


## Process

I didn't realize how important setTimeOut was when utilizing them with the window objects' methods. Since some of these methods work synchronously, they block the rest of the code from executing. I noticed this when parts of my code took time to execute but were blocked immediately, even though they happened before the method itself.  

I made it so if you guess the entire word and its wrong, it will show up on the DOM that the whole word is wrong, instead of picking out which letters were wrong from the word. Since the user can hit multiple letters or the whole alphabet if they wanted from one 'word' alone.

I kept in mind, to use past implementations of code we've done in class in this assignment as well. Regarding the BOM, I used prompt, alert, and location.reload for interacting with the user. 
