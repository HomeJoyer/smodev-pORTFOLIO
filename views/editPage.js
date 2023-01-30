const html = require("html-template-tag");
const layout = require("./layout");

module.exports = (page, author) => layout(html`
  <h3>Edit a Page</