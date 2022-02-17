$('table tr').on('click', 'th', function () {
    href = `/club-page/${id}`;
 }) 

//  user_id;

//  club-page/id of the club
// function submitBtn(event){
//     event.preventDefault();
//     let yourClub = {
//         // name: nameEl.value,
//         // description: descriptionEl.value,
//         // club_book: club_bookEl.value,
//         // /* book_id: req.body.book_id, */
//         // capacity: capacityEl.value,
//         // meeting_day: meeting_dayEl.value,
//         // meeting_time: meeting_timeEl.value,
//         // meeting_start: club_dateEl.value,
//         // meeting_link: club_dateEl.value,
//         active: true,
//     };
//     const options ={
//         method: 'POST',
//         headers:{
//             'Content-Type': 'application/json',
//         },
//         body:JSON.stringify(yourClub)
//     }
    
//     fetch('/api/clubs/', options)
//     .then(data => console.log(data.json))
//     .catch(err => console.log(err))
// };

fetch('/api/clubs/1')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.id);
    data.forEach(id => {
        $('th')
    })
  }); 