const createElement =
  (tagName) =>
  (strings, ...args) => ({
    type: tagName,
    template: strings.reduce((acc, cur, i) => acc + cur + (args[i] || ""), ""),
  });

const div = createElement("div");
const p = createElement("p");

module.exports = { div, p };
