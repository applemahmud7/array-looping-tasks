const statement = 'I am a hard working person';
let words = statement.split(' ');
//console.log(words);
let reversed = '';

for (let i = words.length - 1; i >= 0; i--) {
  reversed = reversed + words[i] + ' ';
}

console.log(reversed);