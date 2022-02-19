/* let nameEl = document.getElementById('name');
let submitEl = document.getElementById('submit');
let descriptionEl = document.getElementById('description');
let club_bookEl = document.getElementById('club_book');
let meeting_linkEl = document.getElementById('meeting_link');
let meeting_timeEl = document.getElementById('meeting_time');
let meeting_dayEl = document.getElementById('meeting_day');
let club_dateEl = document.getElementById('club_date');
let capacityEl = document.getElementById('capacity');

function submitBtn(event){
    event.preventDefault();
    let createClub = {
        name: nameEl.value,
        description: descriptionEl.value,
        club_book: club_bookEl.value,
        capacity: parseInt(capacityEl.value),
        meeting_day: meeting_dayEl.value,
        meeting_time: meeting_timeEl.value,
        start_date: club_dateEl.value,
        meeting_link: meeting_linkEl.value,
    };
    const options ={
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(createClub)
    }
    
    fetch('/api/clubs/', options)
    .then(data => location.href='/club-page/')
    .catch(err => console.log(err))
};

submitEl.addEventListener("click", submitBtn); */

let nameEl = document.getElementById('name');
let submitEl = document.getElementById('submit');
let descriptionEl = document.getElementById('description');
let club_bookEl = document.getElementById('club_book');
let meeting_linkEl = document.getElementById('meeting_link');
let meeting_timeEl = document.getElementById('meeting_time');
let meeting_dayEl = document.getElementById('meeting_day');
let club_dateEl = document.getElementById('club_date');
let capacityEl = document.getElementById('capacity');
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
        start_date: club_dateEl.value,
        meeting_link: meeting_linkEl.value,
        active: true,
    };
    console.log(createClub);
    const options ={
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(createClub)
    }
    fetch('/api/clubs/', options)
    .then(response => response.json())
    .then(data => (location.href = `/club-page/${data.id}`))
    .catch(err => console.log(err));
};
submitEl.addEventListener("click", submitBtn);