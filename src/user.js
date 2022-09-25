const { div } = require("../framework/element");

const User = ({ firstName, lastName }) => div`Hello ${firstName} ${lastName} !`;

module.exports = { User };
