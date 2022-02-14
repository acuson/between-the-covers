/* let likeBtn = $('.like')
let dislikeBtn = $('.dislike')
 */

let text = 'hi'

$('.dislike').on('click', dislike)


function dislike(e){
    const card = e.target.parentElement.parentElement
    card.style.visibility = 'hidden'
    card.style.opacity = 0;
    card.style.transition= 'opacity 1s';

}

function like(e){

}