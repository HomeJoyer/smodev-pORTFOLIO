const html = require('html-template-tag');
const layout = require('./layout');

module.exports = pages =>
  layout(html`
    <h3>Pages</h3>
    <hr />
  