const fortunes = [
  'test',
  'test1',
  'test2',
];
exports.getFortunes = () => {
  const idx = Math.floor(Math.random() * fortunes.length);

  return fortunes[idx];
};
