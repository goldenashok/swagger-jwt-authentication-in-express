const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swaggerConfig');
const dotEnv = require('dotenv');
const cors = require('cors');
const Exmployee = require('./routes/api/employees');
const User = require('./routes/api/user');
const Todo = require('./routes/api/todo');
const corsOptions = require('./config/corsOptions');

const app = express();
dotEnv.config();

const port = (process.env.NODE_ENV === 'development' ? process.env.DEVELOPMENTPORT : process.env.PRODUCTIONTPORT) || 4000;
const runningPort = process.env.NODE_ENV === 'development' ? process.env.DEVELOPMENTURL : process.env.PRODUCTIONURL;

// middleware for swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

//Inital call
app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.use('/employees', Exmployee);
app.use('/login', User);
app.use('/todos', Todo);


app.listen(port, (err) => {
    if (err) {
        console.log(`Server getting error : ${err}`);
    }
    console.log(`Server started on port ${runningPort}`)
})