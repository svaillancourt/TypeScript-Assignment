/*********************************
 * 
 *  Imports
 * 
 *********************************/
//No imports neccesary 

/*********************************
 *  Declare global variables
 * 
 *********************************/

//first consts
// thats better -step. Groovy.
const maxChances  : number = 6;
const gameController: any = { //  no, we're defining it here 
    form: document.querySelector('form'),
    input: document.querySelector('[name="guess"]'),
    word: document.querySelector('.word'),
    chances: document.querySelector('.chances'),
    previousGuesses: document.querySelector('.previous-guesses')
}
//second lets
let _this: any;
//third vars (but we don't like vars and avoid them if we can)

/*********************************
 * 
 *  Declare global classes (functions)
 * 
 *********************************/
//Hangman class has properties and methods within its own scope

/*
class Hangman()
{
  constructor()
  {
    this.previousGuesses : Array<string> = [];
  }

  guessLetter : 
}
*/

function Hangman() { // Bruh Clayton's flow is sick (COVID-95)  LOL Lol probably Clayton's Cuz this way of doing it is circa 1995 ahahahahahahahah 95 lol his hair style is form the 80's bro. you see that flow
    //Properties
    this.previousGuesses = [];
    this.chances = maxChances;
    this.displayString = '';
    this.wordList = [
        'programming',
        'test',
        'Clayton',
        'TECHCareers'
    ];
    this.word = '';

    //Methods
    this.run = function () {
        _this = this;

        //We can add the event listener to the form instead fo the button because the button is type="submit"
        gameController.form.addEventListener('submit', this.guessLetter);

        _this.setup();

    };
    // Seriously tho, this guessLetter function is brutal
    // this was aarons brain child - you never EVER wanna do fkin for (if (if () if() else())) :*(
      // This is going to be a bitch to do in TS...if it works, we dont have to rewrite it.
      // But it's fkin bad. we only really have to do this for every variable and function
    this.guessLetter = function ( event ) : void  {   //<-- fuck. lol
        event.preventDefault();
        //Check if the guessed letter is in the word
        if ( _this.word.includes(gameController.input.value )) {
            //Update the display string (showing the letters)
            for ( let i : number = 0; i < _this.word.length; i++ ) {
                //loop through each letter in our word, one-by-one
                let currentChar = _this.word.substr( i, 1 );
                //If the current character matches what we have guessed
                if ( currentChar === gameController.input.value ) {

                    _this.displayString = //Slice the pieces that we need using .slice() https://www.w3schools.com/jsref/jsref_slice_array.asp
                        _this.displayString.slice(0, i) + //is grabbing all the underscores BEFORE our matched character
                        currentChar + //Concatenating in our current character which matches with our word.
                        _this.displayString.slice(i + 1, _this.displayString.length);//is grabbing all the underscores AFTER our matched character

                    //We still have to output our code to the browser
                    gameController.word.textContent = _this.displayString;
                }
            }

            //has the word been completely solved?
            if (!gameController.word.textContent.includes( '_' )) {
                //Win!
                _this.win();
            }
        } else {
            //Letter is not in word
            //Burn one chance
            _this.chances--;
            //Update user interface
            gameController.chances.textContent = _this.chances;

            //Check for game over
            if (_this.chances == 0) {
                _this.lose();
            }
        }
        //Reset the input
        gameController.input.value = '';
    };

    this.setup = function () {
        //Reset the game back to a starting position
        gameController.previousGuesses.innerHTML = '';
        this.previousGuesses = [];
        this.chances = maxChances;
        this.displayString = '';
        //Get a new word
        let i = Math.floor( Math.random() * this.wordList.length );//The floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result.
        this.word = this.wordList[ i ];

        //How do we display enough empty spaces
        for ( let i = 0; i < this.word.length; i++ ) this.displayString += '_';//for loops do not need {} braces IF we only have one line of code inside the loop. "this.dislayString += '_';" is actually INSIDE this loop.

        //get our values to show on screen
        gameController.word.textContent = this.displayString;
        gameController.chances.textContent = this.chances;
        //get our values to show in console
        console.log( this.word );
    };



    //Win
    this.win = function () : void {
        if ( confirm( 'You win! Play again?' )) {
            this.setup();
        }
    };

    //Lose
    this.lose = function () : void {
        if ( confirm( 'You lose! Play again?' )) {
            this.setup();
        }
    };
};


//END OF FILE

var game = new Hangman();

game.run();