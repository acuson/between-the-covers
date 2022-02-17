let clubName = document.querySelector("#club-name");
let clubDescription = document.querySelector("#club-description");
let clubBook = document.querySelector("#club-book");
let clubCapacity = document.querySelector("#club-capacity");
let clubTime = document.querySelector("#club-time");
let clubLink = document.querySelector("#club-link");

let btns = document.querySelectorAll("button");

const updateClub = async (key, value) => {
    let reqBody = {};
    reqBody[key] = value;
    const postId = window.location.search;
    const clubId = new URLSearchParams(postId).get("id");
    console.log(clubId);
    console.log(reqBody);
    await fetch(`/api/clubs/${postId}`, {
        method: "PUT",
        body: JSON.stringify(reqBody),
        headers: {
            "Content-Type": "application/json",
        },
    });
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
        const key = currentBtn.getAttribute("id");
        const value = currentBtn.value;
        updateClub(key, value);
    }
};

btns.forEach(btn => {
    btn.addEventListener("click", click);
});
