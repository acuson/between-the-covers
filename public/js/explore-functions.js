const joinClub = {
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
    
    //FETCH TO CALL API

    card.style.visibility = 'hidden'
    card.style.opacity = 0;
    card.style.transition= 'opacity 1s';
}

