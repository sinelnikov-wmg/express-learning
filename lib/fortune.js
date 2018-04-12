const fortunes = [
  'test',
  'test1',
  'test2',
];
exports.getFortune = () => {
  const idx = fortunes[Math.floor(Math.random() * fortunes.length)];
  return fortunes[idx];
};
