import app from './app';

app.listen(process?.env?.PORT || 3000, () => {
  console.log(`🚀 Express.js is listening on port ${process?.env?.PORT || 3000}.`);
});
