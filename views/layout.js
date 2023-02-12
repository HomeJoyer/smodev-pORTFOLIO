const html = require("html-template-tag");

module.exports = (content) => html`<!DOCTYPE html>
  <html lang="en">
    <head>
      <title>WikiStack</title>
      <link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet">
      <link href="/stylesheets/style.css" rel="stylesheet">
    </head>
    <body>
      <div class="navbar navbar-fixed-top navbar-inverse" role="