const html = require("html-template-tag");
const layout = require("./layout");

module.exports = (page, author) => layout(html`
  <h3>${page.title}
      <small> (<a href="/wiki/${page.slug}/similar">Similar</a>)</small>
  </h3>
  <h4>by <a href="PLACEHOLDER-AUTHOR-URL">PLACEHOLDER AUTHOR NAME</a></h4>
  <hr/