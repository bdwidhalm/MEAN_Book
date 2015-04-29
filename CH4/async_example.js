var fs = require('fs');

fs.readFile('README.txt', 'utf8', function(error, data) {
    if (error) {
        return console.error(error);
    }
    
    console.log(data);
});
