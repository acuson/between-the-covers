const fetch = require('node-fetch');
require('dotenv').config();
const url = require('url');
const router = require('express').Router();

const API_KEY = process.env.GOOGLE_API_KEY;
const BASE_URL = process.env.BASE_URL;

router.post('/', async (req, res) => {
  try {
    console.log(req.body);

    //IF WORKING FROM URL PARAMETERS
    // const params = new URLSearchParams({
    //     isbn: req.body.isbn,
    //     key: API_KEY,
    //     ...url.parse(req.url, true).query,
    // });

    //IF WORKING FROM REQUEST BODY
    // take request JSON body
    // reformat to URL Parameter String

    // const response = await fetch(`${BASE_URL}?q=${params}`);
    // const data = await response.json();
    // console.log(params);
    // res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const response = await fetch(`${BASE_URL}/${id}?key=${API_KEY}`);
    const { volumeInfo } = await response.json();
    console.log(volumeInfo);
    res.status(200).json(volumeInfo);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/subject/:keyword', async (req, res) => {
  try {
    const keyword = req.params.keyword;
    // console.log(req.params.keyword);
    const response = await fetch(
      `${BASE_URL}?q=subject:${keyword}&key=${API_KEY}`
    );
    const { items } = await response.json();
    res.status(200).json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get('/author/:keyword', async (req, res) => {
  try {
    const keyword = req.params.keyword;
    const response = await fetch(
      `${BASE_URL}?q=inauthor:${keyword}&key=${API_KEY}`
    );
    const { items } = await response.json();
    res.status(200).json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
