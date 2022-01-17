const path = require('path');
const express = require('express');

const app = express();

/*
console.log(__dirname); // /Users/sonminseog/Desktop/IMagineProject/src
console.log(__filename); // /Users/sonminseog/Desktop/IMagineProject/src/index.js
*/
const html_public_path = path.join(__dirname, './html/public');
console.log(html_public_path);
app.use(express.static(html_public_path));


app.listen(5001, () => {
    console.log('Server run at 5001 port');
});