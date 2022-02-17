let clubName = document.querySelector("#club-name");
let clubDescription = document.querySelector("#club-description");
let clubBook = document.querySelector("#club-book");
let clubCapacity = document.querySelector("#club-capacity");
let clubDay = document.querySelector("#meeting_day");
let clubTime = document.querySelector("#meeting_time");
let clubLink = document.querySelector("#meeting_link");

let btns = document.querySelectorAll("button");

// PUT request to api to update club
const updateClub = async (key, value) => {
    let reqBody = {};
    // Assign parameters as object
    reqBody[key] = value;
    // Pull Club id from url string that was passed from previous page
    const urlString = window.location.search;
    const clubId = new URLSearchParams(urlString).get("id");

    // Fetch request to API
    try {
        await fetch(`/api/clubs/${clubId}`, {
            method: "PUT",
            body: JSON.stringify(reqBody),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(`Club with id ${clubId} has been updated`);
    } catch (err) {
        console.log(err);
        console.log("Club not updated");
    }
};

// Toggle textarea enabled/disabled and save
const toggleEdit = e => {
    e.preventDefault();
    // Selects textarea sibling
    let currentBtn = e.currentTarget.previousElementSibling;
    let iconEl = e.currentTarget.children[0];
    if (currentBtn.getAttribute("data-active") == "false") {
        currentBtn.removeAttribute("disabled");
        currentBtn.setAttribute("data-active", true);

        // Change icon for funsies
        iconEl.classList.remove("fa-gear");
        iconEl.classList.add("fa-floppy-disk");
    } else {
        currentBtn.setAttribute("disabled", "");
        currentBtn.setAttribute("data-active", false);
        const key = currentBtn.getAttribute("id");
        const value = currentBtn.value;

        // Change icon for funsies
        iconEl.classList.remove("fa-floppy-disk");
        iconEl.classList.add("fa-gear");

        // Calls function to update club, passing in key from id selector as param
        updateClub(key, value);
    }
};

// Event listener for each button
btns.forEach(btn => {
    btn.addEventListener("click", toggleEdit);
});
