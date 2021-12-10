//This is for my audio grab in java.
// const audio = document.getElementById('audio');

// //Defining the sound for java followed by adding an event property.
// const happySound = document.getElementById('happy-sound');
// happySound.addEventListener('click', () => {
//   audio.src = 'Happy.mp3';
//   audio.play();
// });

// const sadSound = document.getElementById('sad-sound');
// sadSound.addEventListener('click', () => {
//   audio.src = 'Sad song.mp3';
//   audio.play();
// });

// const danceSound = document.getElementById('dance-sound');
// danceSound.addEventListener('click', () => {
//   audio.src = 'Dance.mp3';
//   audio.play();
// });

import { characters } from './data.js';

const template = document.getElementById('template');
const characterList = document.getElementById('character-list');
const audio = document.getElementById('audio');

// loop the array
for (let character of characters) {
    console.log(character)
    // for each character:
    // make a copy of the template
    const copy = template.content.cloneNode(true);

    // find the h2, img, and button elements
    const header = copy.querySelector('h2');
    const image = copy.querySelector('img');
    const button = copy.querySelector('button');

    // set the h2.textContent and img.src (This is pulling from template.)
    header.textContent = character.name;
    image.src = character.image;
  
    // This is telling it to pick a specific audio
    button.addEventListener('click', () => {
      audio.src = character.audio;
      audio.play();
    });
  
    // add (append) the copy to the list (ul)
    characterList.appendChild(copy);
  }
