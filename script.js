const links = document.querySelectorAll(".tab");

links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});


/* TYPING EFFECT */

const words = [
    "Hi, I'm",
  "Hola, soy",
  "Bonjour, je suis",
  "こんにちは、私は",
  "안녕하세요, 저는"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect(){

    currentWord = words[wordIndex];

    if(isDeleting){
        typingElement.textContent =
            currentWord.substring(0, letterIndex--);
    }
    else{
        typingElement.textContent =
            currentWord.substring(0, letterIndex++);
    }

    let speed = isDeleting ? 70 : 120;

    // pause after typing
    if(!isDeleting && letterIndex === currentWord.length + 1){
        speed = 1500;
        isDeleting = true;
    }

    // next word
    else if(isDeleting && letterIndex === 0){
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 300;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();