
#### index.js

```javascript
#!/usr/bin/env node

const facts = [
  "Water expands when it freezes.",
  "The speed of light is approximately 299,792 km per second.",
  "Honey never spoils.",
  "Bananas are berries, but strawberries are not.",
  "The human body contains around 37.2 trillion cells."
];

function getRandomFact() {
  return facts[Math.floor(Math.random() * facts.length)];
}

console.log("Welcome to Pulsar Science Facts!");
console.log("Here's a random science fact for you:");
console.log(getRandomFact());
