const { h } = require("snabbdom/build/h");

const createElement =
  (tagName) =>
  (strings, ...args) => ({
    type: "element",
    template: h(
      tagName,
      {},
      strings.reduce((acc, cur, i) => acc + cur + (args[i] || ""), "")
    ),
  });

const div = createElement("div");
const p = createElement("p");

module.exports = { div, p };
