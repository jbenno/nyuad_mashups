# Some examples on node.js
The file are in [/09/Examples/app1/](/09/Examples/app1) and [/09/Examples/app2/](/09/Examples/app2)

- create a new folder for your app (e.g. /app1/)
- open terminal - go to your folder:
- run `npm init`

create a file `config.json` with the following content:
```json
{
    "development":{
        "PORT" : 3000
    }
}
```
- create a file `config.js`:

```JavaScript
const env = process.env.NODE?ENV || 'development';

if(env === 'development') {
    const config = require('./config.json');
    console.log(config);
    const envConfig = config[env];
Object.keys(envConfig).forEach(key => {
    process.env[key] = envConfig[key];
});
}
```

- create file index.js:
```JavaScript
const http = require('http');
require('./config');

const server = http.createServer((req, res) =>{
    
});

server.listen(process.env.PORT)
```

- add this line to `package.json`:
```
"start": "node index.js"
```



add to `index.js` inside the '{}" of the function:
```JavaScript
        res.write('<h1>Our local site</h1>');
        res.end();
```

- run `npm start`
- open `http://localhost:3000` in your browser (the browser should load but of course there is no html-code yet to load)

- in the terminal, stop your script with `ctrl c`

- add to `index.js` inside the '{}" of the function:
```JavaScript
    const url = req.url;
    const method = req.method;
    
    if(url === '/') {
        res.write('<h1>main</h1>');
        res.end();
    }else if(url === '/login') {
            res.write('<h1>login</h1>');
            res.end();
    }
```
- run `npm start`

- create a new file `example.txt` with some arbitrary text in it and create another file `example.js` with:
```JavaScript
const fs = require('fs');
console.log('started');
const data = fs.readFileSync('./example.txt');

console.log('completed');
```

- notice that the code execution is halted until the request is actually processed. Thus this is a *synchronous* function.

- now write:
```Javascript
const data2=fs.readFile('./example.txt', (err, data0) =>{
    console.log('finished');
});

console.log('started');
```
- code execution is going on while the processing runs; -> *asynchronous*

### Using npm (Node Package Manager)
- in the termina run
`npm install nodemon --save-dev`
- this installs nodemon, a tool for debugging, with all its dependencies into the folder. The option `--save-dev` instead of `--save` lets the package only run in `developer` mode. For global installation run option -g.
- look to the folder and package.json
- change the line `"start"` in package.json to 
```JSON
"start": "nodemon index.js"
```
- now you can call the script with `npm start` running via nodemon instead of node.js directely. The advantage of this is that changes in the script show immediately after saving.


### Node express
- Create a new folder (e.g. app2). run
`npm install —save express`

- Create a new file `index.js`:
```JavaScript
const express = require('express');
const app = express();
app.listen(3000, () =>{
    console.log('Server started at port 3000')
});
```
- run in terminal:
`node init`
- add to package.json
```JSON
"start": "node index.js" to package.json
```
- run in terminal
`npm start`

- add to index.js:
```JavaScript
app.use((req, res, next) => {
    console.log('middleware runs');
    next(); //goes forward
});
```
- install body-parser package. Run in terminal:
`npm install —save body-parser`

- add to index.js:
```Javascript
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

app.use((req, res, next) => {
    console.log('middleware works');
    next(); //goes forward
});

app.use(bodyParser.json());
app.use('/', router);

router.route('/').get((req, res) => {
    console.log('route runs');
    res.send('<h1>Route runs in the request</h1>');
});

app.listen(3000, () =>{
    console.log('Server started at port 3000')
});
```
- now change `router.route ...` to
```JavaScript
router.route('/').get((req, res) => {
    console.log('route runs');
    res.send(`
                <form method="post" action="/data">
                    Name: <input name="name" type="text"><br>
                    Age: <input name="age" type="number"><br>
                    <button type="submit">Submit</button>
                </form>
             `);
});
```

add after the first `app.use`-statement
```Javascript
app.use(bodyParser.urlencoded({
        extended: true
}));
```
- try …

- add a new route:
```JavaScript
router.route('/update').put((req,res) => {
    console.log(req.body);
    res.send(req.body);
})
```
