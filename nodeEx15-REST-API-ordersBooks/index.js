const express = require('express');
const mongoose = require('mongoose');
const app = express();

const { port } = require('./configs/server');
const dbConfig = require('./configs/database');

const userRouter = require('./routers/userRouter');
const authRouter = require('./routers/authRouter');
const bookRouter = require('./routers/bookRouter');

mongoose.connect(`mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.databaseName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

app.use(express.json());

app.use('/api', userRouter);
app.use('/api', authRouter);
app.use('/api', bookRouter);

app.listen(port, () => {
  console.log(`Server runs on port: ${port}`);
});