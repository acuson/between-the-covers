let clubName = document.querySelector("#club-name");
let clubDescription = document.querySelector("#club-description");
let clubBook = document.querySelector("#club-book");
let clubCapacity = document.querySelector("#club-capacity");
let clubTime = document.querySelector("#club-time");
let clubLink = document.querySelector("#club-link");

console.log(location);

let btns = document.querySelectorAll("button");

const updateClub = async (key, value) => {
    let reqBody = {};
    reqBody[key] = value;

    await fetch(`/api/clubs/${id}`);
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
        console.log(currentBtn.value);
        const key = currentBtn.getAttribute("id");
        const value = currentBtn.value;
        updateClub(key, value);
    }
};

btns.forEach(btn => {
    btn.addEventListener("click", click);
});
