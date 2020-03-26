const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false,
});

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM('open, closed'),
  },
});

const pages = Page.findAll();

Page.beforeValidate((pageInstance, optionsObject) => {
  pageInstance.slug = pageInstance.title.replace(/\s+/g, '_').replace(/\W/, '');
  console.log(pageInstance.slug);
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: 