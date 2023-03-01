const html = require("html-template-tag");
const layout = require("./layout");

module.exports = (user, pages) => layout(html`
  <h3>Pages written by ${user.name}</h3>
  <hr>
  <form method="GET" action="/wiki/search">
    <input type="text" name="search" />
    <button type="submit">Search</butt