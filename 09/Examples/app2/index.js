const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

app.use((req, res, next) => {
    console.log('middleware works');
    next(); //goes forward
});

app.use(bodyParser.urlencoded({
        extended: true
}));
app.use(bodyParser.json());
app.use('/', router);

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

router.route('/data').post((req,res) => {
    console.log(req.body);
    res.send(req.body);
})

router.route('/update').put((req,res) => {
    console.log(req.body);
    res.send(req.body);
})

router.route('/delete/:id').put((req,res) => {
    res.send(req.params);
})

app.listen(3000, () =>{
    console.log('Server started at port 3000')
});