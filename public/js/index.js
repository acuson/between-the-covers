// const https = require("https");

// const fetch = require("node-fetch");
// axios
//     .get(
//         "https://www.googleapis.com/books/v1/volumes/?q=javascript&key=AIzaSyBjAgw7y4pKEFerSBsmVptoqm2kPnGdDJw"
//     )
//     .then(response => console.log(response));

// const prints = data => {
//     return data;
// };
// const callit = () => {
//     let stuff;
//     https
//         .get(
//             "https://www.googleapis.com/books/v1/volumes/?q=javascript&key=AIzaSyBjAgw7y4pKEFerSBsmVptoqm2kPnGdDJw",
//             res => {
//                 let data = "";
//                 res.on("data", chunk => {
//                     data += chunk;
//                 });
//                 res.on("end", () => {
//                     let books = JSON.parse(data);
//                     return (books = stuff);
//                 });
//             }
//         )
//         .on("error", err => {
//             console.log("Error: ", err.message);
//         });
//     console.log(stuff);
// };
// console.log();

// const morestuff = callit();
// console.log(morestuff);

const hello = () => {
    const response = fetch(
        "https://www.googleapis.com/books/v1/volumes/?q=javascript&key=AIzaSyBjAgw7y4pKEFerSBsmVptoqm2kPnGdDJw"
    );
    const data = response.json();
    console.log(data);
};

hello();
