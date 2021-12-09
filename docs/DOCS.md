# Lexicon API Docs
#### "*bruh comeon you need documentation like bruh.*" -Master Oogway, **Kung Fu Panda**
<hr>

### Hey!
These are the docs to Lexicon's API, which is an API created by Module64 for Lexicon. The current wrapper is an NPM package, which will allow you to access the API from your Node.js code.

### Checking out the API
These are the current API endpoints Lexicon contains:

https://lexicon.coefficient.repl.co/api/users/[id]<br>
https://lexicon.coefficient.repl.co/api/word/[word]<br>
https://lexicon.coefficient.repl.co/api/classes/[id]

This list will be updated as time goes on. You can check out what each endpoint does and the kind of data it returns.

### Install
To install the NPM package, run this command in terminal:
```
npm i @module64/lexiconapi
```
This will install the Lexicon API wrapper for your Node.js code. Congrats! You installed the package!

### Discussing each endpoint
#### Users
Lexicon has a login system for users to star words, add words to their indexes for practice, and more. We offer an API for this data so that you can access public user data. The following code will let you print the **user** data into terminal:
```js
const lexicon = require("@module64/lexiconapi");

lexicon.user(1).then(data => {
  console.log(data)
})
```
#### Words
Obviously, the main fundamental of Lexicon is being able to look up words and find definitions, synonyms, and antonyms. The API extends this capability into other software. To make a request to the **word** endpoint, simply enter this into your code:
```js
const lexicon = require("@module64/lexiconapi");

lexicon.("lexicon").then(data => {
  console.log(data)
})
```
#### Classes
With Lexicon, we want to create a tool for educators as well as for students. That's why Lexicon ships with an API for _classes_, which can be created by teachers to manage their students and roll out assignments. To get data from the **class** API, put this into your file:
```js
const lexicon = require("@module64/lexiconapi");

lexicon.classes(1).then(data => {
  console.log(data)
})
```

That's the Lexicon documentation for now! For any questions, start a discussion in this repository. :D

###### Lexicon Quickstart, 2021 - really simple!
