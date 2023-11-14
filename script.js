function validation() {
    let Usernamevalidation = document.querySelector("#exampleInputEmail1").value; 
    let Passwordvalidation = document.querySelector("#exampleCheck1").value; 

    if (Usernamevalidation.trim() === "") { 
        alert("Please enter a username");
        return;
    }

    if (Passwordvalidation.trim() === "") { 
        alert("Please enter a password");
        return;
    }

}
