'use strict';

const quote = document.getElementById('quote');
const author = document.getElementById('author');
const api_url = ' https://api.quotable.io/random';

async function getQuote(url) {
  const responce = await fetch(url);
  let data = await responce.json();
  quote.innerText = data.content;
  author.innerText = data.author;
}

getQuote(api_url);
