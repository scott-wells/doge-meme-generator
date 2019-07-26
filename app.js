// Meme Class
class Meme {
    constructor(wordOne, wordTwo, wordThree, wordFour) {
        this.wordOne = wordOne;
        this.wordTwo = wordTwo;
        this.wordThree = wordThree;
        this. wordFour = wordFour;
    }
}


// UI Class
class UI {
    static addMemeToList(meme) {
        const leadWords = ['wow', 'very', 'such', 'many'];

        //select the element
        const list = document.querySelector('#meme-list');

        //create a new element to insert
        const words = document.createElement('span');
        
        // set its inner html
        words.innerHTML = `
            ${leadWords[0]} ${meme.wordOne} 
            ${leadWords[1]} ${meme.wordTwo} 
            ${leadWords[2]} ${meme.wordThree} 
            ${leadWords[3]} ${meme.wordFour} 
        `;

        // stick the words on the picture with a random color and size
        // might be easier to reveal the position once submit is clicked

        // append to parent element
        list.appendChild(words);
    }
}


// Store Class

// Event: Add Meme
document.querySelector('#meme-input').addEventListener('submit', (e) => {
    e.preventDefault();

    const wordOne = document.querySelector('#word-1').value;
    const wordTwo = document.querySelector('#word-2').value;
    const wordThree = document.querySelector('#word-3').value;
    const wordFour = document.querySelector('#word-4').value;

    const meme = new Meme(wordOne, wordTwo, wordThree, wordFour);

    UI.addMemeToList(meme);

});

// Event: Remove Meme

