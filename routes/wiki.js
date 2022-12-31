
const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage.js');
const { Page } = require('../models');
const wikiPage = require('../views/wikipage.js');

router.get('/', (req, res, next) => {
  res.redirect('../');
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

router.get('/:slug', async (req, res, next) => {
  console.log('SLUUUG', req.params.slug);
  const pages = await Page.findOne({ where: { slug: req.params.slug } });
  console.log(pages);
  res.send(wikiPage(pages));
});

router.post('/', async (req, res, next) => {