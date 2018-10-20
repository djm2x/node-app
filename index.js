const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./src/routes/metierRoutes');
// import routes from './src/routes/metierRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Middleware
app.use(cors({origin: 'http://localhost:4000'}));

app.route('*').get((req, res, next) => {
    console.log(`express:req from ${req.originalUrl}`);
    console.log(`express:req type ${req.method}`);
    next();
});
//Routes
routes(app);

//show in browser
app.get('/', (req, res) => res.send(`<h1>1-server node is running in port ${PORT}</h1>`));
//show in console
app.listen(PORT, () => console.log(`2-runnig in port ${PORT}`));
