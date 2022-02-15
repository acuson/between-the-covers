let joinClub = {
    user_id: 1 // GET FROM SESSION LOGIN
};


$('.dislike').on('click', dislike)
$('.like').on('click', like)

function dislike(e){
    const card = e.target.parentElement.parentElement
    card.style.visibility = 'hidden'
    card.style.opacity = 0;
    card.style.transition= 'opacity 1s';

}

function like(e){
    const card = e.target.parentElement.parentElement
    const clubId = card.dataset.clubId

    joinClub.clubId = clubId
    
    const options ={
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(joinClub)
    }

    fetch('/api/clubs/join', options)
        .then(data => console.log(data.json))
        .catch(err => console.log(err))
    

    card.style.visibility = 'hidden'
    card.style.opacity = 0;
    card.style.transition= 'opacity 1s';
}


