$('table tr').on('click', 'th', function () {
    window.location.href = `/club-profile/${club.id}`;
 }) 

//  user_id;

//  club-page/id of the club
function submitBtn(event){
    event.preventDefault();
    let createClub = {
        name: nameEl.value,
        description: descriptionEl.value,
        club_book: club_bookEl.value,
        /* book_id: req.body.book_id, */
        capacity: capacityEl.value,
        meeting_day: meeting_dayEl.value,
        meeting_time: meeting_timeEl.value,
        meeting_start: club_dateEl.value,
        meeting_link: club_dateEl.value,
        active: true,
    };
    const options ={
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(createClub)
    }
    
    fetch('/api/clubs/', options)
    .then(data => console.log(data.json))
    .catch(err => console.log(err))
};