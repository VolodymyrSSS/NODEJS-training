import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4010;

// insert mongoose connection (connection between MongoDB and API)
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// bodyParser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
  res.send(`Node and Express server running on port ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`Your server is running on port ${PORT}`)
);