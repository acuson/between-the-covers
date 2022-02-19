

const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: { 'Content Type' : 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

const signupFormHandler = async e => {
    e.preventDefault();

    const first_name = document.querySelector("#fname-signup").value.trim();
    const last_name = document.querySelector("#lname-signup").value.trim();
    const username = document.querySelector("#username-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();

    if (first_name && last_name && username && email && password) {
        const response = await fetch("/api/users/", {
            method: "POST",
            body: JSON.stringify({
                first_name,
                last_name,
                username,
                email,
                password,
            }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.replace("/dashboard");
        }
    }
};

const button = document.querySelector(".signup-form");

button.addEventListener("submit", signupFormHandler);
  