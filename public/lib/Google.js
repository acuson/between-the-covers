const Google = {
    searchVolumes: async title => {
        const url = `/api/google?q=${title}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    },
    getById: async id => {
        const url = `/api/google/${id}`;
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
