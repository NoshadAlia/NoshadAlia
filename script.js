document.querySelector('form').onsubmit = function (e) {
    e.preventDefault();
    let pass = document.getElementById("password").value
    let conpass = document.getElementById("confirmpassword").value

    if (pass != conpass) {
        swal("Password Error", "...Password and Confirm Password are not same!");
    } else {
        let uname = document.getElementById("username").value;
        let uemail = document.getElementById("email").value;
        let upassword = document.getElementById("password").value;
        let cpassword = document.getElementById("confirmpassword").value


        const userData = {
            username: uname,
            email: uemail,
            password: upassword,
            id: Math.floor(Math.random() * 100001) + 1001
        }

        let users = localStorage.getItem("usersData")
        if (users == undefined) {
            users = []
        } else {
            users = JSON.parse(users)
        }

        users.push(userData)

        let data = JSON.stringify(users)
        localStorage.setItem("usersData", data)

        swal("Well Come", "Sign-Up successfully"); 
        document.getElementById("username").value = ""
        document.getElementById("email").value = ""
        document.getElementById("password").value = ""
        document.getElementById("confirmpassword").value = ""
    }
}
