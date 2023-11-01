'use strict';

const quote = document.getElementById('quote');
const author = document.getElementById('author');
const api_url = ' https://api.quotable.io/random';
const x_api = 'https://twitter.com/intent/tweet';

const newQuote = document.getElementById('new-quote');

async function getQuote(url) {
  const responce = await fetch(url);
  let data = await responce.json();
  quote.innerText = data.content;
  author.innerText = data.author;
}

function share() {
  window.open(
    'https://twitter.com/intent/tweet?text=' +
      quote.innerText +
      ' ---- A quote by ' +
      author.innerText,
    'Tweet Window',
    'width = 600, height = 300'
  );
}
