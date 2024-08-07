function validation(values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/

    if(values.name === "") {
        error.name = "Name should not be empty"
    }
    else{
        error.name = ""
    }

    if(values.email === "") {
        error.email = "Email should not be empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email did not match"
    }else{
        error.email = ""
    }

    if (values.password === "") {
        error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Passwords did not match"
    }else{
        error.password = ""
    }
    return error;

}

export default validation