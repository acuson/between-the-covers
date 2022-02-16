let createClub = {
 
    // name: req.body.name,
    // description: req.body.description,
    // club_book: req.body.club_book,
    // /* book_id: req.body.book_id, */
    // capacity: req.body.capacity,
    // meeting_day: req.body.meeting_day,
    // meeting_time: req.body.meeting_time,
    // meeting_link: req.body.meeting_link,
    // active: req.body.active,

    name: 'darby',
    description: 'darby',
    club_book: 'darby',
    /* book_id: req.body.book_id, */
    capacity: 5,
    meeting_day: 'darby',
    meeting_time: 'darby',
    meeting_link: 'darby',
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