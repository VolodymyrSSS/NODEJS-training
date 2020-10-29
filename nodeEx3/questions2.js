const collectAnswers = require('./lib/collectAnswers')

const questions = [
  'What is your name? ',
  'Where do you live? ',
  'What are your going to do with NodeJS? '
];

// collectAnswers(questions, answers => {
//   console.log('Thank you for your answers. ');
//   console.log(answers);
//   process.exit();
// });

// using handler for EventEmitter
const answerEvents = collectAnswers(questions);
answerEvents.on('answer', answer => {
  console.log(`Question answered: ${answer}`);
});
answerEvents.on('complete', answers => {
  console.log('Thank you for your answers. ');
  console.log(answers);
});
answerEvents.on('complete', () => process.exit());