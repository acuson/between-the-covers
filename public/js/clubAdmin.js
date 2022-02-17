let clubName = document.querySelector("#club-name").value;
let clubDescription = document.querySelector("#club-description").value;
let clubBook = document.querySelector("#club-book").value;
let clubCapacity = document.querySelector("#club-capacity").value;
let clubTime = document.querySelector("#club-time").value;
let clubLink = document.querySelector("#club-link").value;

let btns = document.querySelectorAll("button");

const updateClub = async () => {
    const reqBody = {};
};

const click = e => {
    e.preventDefault();
    let currentBtn = e.currentTarget.previousElementSibling;
    // console.log(currentBtn.getAttribute("data-active"));
    if (currentBtn.getAttribute("data-active") == "false") {
        currentBtn.removeAttribute("disabled");
        currentBtn.setAttribute("data-active", true);
    } else {
        currentBtn.setAttribute("disabled", "");
        currentBtn.setAttribute("data-active", false);
        console.log(clubName);
    }
};

btns.forEach(btn => {
    btn.addEventListener("click", click);
});
