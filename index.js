const { init } = require("./framework");
const { User } = require("./src/user");

const firstName = "Jon";
const lastName = "Doe";

(function () {
  window.addEventListener("load", function () {
    init("#app", User({ firstName, lastName }));
  });
})();
