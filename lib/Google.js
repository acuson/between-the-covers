const fetch = require("node-fetch");

const Google = {
    // searchVolumes: async title => {
    //     const url = `/api/google?q=${title}`;
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     return data;
    // },
    // getById: async () => {
    //     const response = await fetch(
    //         "https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=AIzaSyBjAgw7y4pKEFerSBsmVptoqm2kPnGdDJw"
    //     );
    //     const data = response.json();
    //     return data;
    // },

    getById: async id => {
        const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyBjAgw7y4pKEFerSBsmVptoqm2kPnGdDJw`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    },
};

// const getById = async id => {
//     const url = `/api/google/${id}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//     //     console.log(data.volumeInfo);
//     //     return data.volumeInfo;
// };

module.exports = Google;
