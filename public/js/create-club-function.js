let nameEl = document.getElementById('name');
let submitEl = document.getElementById('submit');
let descriptionEl = document.getElementById('description');
let club_bookEl = document.getElementById('club_book');
let meeting_linkEl = document.getElementById('meeting_link');
let meeting_timeEl = document.getElementById('meeting_time');
let club_dateEl = document.getElementById('club_date');

function submitBtn(event){
    event.preventDefault();
    let createClub = {
        name: nameEl.value,
        description: descriptionEl.value,
        club_book: club_bookEl.value,
        /* book_id: req.body.book_id, */
        capacity: 5,
        meeting_day: 'darby',
        meeting_time: 'darby',
        meeting_start: meeting_startEl.value,
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

submitEl.addEventListener("click", submitBtn);