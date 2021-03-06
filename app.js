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
        const words = document.createElement('ul');
        
        // set its inner html
        words.innerHTML = `
            <li class="red no-bullet">${leadWords[0]}</li>
            <li class="yellow no-bullet">${leadWords[0]} ${meme.wordOne}</li>
            <li class="blue no-bullet">${leadWords[1]} ${meme.wordTwo}</li>
            <li class="green no-bullet">${leadWords[2]} ${meme.wordThree}</li>
            <li class="purple no-bullet">${leadWords[3]} ${meme.wordFour}</li>
        `;

        // append to parent element
        list.appendChild(words);
    }

    static clearFields() {
        document.querySelector('#word-1').value = '';
        document.querySelector('#word-2').value = '';
        document.querySelector('#word-3').value = '';
        document.querySelector('#word-4').value = '';
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

    UI.clearFields();

});

// Event: Remove Meme

