const fs = require('fs');

fs.readFile('./files/peter.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Read data from disk...')
  console.log(data); 
})

// Demonstrate the async qualities of node
console.log('Good Day!')

process.on('uncaughtException', err => {
  console.error(`There was an uncaught error ${err}`);
  process.exit(1);
});

