// const fetch = require("node-fetch");
// require("dotenv").config();
// const router = require("express").Router();

// const GET_UR_OWN_API_KEY = process.env.TIMES_API_KEY;
// const BASE_URL = process.env.BASE_URL;

const bookList = document.getElementById("bookList");
const searchBar = document.getElementById("searchBar");
let htmlString = "";
let uploadBooks = [];

searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredCharacters = uploadBooks.filter((b) => {
    return (
      b.books.toLowerCase().includes(searchString) ||
      b.title.toLowerCase().includes(searchString) ||
      b.description.toLowerCase().includes(searchString)
    );
  });
  displayBooks(filteredCharacters);
})

// fetch NY Times API
const loadBooks = async () => {
  try {
    const res = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=Ziag1IJFgcbUcl6ZKJtQRTxQIHlymt9L`);
    uploadBooks = await res.json();
    // Create for loop to display top 90 best selling books of the NY Times API
    for (let i = 0; i < uploadBooks.results.lists.length; i++) {
      const bookResults = uploadBooks.results.lists[i].books;
      displayBooks(bookResults);
    }
  } catch (err) {
    console.log(err);
  }
};

// grab json data and display it to the HTML 
const displayBooks = (results) => {
  results.forEach((result) => {
    htmlString += `<li class="books" id="book-box">
        <h3>${result.title}</h3>
        <h4>Author: ${result.author}</h4>
        <p>${result.description}</p>
        <a href="${result.amazon_product_url}" target="_blank">Buy the book</a>
        <img src="${result.book_image}"></img>
      </li>`;
  })
  bookList.innerHTML = htmlString;
};

loadBooks();