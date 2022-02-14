// KEYS
// intitle: Returns results where the text following this keyword is found in the title.
// inauthor: Returns results where the text following this keyword is found in the author.
// inpublisher: Returns results where the text following this keyword is found in the publisher.
// subject: Returns results where the text following this keyword is listed in the category list of the volume.
// isbn: Returns results where the text following this keyword is the ISBN number.
// lccn: Returns results where the text following this keyword is the Library of Congress Control Number.
// oclc: Returns results where the text following this keyword is the Online Computer Library Center number.

// Example request body:
//  {
//   "search": "search string",
//   "params": {
//       "inauthor": "author name"
//    }
//  }
const customSearch = async obj => {
    const response = await fetch(`.api/google/`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
};

// fetch by subject keyword
const searchBySubject = async subject => {
    const response = await fetch(`./api/google/subject/${subject}`);
    const data = await response.json();
    return data;
};

// fetch by google id
const getById = async id => {
    const response = await fetch(`./api/google/${id}`);
    const data = await response.json();
    return data;
};

// fetch by author keyword
const searchByAuthor = async keyword => {
    const response = await fetch(`./api/google/author/${keyword}`);
    const data = await response.json();
    return data;
};
