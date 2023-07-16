document.getElementById("loginBTN").addEventListener("click", login)

function login(e) {
    e.preventDefault() 
    let emailEntered = document.getElementById("email").value;
    let passwordEntered = document.getElementById("password").value;

    
    let storedUsers = JSON.parse(localStorage.getItem("usersData"))
    console.log(storedUsers)

    if (storedUsers == null) {
        swal("Not", "EMAIL or Password is incorrect");
    } else {
        let currentUser = storedUsers.find(e => e.email == emailEntered)
        console.log(currentUser)
        if (currentUser.email == emailEntered && currentUser.password == passwordEntered) {
            moveToDashboard()
            let current = {
                currentName: currentUser.username,
                userId: currentUser.id
            }
            let currentuser = JSON.stringify(current)
            localStorage.setItem("currentUser", currentuser)
        } else {
            swal("Not", "EMAIL or Password is incorrect");
        }
    }
}

function moveToDashboard() {
    location.href = "./dashboard.html"
}