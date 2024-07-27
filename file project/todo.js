const fs = require('node:fs');
var [ , ,action,content] = process.argv;
console.log(action,content);


if (action == "add"){
    
    fs.appendFile('./todo.txt', content, err => {
      if (err) {
        console.error(err);
      } else {
        // done!
      }
    });
}else if (action === "read"){
    fs.readFile('./todo.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
      });
}


