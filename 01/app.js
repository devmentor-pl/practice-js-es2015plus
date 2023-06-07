const message = {
  text: ((text) => text)("Webpack jest super! Gratulacje!"),
};

const { text } = { ...message };

console.log(text);
