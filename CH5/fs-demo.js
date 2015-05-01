var fs = require('fs');

function readFileCallback(error, data) {
    if (error) {
        return console.error(error.message);
    }
    
    console.log(data);
};

fs.readFile(__filename, 'utf8', readFileCallback);
