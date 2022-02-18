$('table tr').on('click', 'th', function () {
    href = `/club-page/${id}`;
 }) 

//  user_id;
// function fetchYourClubs(){
//getting the book id and book name
// fetch('/api/clubs/')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//       console.log(data)
fetch('/api/users/')
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data[0].id);
    // let user = 

  })
  
// })
//   function dataDisplay(data){
//       console.log(data);
//       for (let i = 0; i < data.length; i ++){
//         var userName = document.createElement('h3');
//         var issueTitle = document.createElement('p');
//         userName.textContent = data[i].user.login;
//         issueTitle.textContent = data[i].title;
//         issueContainer.append(userName);
//         issueContainer.append(issueTitle);
//       }
//   }