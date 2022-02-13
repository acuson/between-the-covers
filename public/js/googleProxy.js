const searchBySubject = async subject => {
  const response = await fetch(`./api/google/subject/${subject}`);
  const data = await response.json();
  //   console.log(data);
  return data;
};

const getById = async id => {
  const response = await fetch(`./api/google/${id}`);
  const data = await response.json();
  //   console.log(data);
  return data;
};

const searchByAuthor = async keyword => {
  const response = await fetch(`./api/google/author/${keyword}`);
  const data = await response.json();
  //   console.log(data);
  return data;
};
