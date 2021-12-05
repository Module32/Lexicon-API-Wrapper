## Wrapper Quickstart
#### "*every cool program needs a cool quickstart.*" -Sun Tzu, **The Art of War**
<hr>

### Hey!
This right here is the quickstart for the Lexicon wrapper's tutorial. This quickstart is designed for the `npm` wrapper, which is coded in Node.js.

### First steps
To begin, let's install the module. Type this into your terminal:
```
npm i @module64/lexiconapi
```
This will install the Lexicon API wrapper to your dependencies. There you go! You just installed the wrapper for npm!

### Coding Something
Let's start with an API for the fundamental part of Lexicon-- the words. Lexicon has a nifty system in place that converts the data received from its dictionary module to JSON for usage in APIs.

We're currently using the module PyMultiDictionary, which is a Python dictionary for English. So to use the API for this module, we can simply set up our file and write:
```js
const lexicon = require('@module64/lexiconapi');

// Since this is a promise, we have to wait to get the data and then print it out
lexicon.word("abdicate").then(data => {
  console.log(data);
})
```
Now, when you run this file, you should see something very similar to this, if not exactly the same:
```json
{
  antonyms: "['claim', 'enter', 'requisition', 'take office']",
  definition: "(['Verb'], 'The definition of abdicate in the dictionary is to renounce, esp formally.', 'Abdication is when a monarch, such as a king or emperor gives up or relinquishes his or her office and power.')",
  starred: 'unstarred',
  synonyms: "['abandon', 'abjure', 'abnegate', 'cede', 'forgo', 'give up', 'hand over', 'quit', 'relinquish', 'renounce', 'resign', 'retire', 'step down', 'surrender', 'vacate', 'waive', 'yield']",
  word: 'abdicate'
}
```
Now ain't that cool! You just fetched the Lexicon API! Congrats!

Now, you can check out the **docs** (coming soon) or take a look at the API some more. Happy Lexicon-ing!

###### Lexicon Quickstart, 2021 - really simple!