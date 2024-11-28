document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Example login credentials (You can replace with real authentication)
    if (username === "lornakid" && password === "letmein29") {
        window.location.href = "home.html" ;
    } else {
        alert("Invalid username or password.");
    }
});
