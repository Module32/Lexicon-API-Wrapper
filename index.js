const fetch = require('node-fetch');

async function word(term) {
  if (!term) throw new Error("Lexicon wants a term, not nothing!")
  const response = await fetch(`https://lexicon.coefficient.repl.co/api/word/${term}`);
  const data = await response.json();
  return data
}

async function user(id) {
  if (!id) throw new Error("Lexicon wants a user ID, not nothing!")
  const response = await fetch(`https://lexicon.coefficient.repl.co/api/users/${id}`);
  const data = await response.json();
  return data
}

module.exports = { word, user }