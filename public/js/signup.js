const loginForm = document.getElementById("loginFormBtnLogin");
const loginButton = document.getElementById("signup-btn");
const emailInputEl = document.getElementById("email-input");
const passwordInputEl = document.getElementById("password-input");
const nameInputEl = document.getElementById("name-input");

async function postData(data) {
    // Default options are marked with *
    const response = await fetch('/api/users/signup', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = emailInputEl.value;
    const password = passwordInputEl.value;
    const name = nameInputEl.value;

    if (email && password && name) {
    let newUserLogin = {
        email,
        password,
        name 
    }
        
        postData(newUserLogin)
            .then(data => {
                console.log(data); // JSON data parsed by `data.json()` call
            });
            emailInputEl.value = "",
            passwordInputEl.value = "",
            nameInputEl.value = ""

    }
    else {
        alert("make sure you enter email and login")
    };
})