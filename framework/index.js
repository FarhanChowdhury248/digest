const snabbdom = require("snabbdom");

const patch = snabbdom.init([]);

const init = (selector, component) => {
  const app = document.querySelector(selector);
  patch(app, component.template);
};

module.exports = { init };
