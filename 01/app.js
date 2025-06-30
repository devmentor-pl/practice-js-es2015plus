const message = {
  text: ((text) => text)("Webpack działa! Gratulacje!"),
};

const { text } = { ...message };

console.log(text);
console.log("test");
console.log("test");
console.log("test");
console.log("test");
console.log("test");
